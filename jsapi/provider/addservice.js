var options = {
    "closeButton": true,
    "debug": true,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "showDuration": "300",
    "hideDuration": "100000",
    "timeOut": "10000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

var providerId = sessionStorage.getItem("id");
var Token = "Bearer " + sessionStorage.getItem('token');



console.log = function () {}
var id = sessionStorage.getItem("id");



$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

function AddServes() {

    if ($(".serviceName").val() == "") {
        swal("يرجى ادخال اسم الخدمة");
        return;
    } else if ($(".serviceNote").val() == "") {
        swal("يرجى ادخال وصف الخدمة");
        return;
    } else {


        AddServes1();
    }

}


function AddServes1() {


    swal({
        title: "هل انت متأكد من انشاء الخدمة",
        text: "",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
        confirmButtonText: "نعم",
        cancelButtonText: "الغاء",
    }, function () {

        var DataSend = {
            name: $(".serviceName").val(),
            note: $(".serviceNote").val(),
            providerId: id
        };


        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": DomainAPI + "Provider/AddService",
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": Token
            },

            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": JSON.stringify(DataSend)
        }).done(function (response) {
            console.log(response);
            swal("تم إنشاء الخدمه بنجاح");
              getData();
        }).fail(function () {
            swal("يوجد خطأ");
        });

    });
}


var RangePages = 0;
Pagension(RangePages);

function Pagension(opsion) {
    if (opsion > 0) {
        RangePages += 10;
        $("#Previous").removeClass("disabled");
    } else {
        if (RangePages <= 0) {
            RangePages = 0;
            $("#Previous").addClass("disabled");
        } else {
            RangePages -= 10;
        }
    }
    getData();
}

function getData() {
    $(".loading").fadeIn();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetServices?providerId=" + id + "&start=" + RangePages + "&end=10",
        "method": "GET",
        "headers": {
            "Authorization": Token
        }
    }


    $.ajax(settings).done(function (response) {

            $(".loading").fadeOut();
            var TextHtml = "",
                j = 1;

            for (var i = 0; i < response.data.length; i++) {
                TextHtml += `<tr class="text-center">
                                                     <td>` + ((j++) + RangePages) + `</td>
                                                        <td>` + response.data[i].name + `</td>
                                                        <td>` + response.data[i].note + `</td>
														 <td>` + (response.data[i].isActive == true ? `<span style="width: 100%;" class="btn ripple btn-success">الخدمه مفعلة</span>` : `<span style="width: 100%;" class="btn ripple btn-success"> الخدمه غير مفعلة</span>`) + ` </td>
                                                  <td>    <div class="btn-group"><button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModalLong2" onclick="getedit('` + response.data[i].id + `')"  title="تعديل"><i class="fa fa-edit" aria-hidden="true"></i></button>          
<button type="button"   class="btn btn-primary btn-sm" data-clipboard-target="#copyid` + response.data[i].id + `" title="نسخ " ><i class="fa fa-files-o" aria-hidden="true"></i></button>
   <input id="copyid` + response.data[i].id + `" type="text" value="` + response.data[i].id + `" style="width:100%" >
                                                                    </div></td>
                                                    </tr>`;
                $('#loading').fadeOut();

            }
            $("#content").html(TextHtml);
            $(".loading").fadeOut();
        }


    );
}
 
    var clipboard = new ClipboardJS('.btn');

    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
   


function getedit(e) {
      var No = e;
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": DomainAPI + "Provider/GetService?serviceId=" + No,

          "headers": {
              "Authorization": Token
          }

      }
      $.ajax(settings).done(function (response) {
          $(".providerId").val(response.data.providerId);
          $(".id").val(response.data.id);
          $('.nameservice').val(response.data.name);
          $('.note').val(response.data.note);
      
         
      });
};
  
  
function EditDetalis() {
    var DataSend = {
        id: $(".id").val(),
        providerId: $(".providerId").val(),
        name: $(".nameservice").val(),
        note: $(".note").val(),
    
    };
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/EditService",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": Token
        },

        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": JSON.stringify(DataSend)

    }).done(function (response) {
        $('#exampleModalLong2').modal('hide');
        swal("تم التعديل بنجاح");
      getData();


    }).fail(function () {
        swal("يوجد خطأ");
        // console.log(response);
    });


}

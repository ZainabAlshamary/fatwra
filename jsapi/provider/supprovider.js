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

function Logout() {
    sessionStorage.clear();
    window.location.href = "../Account/Login.html";
}
console.log = function () {}


function parseJwt(token) {
    try {

        const base64HeaderUrl = token.split('.')[0];
        const base64Header = base64HeaderUrl.replace('-', '+').replace('_', '/');
        const headerData = JSON.parse(window.atob(base64Header));

        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const dataJWT = JSON.parse(window.atob(base64));
        dataJWT.header = headerData;
        return dataJWT;
    } catch (err) {
        return false;
    }
}

const jwtDecoded = parseJwt(sessionStorage.getItem('token'));
if (jwtDecoded) {

    var idtoken = jwtDecoded.sub;
}
var id = sessionStorage.getItem("id");


function CreateSubProvider() {
    if ($(".email").val() == "") {
        swal("يجب ادخال البريد الالكتروني");
        return;
    } else if ($(".phone").val() == "") {
        swal("يجب ادخال رقم الهاتف");
        return;
    } else if ($(".userName").val() == "") {
        swal("يجب ادخال اسم المستخدم");
        return;
    } else if ($(".address").val() == "") {
        swal("يجب ادخال العنوان");
        return;
    } else if ($(".password").val() == "") {
        swal("يجب ادخال الرقم السري");
        return;
    } else if ($(".name").val() == "") {
        swal("يجب ادخال الاسم");
        return;
    }
    var DataSend = {
        email: $(".email").val(),
        phone: $(".phone").val(),
        userName: $(".userName").val(),
        address: $(".address").val(),
        password: $(".password").val(),
        name: $(".name").val(),
        role: "SubProvider",
        userType: 11,
        parentId: idtoken,
    };
    $(".loading").fadeIn();
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/AddSupProvider",
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
        $(".loading").fadeOut();
        swal("تم التسجيل بنجاح");
        GetData();
    }).fail(function (error) {
        console.log(error)
        $(".loading").fadeOut();
        swal("يوجد خطأ");
    });

}

var flag = true;
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
    if (flag) {
        GetData();
    } else {
        GetDataByStartEnd();
    }
    
}

var Range = 0;
Pagension(Range);

function Pagension2(opsion) {
    if (opsion > 0) {
        Range += 10;
        $("#Previous1").removeClass("disabled");
    } else {
        if (Range <= 0) {
            Range = 0;
            $("#Previous1").addClass("disabled");
        } else {
            Range -= 10;
        }
    } 
        GetDataByStartEnd(No);
    
}

function GetData() {
    $(".loading").fadeIn();
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetAllSupProviders?start=" + RangePages + "&end=10&providerId=" + idtoken + "",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {
        $(".loading").fadeOut();

        var TextHtml = "",
            j = 1;
        for (var i = 0; i < response.data.length; i++) {
            TextHtml += `<tr><td>` + ((j++) + RangePages) + `</td>
            <td>` + response.data[i].name + `  </td>
            <td>` + response.data[i].phone + `</td>
            <td>` + response.data[i].address + ` </td>
            <td>
            <div class="btn-group"><button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal11" onclick="GetDetalis('` + response.data[i].id + `')"  title="تعديل"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal2" onclick="GetDataByStartEnd('` + response.data[i].id + `')"  title="عرض الفواتير"><i class="fa fa-eye" aria-hidden="true"></i></button>
            </div>
            </td>
                        </tr>`;
        }
        $("#SupProvidersData").html(TextHtml);

    }).fail(function (error) {
        console.log(false);
    });

}


function GetDetalis(e) {
    var No = e;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetSupProvider?subProviderId=" + No,
        "method": "GET",
        "headers": {
            "Authorization": Token
        }

    }
    $.ajax(settings).done(function (response) {
        $(".email1").val(response.data.email);
        $('.phone1').val(response.data.phone);
        $('.name1').val(response.data.name);
        $('.address1').val(response.data.address);
        //$('.password1').val(response.data.password);
        $('.userName1').val(response.data.userName);
        $('.id1').val(response.data.id);
    });
};

function EditDetalis() {
    swal({
        title: "هل انت متأكد من تعديل البيانات ",
        text: "",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
        confirmButtonText: "نعم",
        cancelButtonText: "الغاء",
    }, function () {
        var DataSend = {
            email: $(".email1").val(),
            phone: $(".phone1").val(),
            name: $(".name1").val(),
            address: $(".address1").val(),
            password: $(".password1").val(),
            Username: $(".userName1").val(),
            id: $(".id1").val(),
        };
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": DomainAPI + "Provider/EditSupProvider?providerId=" + id,
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
            $('#exampleModal11').modal('hide');
            swal("تم التعديل بنجاح");
		    GetData();
			
			
        }).fail(function () {
            swal("يوجد خطأ");
        });
    });
}
function GetDataByStartEnd(e) {
	
    No=e;
    flag = true;
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetSubProviderBills?subId=" + No + "&start=" + Range + "&end=10",
        "method": "GET",
        "headers": {

            "Authorization": Token
        },

    }).done(function (response) {
        var TextHtml = "",
            j = 1;
        for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].status == 2) {

                var stch = `<span style="width: 100%;" class="btn btn-danger btn-sm">غير مدفوعة</span>`;

            } else if (response.data[i].status == 3) {

                var stch = `<span style="width: 100%;" class="btn btn-success btn-sm"> مدفوعة</span>`;

            } else if (response.data[i].status == 4) {

                var stch = `<span style="width: 100%;" class="btn btn-warning btn-sm"> ملغاة</span>`;

            } else {

                var stch = `<span style="width: 100%; background:#0000003d; color:white" class="btn btn-sm"> متأخره</span>`;

            }
            if (response.data[i].paidBy == 1) {

                var paidby = `<span class="text-primary">اقساطي</span>`;

            } else if (response.data[i].paidBy == 2) {

                var paidby = `<span class="text-warning">POS</span>`;

            } else if (response.data[i].paidBy == 3) {

                var paidby = `<span class="text-danger">دفع نقدا</span>`;

            } else if (response.data[i].paidBy == 4) {

                var paidby = `<span class="text-info">زين كاش</span>`;

            } else if (response.data[i].paidBy == 5) {

                var paidby = `<span class="text-warning">منافذ كي</span>`;

            }else if (response.data[i].paidBy == 00) {

                var paidby = `<span class="text">/</span>`;

            }
            TextHtml += `<tr><td>` + ((j++) + Range) + `</td>
 
                            <td>` + response.data[i].customerName + ` </td>
                            <td>` + response.data[i].payId + `  </td>
                            <td>` + response.data[i].phoneNumber + `</td>
                            <td>` + response.data[i].createDate.split('T')[0] + `</td>
                            <td>` + response.data[i].dueDate.split('T')[0] + `</td>
                            <td>` + (response.data[i].payDate == "0001-01-01T00:00:00" ? '<span style="width: 100%;">/</span>' : '<span style="width: 100%;">' + (response.data[i].payDate.split('T')[0] || "") + '</span>') + `</td>
                            <td>` + paidby + `</td> 
                            <td>` + (addCommas(response.data[i].amount)) + `</td>                                                       
                            <td>` + response.data[i].serviceName + `</td>
 
                            <td>` + stch + ` </td>
                                                           
                                                               
                    </tr>`
        }
        $("#BodyData").html(TextHtml);
    }).fail(function () {
        $("#BodyData").html(`<tr class="text-center">
            <td colspan="100%">
                <p class="h5 text-danger">لا توجد بيانات</p>
            </td>
        </tr>`);
    });;
}


  function Searchsub() {
     
      $(".loading").fadeIn();
      	var searchtram = $('#searchtram').val();
  
      $.ajax({
          "async": true,
          "crossDomain": true,
         "url": DomainAPI + "Provider/SearchSupProvider?searchTerm=" + searchtram + "&start=" + Range + "&end=100",
          "method": "GET",
          "headers": {
              "Authorization": Token
          },
          success: function (response) {
              $(".loading").fadeOut();
     
	 
	userid = response.data.id ; 

	 $('#exampleModasearch').modal('show');
	 var TextHtml = "",
            j = 1;
        for (var i = 0; i < response.data.length; i++) {
            TextHtml += `<tr><td>` + ((j++) + RangePages) + `</td>
            <td>` + response.data[i].name + `  </td>
            <td>` + response.data[i].phone + `</td>
            <td>` + response.data[i].address + ` </td>
            <td><div class="btn-group"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal11" onclick="GetDetalis('` + response.data[i].id + `')"  title="تعديل"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal2" onclick="GetDataByStartEnd('` + response.data[i].id + `')"  title="عرض الفواتير"><i class="fa fa-eye" aria-hidden="true"></i></button>
            </div>
            </td>
                        </tr>`;
        }
        $("#BodyData1").html(TextHtml);
	
          },
          error: function (err) {
  $(".loading").fadeOut();
    swal("خطا في عملية البحث");
  
  
          }
      });
  }
  


function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

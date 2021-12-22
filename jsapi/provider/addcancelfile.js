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
if (sessionStorage.getItem('token')) {} else {
    window.location.href = "../Account/Login.html";
}
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
    //console.log(idtoken);
}
getData();


$('.csvfile').change(function () {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload')[0].files[0].name;
    $(this).prev('label').text(file);
});


function uploadcsv() {

   $(".loading").fadeIn();
    var file_data = $(".csvfile").val();
    var xType = $("#CSVType").val();
    console.log(xType);
    var aux = file_data.split('.');
    var extension = aux[aux.length - 1].toUpperCase();

if (extension === 'XLSX') {


        var file_data = $('.csvfile').prop('files')[0];
        var other_data = $('form').serialize();
        var form_data = new FormData();
        form_data.append('file', file_data);
        $.ajax({
            url: DomainAPI + 'Provider/UploadCancelBillsExcel', // 
            headers: {

                "Authorization": Token
            },
            dataType: 'text', // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',

        }).done(function (response) {
			   $(".loading").fadeOut();
       if(response.message == "No Bills For Cancel !"){
				$(".loading").fadeOut();
                swal("حدث خطا في الأرسال");
            }

            if (response) {
				   $(".loading").fadeOut();
                var bills = JSON.parse(response);
					        Swal.fire({
                    title: 'تم الرفع',
                    type: 'success',
                    html:
                     'عدد الفواتير التي تم الغائها ' + bills.data.correctCancelCount +  "<br>"  + 
                      'عدد الاخطاء في الملف ' + bills.data.errorCancelCount +  "<br>"  ,
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                      '<i class="fa fa-thumbs-up"></i> تم!',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                  })
                $("#clear-data").click();
            } else {
				$(".loading").fadeOut();
                swal("حدث خطا في الأرسال");
            }
        }).fail(function() {
       $(".loading").fadeOut();
       swal("حدث خطا في الأرسال");
  });

    } else {
       
   $(".loading").fadeOut();
        $("#SendError2").modal("show");
    }
}



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
    var firstLogin = jwtDecoded.firstLogin;

    ////console.log(idtoken);
    ////console.log(firstLogin);

    if (firstLogin == "True") {
        window.location = 'index.html';

    }
}


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

$("#loading").fadeOut();

var ImagPath = "";



		  function EditDetalis() {
    $(".loading").fadeIn();
  	 if($("#UploadImageProvider").val() == "") {
		 
	    ImagPath = ""; 
		EditDetalis1();
	  }
	  
	  else{
		  uploadeImage1();
	  function uploadeImage1() {
      var form = new FormData();
      var fileUpload = $("#UploadImageProvider").get(0);
      var files = fileUpload.files;
      form.append("file", files[0]);
      $.ajax({
          "async": true,
          "crossDomain": true,
          "url": DomainAPI + "Admin/UploadProfileImage",
          "method": "POST",
          "headers": {
              "Authorization": Token
          },
          "processData": false,
          "contentType": false,
          "mimeType": "multipart/form-data",
          "data": form
      }).done(function (response) {
          ImagPath = JSON.parse(response).data.fileID;
       EditDetalis1();
	       $(".loading").fadeOut();
      }).fail(function () {

         swal("خطأ في رفع الصورة");  // console.log(response);
return;
      });
  }}}

GetDetalis(idtoken);

function GetDetalis(idtoken) {
    var No = idtoken;
        $(".loading").fadeIn();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Admin/GetAdminInformation?providerId=" + No,

        "headers": {
            "Authorization": "Bearer " + sessionStorage.getItem('token')
        }

    }
    $.ajax(settings).done(function (response) {
           $(".loading").fadeOut();
        $(".email").val(response.data.email);
        $(".fileId").val(response.data.fileId);
        $('.name').val(response.data.name);
        $('.address').val(response.data.address);
        //$('.password').val(response.data.password);
        $('.userName').val(response.data.userName);
        $('.phone').val(response.data.phone);
        $('.id').val(response.data.id);
        //$('.content1').append(`  <img src="` + response.data.imagePath + `" class="rounded"  style='width: 100px;' 'alt='...'>`);
        $('.photoprofile').html(`  <img src="` + response.data.imagePath + `"  alt='Profile image' class='avatar-rounded' >`);
        $("#center").hide();
        $(".wave").hide();

    });
};



function EditDetalis1() {
	    $(".loading").fadeIn();
    var DataSend = {
        id: $(".id").val(),
        userName: $(".userName").val(),
        fileId: $(".fileId").val(),
        phone: $(".phone").val(),
        email: $(".email").val(),
        address: $(".address").val(),
        password: $(".password").val(),
        name: $(".name").val(),
        fileId: ImagPath
    };

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Admin/EditProfile",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem('token')
        },

        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": JSON.stringify(DataSend)
    
    }).done(function (response) {
        	    $(".loading").fadeIn();
        swal("تم التعديل بنجاح");
        GetDetalis();
    }).fail(function () {
		    $(".loading").fadeOut();
        swal("يوجد خطأ");
        // console.log(response);
    });


}


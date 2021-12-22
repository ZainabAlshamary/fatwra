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
var Clintid = sessionStorage.getItem("clientid");
var ClintSectet = sessionStorage.getItem("clientsecret");
$(".clientId").val(sessionStorage.getItem("clientid"));
$("#clientSecret").html(`<span>${sessionStorage.getItem("clientsecret")}</span>`);
// document.getElementById("clientSecret").innerHTML=ClintSectet
console.log(Clintid);
console.log(ClintSectet+"gggg");

// console.log = function () {}

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
          "url": DomainAPI + "Provider/UploadProfileImage",
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
	  $(".loading").fadeIn();
    var No = idtoken;
    // console.log(No);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetProviderInformation?providerId=" + No,

        "headers": {
            "Authorization": "Bearer " + sessionStorage.getItem('token')
        }

    }
    $.ajax(settings).done(function (response) {
          $(".loading").fadeOut();
        $(".email").val(response.data.email);
$(".clientId").val(sessionStorage.getItem("clientid"));
$(".clientSecret").val(sessionStorage.getItem("clientsecret"));

        $(".fileId").val(response.data.fileId);
        $('.name').val(response.data.name);
        $('.address').val(response.data.address);
        //$('.password').val(response.data.password);
        $('.userName').val(response.data.userName);
        $('.phone').val(response.data.phone);
		$('.qiCardNo').val(response.data.qiCardNo);
        $('.qiCardAccountNumber').val(response.data.qiCardAccountNumber);
        $('.id').val(response.data.id);
        $(".nav-user").html(`<img src="` + response.data.imagePath + `" class="avatar-rounded"> ` + response.data.name + ``);
        $('.photoprofile').html(`  <img src="` + response.data.imagePath + `"  alt='Profile image' class='avatar-rounded' >`);
        $("#center").hide();
        $(".wave").hide();

    });
};



GetProviderSettingvtow();

function GetProviderSettingvtow() {
     $(".loading").fadeIn();
    // console.log(No);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetProviderSetting?providersSettings=4",

        "headers": {
            "Authorization": "Bearer " + sessionStorage.getItem('token')
        }

    }
    $.ajax(settings).done(function (response) {
        console.log(response);
		  $(".loading").fadeOut();
	$('.webhockv2').val(response.data.value)
	
	EditProviderSettingv2
	

	
    $('.webhockidv2').val(response.data.id)  

    }).fail(function (response) {
       
		var res = JSON.parse(response.responseText);
      $(".loading").fadeOut();
      	if(res.message == "No data !"){
			
		$('#EditProviderSettingv2').hide();
		$('#InsertProviderSettingv2').show();
		
	}
	
    });
};







GetProviderSetting();

function GetProviderSetting() {
    
    $(".loading").fadeIn();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetProviderSetting?providersSettings=3",

        "headers": {
            "Authorization": "Bearer " + sessionStorage.getItem('token')
        }

    }
    $.ajax(settings).done(function (response) {
        console.log(response);
		 $(".loading").fadeOut();
	$('.webhock').val(response.data.value)
	
	InsertProviderSetting
	

	
    $('.webhockid').val(response.data.id)  

    }).fail(function (response) {
       
		var res = JSON.parse(response.responseText);
       $(".loading").fadeOut();
      	if(res.message == "No data !"){
		 $(".loading").fadeOut();
		$('#EditProviderSetting').hide();
		$('#InsertProviderSetting').show();
		
	}
	
    });
};



function EditProviderSettingv2() {
	$(".loading").fadeIn();
    var DataSend = {
        id: $(".webhockidv2").val(),
        value: $(".webhockv2").val(),
        key : 4 ,
      
    };

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/EditProviderSetting",
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem('token')
        },

        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": JSON.stringify(DataSend)

    }).done(function (response) {
        // console.log(response);
        swal("تم التعديل بنجاح");
		$("#loading").fadeOut();
		
		$('#EditProviderSetting').show();
		$('#InsertProviderSetting').hide();
		   $(".loading").fadeOut();
        GetProviderSetting();
    }).fail(function () {
		   $(".loading").fadeOut();
        swal("يوجد خطأ");
		
        // console.log(response);
    });


}


function InsertProviderSettingv2() {
	$("#loading").show();
    var DataSend = {
        
        value: $(".webhockv2").val(),
        key : 4 ,
      
    };

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/InsertProviderSetting",
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
		$("#loading").hide();
        $('#EditProviderSettingv2').show();
		$('#InsertProviderSettingv2').hide();
        swal("تم الاضافة بنجاح");
        GetProviderSetting();
    }).fail(function () {
		$("#loading").hide();
        swal("يوجد خطأ");
        $('#EditProviderSettingv2').hide();
		$('#InsertProviderSettingv2').show();;
    });


}




function EditProviderSetting() {
	$(".loading").fadeIn();
    var DataSend = {
        id: $(".webhockid").val(),
        value: $(".webhock").val(),
        key : 3 ,
      
    };

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/EditProviderSetting",
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem('token')
        },

        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": JSON.stringify(DataSend)

    }).done(function (response) {
        // console.log(response);
        swal("تم التعديل بنجاح");
		$(".loading").fadeOut();
		
		$('#EditProviderSetting').show();
		$('#InsertProviderSetting').hide();
		
        GetProviderSetting();
    }).fail(function () {
        swal("يوجد خطأ");
		$(".loading").fadeOut();
        // console.log(response);
    });


}


function InsertProviderSetting() {
		$(".loading").fadeIn();
    var DataSend = {
        
        value: $(".webhock").val(),
        key : 3 ,
      
    };

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/InsertProviderSetting",
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
			$(".loading").fadeOut();
        $('#EditProviderSetting').show();
		$('#InsertProviderSetting').hide();
        swal("تم الاضافة بنجاح");
        GetProviderSetting();
    }).fail(function () {
			$(".loading").fadeOut();
        swal("يوجد خطأ");
        $('#EditProviderSetting').hide();
		$('#InsertProviderSetting').show();;
    });


}

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
		qiCardNo: $(".qiCardNo").val(),
        qiCardAccountNumber: $(".qiCardAccountNumber").val(),
        name: $(".name").val(),
        fileId: ImagPath
    };

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/EditProfile",
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
        	$(".loading").fadeOut();
        swal("تم التعديل بنجاح");
        GetDetalis();
    }).fail(function () {
        swal("يوجد خطأ");
       	$(".loading").fadeOut();
    });


}

function InsertfibCredential() {
	$("#loading").show();
    var DataSend = {
        
        clientId: $(".clientId").val(),
        clientSecret : $(".clientSecret").val() ,
      
    };

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/SetProviderFibCredential",
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
		$("#loading").hide();
        swal("تم الاضافة بنجاح");
        GetProviderSetting();
    }).fail(function () {
		$("#loading").hide();
        swal("يوجد خطأ");
    });


}


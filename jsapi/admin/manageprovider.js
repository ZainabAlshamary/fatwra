  var providerId = sessionStorage.getItem("id");
  var Token = "Bearer " + sessionStorage.getItem('token');



  function stopedit() {
      $(".imgprovider").empty();
  }

  var ImagPath = "";



  function EditDetalis() {
$(".loading").fadeIn();
  	 if($("#UploadImageProvider1").val() == "") {
		 
	    ImagPath = ""; 
		EditDetalis1();
	  }
	  
	  else{
		  uploadeImage1();
	  function uploadeImage1() {
      var form = new FormData();
      var fileUpload = $("#UploadImageProvider1").get(0);
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
$(".loading").fadeOut();
         swal("خطأ في رفع الصورة");  // console.log(response);
return;
      });
  }}}
    function EditDetalis1() {
		$(".loading").fadeIn();
          var DataSend = {
              email: $(".email").val(),
              phone: $(".phone").val(),
              name: $(".name").val(),
              address: $(".address").val(),
              password: $(".password").val(),
              qiCardNo: $(".qiCardNo").val(),
              qiCardAccountNumber: $(".qiCardAccountNumber").val(),
              userName: $(".userName").val(),
              id: $(".id").val(),
              role: "Provider",
              fileID: ImagPath
          };
          $.ajax({
              "async": true,
              "crossDomain": true,
              "url": DomainAPI + "Admin/EditProvider",
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
			  $(".loading").fadeOut();
              swal("تم التعديل بنجاح");
              getData();
          }).fail(function () {
			  $(".loading").fadeOut();
              swal("يوجد خطأ");
          });
  }

 var ImagPath = "";
  function AddBiller() {
	  $(".loading").fadeIn();
	 if($("#UploadImageProvider").val() == "") {
		 
	    ImagPath = ""; 
		AddBiller1();
	  }
	  
	  else{
		  uploadeImage();
	  function uploadeImage() {
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
		  $(".loading").fadeOut();
          ImagPath = JSON.parse(response).data.fileID;
       AddBiller1();
      }).fail(function () {
		  $(".loading").fadeOut();

         swal("خطأ في رفع الصورة");  // console.log(response);
return;
      });
  }}}
  
function AddBiller1(){	  
$(".loading").fadeIn();
      if ($("#email").val() == "") {
          swal("يجب ادخال البريد الالكتروني");
          return;
      } else if ($("#phone").val() == "") {
          swal("يجب ادخال رقم الهاتف");
          return;
      } else if ($("#userName").val() == "") {
          swal("يجب ادخال اسم الحساب");
          return;
      } else if ($("#address").val() == "") {
          swal("يجب اختيار العنوان");
          return;
      } else if ($("#password").val() == "") {
          swal("يجب ادخال الرقم السري");
          return;
      } else if ($("#password").val().length < 8) {
          swal("حدث خطأ!الحد الادنى للرقم السري 8 احرف او ارقام");
          return;
      } else if ($("#name").val() == "") {
          swal("يجب ادخال الاسم");
          return;
      } 

      var DataSend = {
          email: $("#email").val(),
          phone: $("#phone").val(),
          userName: $("#userName").val(),
          address: $("#address").val(),
          password: $("#password").val(),
          name: $("#name").val(),
          qiCardNo: $("#qiCardNo").val(),
          qiCardAccountNumber: $("#qiCardAccountNumber").val(),
          role: "Provider",
          userType: 10,
          parentId: $("#parentId").val(),
          fileId: ImagPath
      };

      $(".loading").fadeIn();
      $.ajax({
          "async": true,
          "crossDomain": true,
          "url": DomainAPI + "Admin/CreateProvider",
          "method": "PUT",
          "headers": {
              "Content-Type": "application/json",
              "Authorization": Token
          },

          "processData": false,
          "contentType": false,
          "mimeType": "multipart/form-data",
          "data": JSON.stringify(DataSend),
		  
          
		
      }).done(function (response, status, xhr) {
		  
          $(".loading").fadeOut();
		    if (response.message == "Email already exists.") {
                swal("البريد الالكتروني مستخدم سابقا");
            } 	
          swal("تم التسجيل بنجاح");
          return; 
      })
	  .error(function (xhr, status, error) {
		  $(".loading").fadeOut();
		  var err = eval("(" + xhr.responseText + ")");
		   $(".loading").fadeOut();
		  console.log(err.message);
		  
		  if ((err.message) == 'Email already exists.'){
			  console.log("البريد الالكتروني مستخدم مسبقا");
			  swal("البريد الالكتروني مستخدم مسبقا"); 
			  
		  }else if ((err.message) == 'UserName already exists.') {
			  
			   swal("اسم المستخدم مسجل مسبقا"); 
			  
		  }else if ((err.message) == 'Phone already exists.') {
			  
			   swal("رقم الهاتف مسجل مسبقا"); 
			  return;
		  }else {
			  
			    swal("يوجد خطأ");
				$(".loading").fadeOut();
				return;
		  }
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
      $.ajax({
          "async": true,
          "crossDomain": true,
          "url": DomainAPI + "Admin/GetAllProviders?start=" + RangePages + "&end=10",
          "method": "GET",
          "headers": {
              "Authorization": "Bearer " + sessionStorage.getItem('token')
          },
          success: function (response) {
              //  console.log(response);
             $(".loading").fadeOut();
              var TextHtml = "",
                  j = 1;
              if ($.trim(response)) {
                  for (var i = 0; i < response.data.length; i++) {


                      if (response.data[i].isActive == true) {

                          var n = " <td><span style='width: 100%;' class='btn btn-success'>مفعل</span></td> "
                      } else {

                          var n = "<td><span style='width: 100%;' class='btn btn-danger'>غير مفعل</span></td>"

                      }


                      TextHtml += ` <tr>
                                 <th>` + ((j++) + RangePages) + `</th>
                                    <th>` +
                          response.data[i].name +
                          `</th>
                                    <th>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
تسويه ماليه</button>  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
تقرير التسويه</button>
                                    </th>
                                        <th>
                                                <div class="btn-group">

                                                  
                                                    <button type="button" class="btn btn-primary" data-toggle="tooltip" title="مسح " onclick="Deleteuser('` +
                          response.data[i].id +
                          `')"  ><i class="fa fa-trash" aria-hidden="true"></i></button>
                                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" onclick="GetDetalis('` +
                          response.data[i].id +
                          `')"  title="تعديل "><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                                      <button type="button" class="btn btn-primary" data-toggle="modal"  onclick="stopDetalis('` +
                          response.data[i].id +  `','` + response.data[i].isActive +
                          `')"  title="ايقاف"><i class="fa fa-stop" aria-hidden="true"></i></button>
                                                    <button type="button" class="btn btn-primary" data-toggle="modal"  onclick="startDetalis('` +
                          response.data[i].id + `','` + response.data[i].isActive +
                          `')"  title="تفعيل"><i class="fa fa-play" aria-hidden="true"></i></button>

                                                </div>
                                            </th>
                                            
                    ` +
                          n +
                          `
                              
                                </tr>`;

                  }
                  $("#content").html(TextHtml);
                  $('#loading').fadeOut();
              } else {
                  $('.no-data').show();
				  $(".loading").fadeOut();
                  $('.no-data').html('لاتوجد بيانات اخرى')
              }
          },
          error: function (err) {

          }
      });

  }
  $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
  })





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





  function GetDetalis(e) {
	  $(".loading").fadeIn();
      var No = e;
      // console.log(No);
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": DomainAPI + "Admin/GetUser?id=" + No,
          "method": "GET",
          "headers": {
              "Authorization": Token
          }

      }
      $.ajax(settings).done(function (response) {
		  $(".loading").fadeOut();
          // console.log(response);
          $(".email").val(response.data.email);
          $('.phone').val(response.data.phone);
          $('.name').val(response.data.name);
          $('.address').val(response.data.address);
          // $('.password').val(response.data.password);
          $('.qiCardNo').val(response.data.qiCardNo);
          $('.qiCardAccountNumber').val(response.data.qiCardAccountNumber);
          $('.id').val(response.data.id);
          $('.userName').val(response.data.userName);
          $('.imgprovider').html(`  <img src="`+ API +`` + response.data.imagePath + `" class="rounded"  style='width: 100px;' 'alt='...'>`);

      });
  };


  function stopDetalis(e , active) {
    if (active == "false"){
        swal(" الحساب متوقف");
        return;
    }
      var No = e;
      swal({
          title: "هل انت متأكد من ايقاف المزود",
          text: "",
          type: "info",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          confirmButtonText: "نعم",
          cancelButtonText: "الغاء",
      }, function () {
          $.ajax({
              "async": true,
              "crossDomain": true,
              "url": DomainAPI + "Admin/StopUser?userId=" + No,
              "method": "POST",
              "headers": {
                  "Content-Type": "application/json",
                  "Authorization": Token
              },

          }).done(function (response) {
              //  console.log(response);
              swal("تم الايقاف بنجاح");
              getData();
          }).fail(function () {
              swal("يوجد خطأ");
                $(".loading").fadeOut();
          });

      });
  }



  function startDetalis(e , active) {
    if (active == "true"){
        swal("لايمكن التفعيل الحساب مفعل");
        return;
    }
    
      var No = e;
      swal({
          title: "هل انت متأكد من تفعيل المزود",
          text: "",
          type: "info",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          confirmButtonText: "نعم",
          cancelButtonText: "الغاء",
      }, function () {
          $.ajax({
              "async": true,
              "crossDomain": true,
              "url": DomainAPI + "Admin/StartUser?userId=" + No,
              "method": "POST",
              "headers": {
                  "Content-Type": "application/json",
                  "Authorization": Token
              },

          }).done(function (response) {
              //   console.log(response);
              swal("تم التفعيل بنجاح");
              getData();
          }).fail(function () {
              swal("يوجد خطأ");
                $(".loading").fadeOut();
          });

      });
  }


  function Deleteuser(e) {
      var No = e;
      swal({
          title: "هل انت متأكد",
          text: "",
          type: "info",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          confirmButtonText: "نعم",
          cancelButtonText: "الغاء",
      }, function () {
          $.ajax({
              "async": true,
              "crossDomain": true,
              "url": DomainAPI + "Admin/DeleteUser?userId=" + No,
              "method": "POST",
              "headers": {
                  "Content-Type": "application/json",
                  "Authorization": Token
              },

          }).done(function (response) {
              // console.log(response);
              swal("تم الحذف");
              getData();
          }).fail(function () {
              swal("يوجد خطأ");
              $(".loading").fadeOut();
          });

      });
  }

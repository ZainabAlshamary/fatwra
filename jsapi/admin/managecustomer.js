
  var providerId = sessionStorage.getItem("id");
  var Token = "Bearer " + sessionStorage.getItem('token');


  console.log = function () {}
  $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
  })

  function stopedit() {
      $(".imgcustmer").empty();
  }


  function GetDetalis(e) {
      var No = e;
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": DomainAPI + "Admin/GetUser?id=" + No,

          "headers": {
              "Authorization": "Bearer " + sessionStorage.getItem('token')
          }

      }
      $.ajax(settings).done(function (response) {
          $(".email1").val(response.data.email);
          $('.phone1').val(response.data.phone);
          $('.name1').val(response.data.name);
          $('.address1').val(response.data.address);
          $('.role1').val(response.data.role);
          $('.userName1').val(response.data.userName);
          $('.id1').val(response.data.id);
          $('.imgcustmer').html(`  <img src="`+ API +`` + response.data.imagePath + `" class="rounded"  style='width: 100px;' 'alt='...'>`);
      });
  };
  var ImagPath = "";

  
    function EditDetalis() {

      $(".loading").fadeIn();
  	 if($(".UploadImageCustmer1").val() == "") {
		 
	    ImagPath = ""; 
		EditDetalis1();
	  }
	  
	  else{
		  uploadeImage1();
	  function uploadeImage1() {
      var form = new FormData();
      var fileUpload = $(".UploadImageCustmer1").get(0);
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
       EditDetalis1();
      }).fail(function () {

      $(".loading").fadeOut();
         swal("?????? ???? ?????? ????????????");  // console.log(response);
return;
      });
  }}}

  function EditDetalis1() {
	  
      $(".loading").fadeIn();
      var DataSend = {
          id: $(".id1").val(),
          cityId: 0,
          userType: 20,
          parentId: $(".parentId").val(),
          email: $(".email1").val(),
          phone: $(".phone1").val(),
          address: $(".address1").val(),
          userName: $(".userName1").val(),
          password: $(".password1").val(),
          qiCardAccountNumber1: "0",
          qiCardNo1: "0",
          name: $(".name1").val(),
          fileID: ImagPath,
      };
      $.ajax({
          "async": true,
          "crossDomain": true,
          "url": DomainAPI + "Admin/EditCustomer",
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
          swal("???? ?????????????? ??????????");
		   getData();
      }).fail(function (xhr, status, error) {
		  
      $(".loading").fadeOut();
           	var newResponse = JSON.parse(xhr.responseText);

		if(newResponse.message == "Email Already Used !"){
			
			    swal("???????????? ???????????????????? ???????????? ??????????");
		}else if (newResponse.message == "UserName Already Used !"){
			
			  swal("?????? ???????????????? ???????????? ??????????");
			
		}else if  (newResponse.message == "Phone Already Used !")  {
			
			    swal("?????? ???????????? ???????????? ??????????");
		}else {
			
			swal("???????? ??????");
			 $(".loading").fadeOut();
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
          "url": DomainAPI + "Admin/GetAllCustomers?start=" + RangePages + "&end=10",
          "method": "GET",
          "headers": {
              "Authorization": "Bearer " + sessionStorage.getItem('token')
          },
          success: function (response) {
              $(".loading").fadeOut();
              var TextHtml = "",
                  j = 1;
              if ($.trim(response.data.length)) {
                  for (var i = 0; i < response.data.length; i++) {

                      if (response.data[i].isActive == true) {

                          var n = " <td><span style='width: 100%;' class='btn btn-success'>????????</span></td> "
                      } else {

                          var n = "<td><span style='width: 100%;' class='btn btn-danger'>?????? ????????</span></td>"

                      }

                      TextHtml += `<tr>
<td>` + ((j++) + RangePages) + `</td>
                                       
                                       <td>` +
                          response.data[i].email +
                          ` </td>
                                       <td>` +
                          response.data[i].name +
                          `  </td>
                                       <td>` +
                          response.data[i].phone +
                          `</td>
                                       <td>` +
                          response.data[i].address +
                          ` </td>

                                       <td>
                                           <div class="btn-group">

                                             
                                               <button type="button" class="btn btn-primary" data-toggle="tooltip" title="??????" onclick="Deleteuser('` +
                          response.data[i].id +
                          `')"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                               <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal11" onclick="GetDetalis('` +
                          response.data[i].id +
                          `')"  title=" ?????????? ????????????"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                                <button type="button" class="btn btn-primary" data-toggle="modal"  onclick="stopDetalis('` +
                          response.data[i].id + `','` + response.data[i].isActive +
                          `')"  title="?????????? ????????????"><i class="fa fa-stop" aria-hidden="true"></i></button>
                                                <button type="button" class="btn btn-primary" data-toggle="modal"  onclick="startDetalis('` +
                          response.data[i].id + `','` + response.data[i].isActive +
                          `')"  title="??????????"><i class="fa fa-play" aria-hidden="true"></i></button>

                                           </div>
                                       </td>
                                       ` +
                          n + ` 
                                   </tr>`;

                  }
                  $("#content").html(TextHtml);
                  $('.loading').fadeOut();
              } else {
				  
                   $(".loading").fadeOut();
                  $('.no-data').show();
                  $('.no-data').html('???????????? ???????????? ????????')

              }

          },
          error: function () {}

      });
  }

  var ImagPath = "";
      function AddCustomer() {
		  
      $(".loading").fadeIn();
  	 if($("#UploadImageCustmer").val() == "") {
	    ImagPath = ""; 
		AddCustomer1();
	  } else{
		  uploadeImage1();
	  function uploadeImage1() {
      var form = new FormData();
      var fileUpload = $("#UploadImageCustmer").get(0);
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
		  
      $(".loading").fadeOut();
       AddCustomer1();
      }).fail(function () {
 $(".loading").fadeOut();
         swal("?????? ???? ?????? ????????????");  // console.log(response);
return;
      });
  }}}


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





  function AddCustomer1() {

      $(".loading").fadeIn();
      if ($(".email").val() == "") {
          swal("?????? ?????????? ???????????? ????????????????????");
		  
      $(".loading").fadeOut();
          return;
      } else if ($(".phone").val() == "") {
		   $(".loading").fadeOut();
          swal("?????? ?????????? ?????? ????????????");
          return;
      } else if ($(".userName").val() == "") {
		   $(".loading").fadeOut();
          swal("?????? ?????????? ?????? ????????????");
          return;
      } else if ($(".address").val() == "") {
		   $(".loading").fadeOut();
          swal("?????? ???????????? ??????????????");
          return;
      } else if ($(".password").val() == "") {
		   $(".loading").fadeOut();
          swal("?????? ?????????? ?????????? ??????????");
          return;
      } else if ($(".password").val().length < 8) {
		   $(".loading").fadeOut();
          swal("?????? ??????!???????? ???????????? ?????????? ?????????? 8 ???????? ???? ??????????");
          return;
      } else if ($(".name").val() == "") {
		   $(".loading").fadeOut();
          swal("?????? ?????????? ??????????");
          return;
      }
      var DataSend = {
          email: $(".email").val(),
          phone: $(".phone").val(),
          userName: $(".userName").val(),
          address: $(".address").val(),
          password: $(".password").val(),
          name: $(".name").val(),
          qiCardNo: "0",
          qiCardAccountNumber: "0",
          role: "Customer",
          userType: 20,
          parentId: $(".parentId").val(),
          fileID: ImagPath,
      };
 
      $.ajax({
          "async": true,
          "crossDomain": true,
          "url": DomainAPI + "Admin/CreateCustomer",
          "method": "PUT",
          "headers": {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + sessionStorage.getItem('token')
          },

          "processData": false,
          "contentType": false,
          "mimeType": "multipart/form-data",
          "data": JSON.stringify(DataSend)
      }).done(function (response, status, xhr) {
		  
          $(".loading").fadeOut();
		    if (response.message == "Email already exists.") {
                swal("???????????? ???????????????????? ???????????? ??????????");
              

            } 
			
          swal("???? ?????????????? ??????????");
		   getData();
         
      })
	  .fail(function (xhr, status, error) {
		  var err = eval("(" + xhr.responseText + ")");
		   $(".loading").fadeOut();
		  console.log(err.message);
		  
		  if ((err.message) == 'Email already exists.'){
			  console.log("???????????? ???????????????????? ???????????? ??????????");
			  swal("???????????? ???????????????????? ???????????? ??????????"); 
			  
		  }else if ((err.message) == 'UserName already exists.') {
			  
			   swal("?????? ???????????????? ???????? ??????????"); 
			  
		  }else if ((err.message) == 'Phone already exists.') {
			  
			   swal("?????? ???????????? ???????? ??????????"); 
			  
		  }else {
			   $(".loading").fadeOut();
			    swal("???????? ??????");
		  }

         
	
			
        
      });

  }

  fech();

  function fech() {
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": DomainAPI + "Admin/GetAllProviders?start=1&end=1000",
          "method": "GET",
          "headers": {
              "Authorization": "Bearer " + sessionStorage.getItem('token')
          }
      }
      $.ajax(settings).done(function (response) {
              for (var i = 0; i < response.data.length; i++) {
                  $('.content1').append(`<option value=` + response.data[i].id + ` >` + response.data[i].name + `</option>`);
                   $(".loading").fadeOut();
              }
          }


      );
  }

  function stopDetalis(e ,active) {
    if (active == "false"){
        swal(" ???????????? ??????????");
        return;
    }
      var No = e;
      swal({
          title: "???? ?????? ?????????? ???? ?????????? ????????????",
          text: "",
          type: "info",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          confirmButtonText: "??????",
          cancelButtonText: "??????????",
      }, function () {
          $.ajax({
              "async": true,
              "crossDomain": true,
              "url": DomainAPI + "Admin/StopUser?userId=" + No,
              "method": "POST",
              "headers": {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + sessionStorage.getItem('token')
              },

          }).done(function (response) {
              // console.log(response);
              swal("???? ?????????????? ????????");
              getData();
          }).fail(function () {
              swal("???????? ??????");
			   $(".loading").fadeOut();
          });

      });
  }

  function startDetalis(e ,active) {
    if (active == "true"){
        swal("???????????? ?????????????? ???????????? ????????");
        return;
    }
      var No = e;
      swal({
          title: "???? ?????? ?????????? ???? ?????????? ????????????",
          text: "",
          type: "info",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          confirmButtonText: "??????",
          cancelButtonText: "??????????",
      }, function () {
          $.ajax({
              "async": true,
              "crossDomain": true,
              "url": DomainAPI + "Admin/StartUser?userId=" + No,
              "method": "POST",
              "headers": {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + sessionStorage.getItem('token')
              },

          }).done(function (response) {
              swal("???? ?????????????? ??????????");
              getData();
          }).fail(function () {
              swal("???????? ??????");
			   $(".loading").fadeOut();
          });

      });
  }


  function Deleteuser(e) {
      var No = e;
      swal({
          title: "???? ?????? ??????????",
          text: "",
          type: "info",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          confirmButtonText: "??????",
          cancelButtonText: "??????????",
      }, function () {
          $.ajax({
              "async": true,
              "crossDomain": true,
              "url": DomainAPI + "Admin/DeleteUser?userId=" + No,
              "method": "POST",
              "headers": {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + sessionStorage.getItem('token')
              },

          }).done(function (response) {
              swal("???? ??????????");
              getData();
          }).fail(function () {
              swal("???????? ??????");
			   $(".loading").fadeOut();
          });

      });
  }

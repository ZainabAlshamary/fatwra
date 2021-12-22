            
			
           document.onkeypress = enter;
			function enter(e) {
			  if (e.which == 13) { loginForm(); }
			}

            function loginForm() {

            //   $("#alerterror").slideDown("hide");
                $(".waitbtn").show();
                $(".signbtn").hide();
                var form = {
                    username: $("#username").val() ,
                    password: $("#password").val() 
                }

                if($("#username").val() == "" || $("#password").val() == "" ){
					
					 $("#alerterror").html("كل البيانات مطلوبة").slideDown("slow");
					 $(".waitbtn").hide();
                     $(".signbtn").show();
					 
					 return;
				}

                $.ajax({
                    "async": true,
                    "crossDomain": true,
                    "url": DomainAPI + "auth/token",
                    "method": "POST",
                    headers: {
                        "Content-Type": "application/json",

                    },
                    "processData": false,
                    "data": JSON.stringify(form), 

                    success: function (response) {
                         $(".waitbtn").hide();
                         $(".signbtn").show();
                        if (response.role == "Admin") {
                            sessionStorage.setItem("token", response.token);
                            sessionStorage.setItem("role", response.role);
                            window.location.assign("admin/index");

                        } else if (response.role == "Provider") {


                            sessionStorage.setItem("token", response.token);
                            sessionStorage.setItem("role", response.role);
                            sessionStorage.setItem("id", response.id);
                            window.location.assign("provider/index");

                        } else if (response.role == "SubProvider") {


                            sessionStorage.setItem("token", response.token);
                            sessionStorage.setItem("role", response.role);
                            sessionStorage.setItem("id", response.id);
                            window.location.assign("subprovider/index");

                        } else if (response.role == "Dashboard") {


                            sessionStorage.setItem("token", response.token);
                            sessionStorage.setItem("role", response.role);
                            sessionStorage.setItem("id", response.id);
                            window.location.assign("dashboard/dashboard.html");

                        } else if (response.role == "Customer") {


                            sessionStorage.setItem("token", response.token);
                            sessionStorage.setItem("role", response.role);
                            window.location.assign("/users/");



                        } else if (response.role == "Support") {


                            sessionStorage.setItem("token", response.token);
                            sessionStorage.setItem("role", response.role);
                            window.location.assign("support/customerSupport.html");


                        } else if (response.role == "Finance") {


                            sessionStorage.setItem("token", response.token);
                            sessionStorage.setItem("role", response.role);
                            window.location.assign("finance/searchbyprovider.html");

                        } else if (response.role == "Monitor") {


                        sessionStorage.setItem("token", response.token);
                        sessionStorage.setItem("role", response.role);
                        window.location.assign("moniter/index.html");

                        }  else {
                            //  console.log("else");
                            $("#alerterror").slideDown("slow");
                        }
                    },
                    error: function () {
						$("#alerterror").html("<strong>خطا ! </strong> خطا في معلومات الحساب المدخلة").slideDown("slow");
                        
                        $(".waitbtn").hide();
                        $(".signbtn").show();
                    }
                });
            }



     

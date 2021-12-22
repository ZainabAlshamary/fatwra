<?php include"../include/header.php" ?>

<script src="../jsapi/subprovider/supprovider.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" integrity="sha512-mSYUmp1HYZDFaVKK//63EcZq4iFWFjxSL+Z3T/aCt4IO9Cejm03q3NKKYN6pFQzY0SBOr8h+eCIAZHPXcpZaNw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js" integrity="sha512-T/tUfKSV1bihCnd+MxKD0Hm1uBBroVYBOYSk1knyvQ9VyZJpc/ALb4P0r6ubwVPSGB2GvjeoMAJJImBG12TiaQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<body class="main-body leftmenu">

		<!-- Loader -->
		<div id="global-loader">
			<img src="../assets/img/loader.svg" class="loader-img" alt="Loader">
		</div>
		
	
		<!-- End Loader -->


		<!-- Page -->
		<div class="page">
	
			<!-- Sidemenu -->
			<?php include"../include/sidebar.php" ?>
			<!-- End Sidemenu -->
			<!-- Main Content-->
			<div class="main-content side-content pt-0">
<div class="spinner-grow text-success loading" role="status"  style="display : none">
			<span class="sr-only">Loading...</span>
		</div>
				<div class="container-fluid">
					<div class="inner-body">

						<!-- Page Header -->
						<div class="page-header">
							<div>
								
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index">النظام</a></li>
									<li class="breadcrumb-item active" aria-current="page">الفروع</li>
								</ol>
							</div>
						</div> 
						<!-- End Page Header -->

						<!-- row opened -->
						<div class="row row-sm">
							
							<div class="col-lg-12 col-md-12">
								<div class="card custom-card">
									<div class="card-body">
									     <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="compose-right widget-shadow">
                                <div class="panel-default">
                                    <div class="panel-heading text-right">
                                        إنشاء فرع
                                    </div>
									<br>
                                    <div class="panel-body">


                                        <div class="row sup-provider">
                                            <div class="col-lg-3 col-sm-12">
                                                <div class="form-group">
                                                    
                                                    <input type="email" placeholder="البريد الالكتروني" class="form-control text-right email" required="required">

                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-sm-12">
                                                <div class="form-group">
                                               
                                                    <input type="text"  placeholder="اسم الفرع"   class="form-control text-right name" required="required">

                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-sm-12">
                                                <div class="form-group">
                                                    
                                                    <input type="password" placeholder="كلمة السر"  class="form-control text-right password" required="required">

                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-sm-12">
                                                <div class="form-group">
                                                   
                                                    <input type="text"  placeholder="اسم المستخدم"  class="form-control userName" required="required">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="row sup-provider">
                                            <div class="col-lg-6 col-sm-12">
                                                <div class="form-group">
                                                
                                                    <select class="form-control address">
													<option value="">العنوان</option>
													<option value="بغداد">بغداد</option>
													<option value="نينوى">نينوى</option>
													<option value="اربيل">اربيل</option>
													<option value="التأميم">التأميم</option>
													<option value="سليمانية">سليمانية</option>
													<option value="دهوك">دهوك</option>
													<option value="ديالى">ديالى</option>
													<option value="كربلاء">كربلاء</option>
													<option value="بابل">بابل</option>
													<option value="الانبار">الانبار</option>
													<option value="واسط">واسط</option>
													<option value="الديوانية">الديوانية</option>
													<option value="ذي قار">ذي قار</option>
													<option value="المثنى">المثنى</option>
													<option value="ميسان">ميسان</option>
													<option value="البصرة">البصرة</option>
													<option value="النجف">النجف</option>
													<option value="صلاح الدين">صلاح الدين</option>
												</select>

                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-sm-12">
                                                <div class="form-group">
                                                
                                                    <input type='tel'  placeholder="رقم الهاتف"  data-filter='(\+|(\+[1-9])?[0-9]*)' maxlength="15" class="form-control text-right phone" required="required">
                                                </div>
                                            </div>
                                        </div>
										
										
                                        <div class="row sup-provider">
                                             <div class="col-lg-3 col-sm-12">
                                                <br />
                                                <button class="btn ripple btn-primary" onclick="CreateSubProvider()">تسجيل</button>
                                            </div>
                                        </div> 


										<br>
										<div class="row sup-provider">
                                          		<div class="col-lg-4 mg-t-20 mg-lg-t-0">
												<div class="input-group">
													<input class="form-control bill-number" id="searchtram" placeholder="اسم او رقم الهاتف" type="text">
													<span class="input-group-btn"><button class="btn ripple btn-primary" type="button" onclick="Searchsub();" >
													<span class="input-group-btn"><i class="fa fa-search"></i></span></button></span>
												</div>
											</div>
                                        </div>
											<br>
                                       <div class="row sup-provider">
                                        <div class="table-responsive">
							
                                            <table id="dataTable" class="table table-hover table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>اسم الفرع</th>
                                                        <th>رقم الهاتف</th>
                                                        <th>المحافظة</th>
                                                        <th>اجراءات</th>

                                                    </tr>
                                                </thead>
                                                <tbody id="SupProvidersData">

                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colspan="100%" class="justify-content-center">
                                                            <nav aria-label="...">
                                                                <ul class="pagination justify-content-center">
                                                                    <li id="Previous" onclick="Pagension(-1)" style="cursor: pointer;" class="page-item disabled">
                                                                        <a class="page-link" tabindex="-1">السابق</a>
                                                                    </li>
                                                                    <li id="Next" onclick="Pagension(1)" style="cursor: pointer;" class="page-item">
                                                                        <a class="page-link">التالي</a>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>
										</div>
									</div>
								</div>
							</div>
						
											
				
						</div>
						
								
								
									
									
									
								</div>
							</div>
						</div>
					</div>
		
			
	          <div class="modal fade" id="exampleModasearch" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" style="max-width:1105px !important " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">التعديل</h5>
                    <button type="button" onclick="$('#reset').trigger('reset');" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div class="modal-body">

                    <div class="row">

                        <div class="col-md-12">
                       
                        					      <div class="modal fade" id="SendErrorUser" tabindex="-1" role="dialog" aria-labelledby="SendError" aria-hidden="true">
                <div class="modal-dialog" role="document">

                    <div class="modal-body bg-danger" style="border-radius: 5px;">
                                                <h5 class="text-center text-white"> عذرا حدث خطأ<br>الحساب غير موجود</h5>
                    </div>

                </div>
            </div>
                   <table id="dataTable" class="table table-hover table-bordered table-striped">
                                                <thead style="background:#17a2b8; color:#fff;">
                                                    <tr>
                                                        <th>#</th>
                                                        <th>اسم الفرع</th>
                                                        <th>رقم الهاتف</th>
                                                        <th>المحافظة</th>
                                                        <th>اجراءات</th>

                                                    </tr>
                                                </thead>
                                                <tbody id="BodyData1">

                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colspan="100%" class="justify-content-center">
                                                            <nav aria-label="...">

                                                            </nav>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                    </div>
                    </div>


                </div>

                <div class="modal-footer">
                    <button type="button" onclick="$('#reset').trigger('reset');" class="btn btn-secondary" data-dismiss="modal">غلق</button>
       
                </div>

            </div>

        </div>

    </div>
    <div class="modal fade" id="exampleModal11" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" style="max-width:1105px !important " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">التعديل</h5>
                    <button type="button" onclick="$('#reset').trigger('reset');" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div class="modal-body">

                    <div class="row">

                        <div class="col-md-12">
                            <div class="alert alert-primary" role="alert">
                                <i class="fa fa-user" aria-hidden="true"></i> معلومات المزود الفرعي
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control email1" placeholder="البريد الالكتروني" aria-label="Username" aria-describedby="basic-addon1">
                                <input type="hidden" class="form-control id1" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff" ><i class="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control name1" placeholder="الاسم" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff" ><i class="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control userName1" placeholder="اسم الحساب" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff" ><i class="fa fa-key" aria-hidden="true"></i></span>
                                </div>
                                <input type="password" class="form-control password1" placeholder="الرقم السري للحساب" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff" ><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control address1" placeholder="العنوان">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff" ><i class="fa fa-phone" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control phone1" placeholder="رقم الهاتف">
                            </div>
                        </div>

                    </div>


                </div>

                <div class="modal-footer">
                    <button type="button" onclick="$('#reset').trigger('reset');" class="btn btn-secondary" data-dismiss="modal">غلق</button>
                    <button type="button" class="btn btn-primary" onclick="EditDetalis()">تعديل</button>
                </div>

            </div>

        </div>

    </div>

    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" style="max-width:1560px !important " role="document">
            <div class="modal-content">
               
                <div class="modal-body">

                    <div class="row">

                        <div class="col-md-12">
                            <div class="alert alert-primary" role="alert">
                                <i class="fa fa-user" aria-hidden="true"></i> فواتير المزود الفرعي
                            </div>
                        </div>
                        <div id="TableClear" class="table-responsive">
                            <table id="TableDB" class="table table-hover table-bordered table-striped" style="font-size: 14px">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                                        <th>الاسم</th>
                                                        <th>رقم الفاتورة</th>
                                                        <th>رقم الهاتف</th>
                                                        <th>تاريخ الإنشاء</th>
                                                        <th>تاريخ النفاذ</th>
                                                        <th>تاريخ الدفع</th> 
                                                        <th>طريقة الدفع</th>
                                                        <th>المبلغ</th>
                                                        <th>اسم الخدمة</th>
                                                        <th>الحالة</th>
                                    </tr>
                                </thead>
                                <tbody id="BodyData">
                                    <tr>
                                        <td colspan="100%" class="text-center text-danger">
                                            <h5>---</h5>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="100%" class="justify-content-center">
                                            <nav aria-label="...">
                                                <ul class="pagination justify-content-center">
                                                    <li id="Previous1" onclick="Pagension(1)" style="cursor: pointer;" class="page-item disabled">
                                                        <a class="page-link" tabindex="-1">السابق</a>
                                                    </li>
                                                    <li id="Next1" onclick="Pagension(1)" style="cursor: pointer;" class="page-item">
                                                        <a class="page-link">التالي</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

            </div>

        </div>
        </div>
        </div>
   </div>
		<?php include"../include/footer.php" ?>
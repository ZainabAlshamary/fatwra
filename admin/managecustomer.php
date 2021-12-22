<?php include "../include/header.php" ?>

<script src="../jsapi/admin/managecustomer.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" integrity="sha512-mSYUmp1HYZDFaVKK//63EcZq4iFWFjxSL+Z3T/aCt4IO9Cejm03q3NKKYN6pFQzY0SBOr8h+eCIAZHPXcpZaNw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js" integrity="sha512-T/tUfKSV1bihCnd+MxKD0Hm1uBBroVYBOYSk1knyvQ9VyZJpc/ALb4P0r6ubwVPSGB2GvjeoMAJJImBG12TiaQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<style>
.sweet-alert {
    background-color: #ffffff;
    width: 478px;
    padding: 17px;
    border-radius: 5px;
    text-align: center;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -256px;
    margin-top: -200px;
    overflow: hidden;
    display: none;
    z-index: 999999;
}
.input-group-text {
    background-color: #2b3f79;
    border: #2b3f79;
    color: #ffff;
}
.input-group-prepend {
	color: #2b3f79;
    background-color: #DEDEDE;
    color: #fff;
	
}
.alert-primary {
    color: #2b3f79;
    background-color: #DEDEDE;
    border-color: #ffffff;
}
</style>
<body class="main-body leftmenu">

    <!-- Loader -->
    <div id="global-loader">
        <img src="../assets/img/loader.svg" class="loader-img" alt="Loader">
    </div>


    <!-- End Loader -->


    <!-- Page -->
    <div class="page">

        <!-- Sidemenu -->
        <?php include "../include/sidebar.php" ?>
        <!-- End Sidemenu -->
        <!-- Main Content-->
        <div class="main-content side-content pt-0">
            <div class="spinner-grow text-success loading" role="status" style="display : none">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="container-fluid">
                <div class="inner-body">

                    <!-- Page Header -->
                    <div class="page-header">
                        <div>

                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page">الزبائن</li>
                            </ol>
                        </div>
                    </div>
                    <!-- End Page Header -->

                    <!-- row opened -->
                    <div class="row row-sm">

                        <div class="col-lg-12 col-md-12">
                            <div class="card custom-card">
                                <div class="card-body">
                                 
                                        <div class="row">

                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                                    </div>
                                                    <input type="email" class="form-control email" placeholder="البريد الالكتروني للزبون" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control name" placeholder="اسم الزبون" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control userName" placeholder="اسم الحساب" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-key" aria-hidden="true"></i></span>
                                                    </div>
                                                    <input type="password" class="form-control password" placeholder="الرقم السري للحساب" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-map-marker"
                                                                aria-hidden="true"></i></span>
                                                    </div>
                                                    <select class="form-control address" required="required">
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
                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-phone" aria-hidden="true"></i></span>
                                                    </div>
                                                    <input type="tel" data-filter='(\+|(\+[1-9])?[0-9]*)' maxlength="11" class="form-control phone" placeholder="رقم الهاتف" required>
                                                </div>
                                            </div>
											
											    <div class="col-6">
                                                                
																
																		<div class="input-group file-browser">
														
																<input type="file" class="form-control border-left-0 browse-file custom-file-upload csvfile"  id="UploadImageCustmer" placeholder="choose" readonly>
																<label class="input-group-btn">
																	<span class="btn btn-primary">
																		اختر الشعار<input type="file" style="display: none;" id="UploadImageCustmer" id="file-upload"   multiple>
																	</span>
																</label>
															</div>
															
                                                            </div>
															
															
                                        
                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-building"
                                        aria-hidden="true"></i></span>
                                                    </div>
                                                    <select id="" class="form-control parentId content1">
													<option>اختر المزود</option>
												</select>
                                                </div>
                                            </div>


                                        </div>
										
										
										    <div class="row">

                                            <div class="col-md-6 text-left">
                                                <button type="button" onclick="AddCustomer();" class="btn btn-primary T1 T2 ">إنشاء
                                                    <i class="fa fa-save"></i></button>

                                            </div>
                                        </div>
										
										
                                



								   </div>
								   </div>
								   </div>  
								   
								   
								   
								   
								   
								   <div class="col-lg-12 col-md-12">
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="row">


                                                <div class="modal-body table-responsive">
                                                    <table id="TableService" class="table table-striped text-center mt-4" style="font-size: 14px">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>البريد الالكتروني</th>
                                                                <th>اسم الزبون</th>
                                                                <th>رقم الزبون</th>
                                                                <th>عنوان الزبون</th>

                                                                <th>إجرائات</th>
                                                                <th>الحالة</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="content">

                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <td colspan="100%" class="justify-content-center">
                                                                    <nav aria-label="...">
                                                                        <ul class="pagination justify-content-center">
                                                                            <li id="Previous" onclick="Pagension(-1)" class="page-item disabled">
                                                                                <a class="page-link" tabindex="-1">السابق</a>
                                                                            </li>
                                                                            <li id="Next" onclick="Pagension(1)" class="page-item">
                                                                                <a class="page-link">التالي</a>
                                                                            </li>
                                                                        </ul>
                                                                    </nav>
                                                                </td>
                                                            </tr>
                                                        </tfoot>


                                                    </table>

                                                    <div class="alert alert-warning no-data" role="alert" style="display: none"> </div>
                                                </div>
                                            </div>
								   </div>
								   </div>
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
                                <i class="fa fa-user" aria-hidden="true"></i> معلومات الزبون
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="text-center">
                                <div class="imgcustmer"></div>

                            </div><br>
                        </div><br>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope"
                                            aria-hidden="true"></i></span>
                                </div>
                                <input type="email" class="form-control email1" placeholder="البريد الالكتروني" aria-label="
                                    Username" aria-describedby="basic-addon1">
                                <input type="hidden" class="form-control id1" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control name1" placeholder="اسم الزبون" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control userName1" placeholder="اسم الحساب" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-key" aria-hidden="true"></i></span>
                                </div>
                                <input type="password" class="form-control password1" placeholder="الرقم السري للحساب" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-map-marker"
                                            aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control address1" placeholder="العنوان">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-phone" aria-hidden="true"></i></span>
                                </div>
                                <input type="tel" data-filter='(\+|(\+[1-9])?[0-9]*)' maxlength="11"  class="form-control phone1" placeholder="رقم الهاتف" required>
                            </div>
                        </div>
						
							    <div class="col-6">
                                                                
																
																		<div class="input-group file-browser">
														
																<input type="file" class="form-control border-left-0 browse-file custom-file-upload UploadImageCustmer1"  id="UploadImageCustmer1" placeholder="choose" readonly>
																<label class="input-group-btn">
																	<span class="btn btn-primary">
																		اختر الشعار<input type="file" style="display: none;" id="UploadImageCustmer1" id="file-upload" class="UploadImageCustmer1"   multiple>
																	</span>
																</label>
															</div>
															
                                                            </div>
															
															
                
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-building"
                                            aria-hidden="true"></i></span>
                                </div>
                                <select id="" class="form-control parentId content1">
                                    <option>اختر المزود</option>
                                </select>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button" onclick="stopedit()" class="btn btn-secondary" data-dismiss="modal">غلق</button>
                    <button type="button" class="btn btn-primary" onclick="EditDetalis()">تعديل</button>
                </div>

            </div>

        </div>

    </div>

								   
								   
								   
    <?php include "../include/footer.php" ?>
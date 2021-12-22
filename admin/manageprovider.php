<?php include "../include/header.php" ?>

<script src="../jsapi/admin/manageprovider.js"></script>
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
                                <li class="breadcrumb-item active" aria-current="page">المزودين</li>
                            </ol>
                        </div>
                    </div>
                    <!-- End Page Header -->

                    <!-- row opened -->
                    <div class="row row-sm">

                        <div class="col-lg-12 col-md-12">
                            <div class="card custom-card">
                                <div class="card-body">
                                                        <div class="panel-body" id="FourmHTML">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="alert alert-primary" role="alert">
                                                    <i class="fa fa-user" aria-hidden="true"></i> معلومات المزود
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope"
                                                                aria-hidden="true"></i></span>
                                                    </div>
                                                    <input type="email" id="email" class="form-control" placeholder="البريد الالكتروني للمزود" aria-label="Username" aria-describedby="basic-addon1" required="required">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"
                                                                aria-hidden="true"></i></span>
                                                    </div>
                                                    <input type="text" id="name" class="form-control" placeholder="اسم المزود" aria-label="Username" aria-describedby="basic-addon1" required="required">
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"
                                                                aria-hidden="true"></i></span>
                                                    </div>
                                                    <input type="text" id="userName" class="form-control" placeholder="اسم الحساب" aria-label="Username" aria-describedby="basic-addon1" required="required">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-key"
                                                                aria-hidden="true"></i></span>
                                                    </div>
                                                    <input type="password" id="password" class="form-control" placeholder="الرقم السري للحساب" aria-label="Username" aria-describedby="basic-addon1" required="required">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-map-marker"
                                                                aria-hidden="true"></i></span>
                                                    </div>
                                                    <select class="form-control " id="address" required="required">
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
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-phone"
                                                                aria-hidden="true"></i></span>
                                                    </div>
                                                    <input type='tel' data-filter='(\+|(\+[1-9])?[0-9]*)' maxlength="11" id="phone" class="form-control" placeholder="رقم الهاتف" required="required">
                                                </div>
                                            </div>
											
											    <div class="col-12">
                                                                
																
																		<div class="input-group file-browser">
														
																<input type="file" class="form-control border-left-0 browse-file custom-file-upload csvfile"  id="UploadImageProvider1" placeholder="choose" readonly>
																<label class="input-group-btn">
																	<span class="btn btn-primary">
																		اختر الشعار<input type="file" style="display: none;" id="UploadImageProvider1" id="file-upload" class="csvfile"   multiple>
																	</span>
																</label>
															</div>
															
                                                            </div>
                                                       
													   
													   
                                        
                                            <div class="col-md-12">
                                                <div class="alert alert-primary" role="alert">
                                                    <i class="fa fa-id-card" aria-hidden="true"></i> معلومات البطاقة
                                                </div>
                                            </div>


                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-address-card"
                                                                aria-hidden="true"></i></span>
                                                    </div>
                                                    <input type="text" id="qiCardNo" class="form-control" placeholder="رقم المحفظة او رقم البطاقة" aria-label="Username" aria-describedby="basic-addon1" required="required">
                                                </div>
                                            </div>
											<div class="col-md-6">
                                                <div class="input-group mb-3">
                                                     <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-address-card"
                                                                aria-hidden="true"></i></span>
                                                    </div>
                                                    <input type="text" id="qiCardAccountNumber" class="form-control" placeholder="رقم الحساب" aria-label="Username" aria-describedby="basic-addon1" required="required">
                                                </div>
                                            </div>
                                            <!-- <div class="col-md-6"> -->
                                                <!-- <div class="input-group mb-3"> -->
                                                    <!-- <div class="input-group-prepend"> -->
                                                        <!-- <span class="input-group-text" id="basic-addon1"><i class="fa fa-credit-card-alt" -->
                                                                <!-- aria-hidden="true"></i></span> -->
                                                    <!-- </div> -->
                                                    <!-- <input type="text" id="qiCardNo" class="form-control" placeholder="رقم البطاقة" aria-label="Username" aria-describedby="basic-addon1" required="required"> -->
                                                <!-- </div> -->
                                            <!-- </div> -->


                                        </div>

                                        <div class="row">

                                            <div class="col-md-6 text-left">
                                                <button type="button" onclick="AddBiller();" class="btn btn-primary T1 T2 ">إنشاء
                                                    <i class="fa fa-save"></i></button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="content" style="    margin-top: 10px;">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
           
<div class="card custom-card">
                                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12 ">
						
								
								    <div class="table-responsive">
                                <table id="TableService" class="table table-striped text-center mt-4" style="font-size: 14px">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>اسم المزود</th>
                                            <th>عرض</th>
                                            <th>أجراءات</th>
                                            <th>الحالة</th>

                                        </tr>
                                    </thead>
                                    <tbody id="content">
                                        <tr>
                                            <td colspan="100%" class="text-center text-danger">

                                            </td>
                                        </tr>
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

    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">تعديل المزود</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
              
                    <div class="row" style="    padding-right: 13px;
    padding-left: 15px;">
                    <div class="col-md-12">
                        <div class="alert alert-primary" role="alert">
                            <i class="fa fa-user" aria-hidden="true"></i> معلومات المزود
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="text-center">
                            <div class="imgprovider"></div>

                        </div><br>
                    </div><br>
                    <div class="col-md-12">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                            </div>
                            <input type="email" class="form-control email" placeholder="البريد الالكتروني" aria-label="Username" aria-describedby="basic-addon1" required="required">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" class="form-control name" aria-label="Username" aria-describedby="basic-addon1">
                            <input type="hidden" class="form-control id" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" class="form-control userName" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-key" aria-hidden="true"></i></span>
                            </div>
                            <input type="password" class="form-control password " aria-label="Username" aria-describedby="basic-addon1" required="required">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-map-marker"
                                        aria-hidden="true"></i></span>
                            </div>
                            <input type="text" class="form-control address ">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-phone" aria-hidden="true"></i></span>
                            </div>
                            <input type="tel" data-filter='(\+|(\+[1-9])?[0-9]*)' maxlength="11" class="form-control phone" required>
                        </div>
                    </div>
					
							    <div class="col-12">
                                                                
																
																		<div class="input-group file-browser">
														
																<input type="file" class="form-control border-left-0 browse-file custom-file-upload csvfile"  id="UploadImageProvider" placeholder="choose" readonly>
																<label class="input-group-btn">
																	<span class="btn btn-primary">
																		اختر الشعار<input type="file" style="display: none;" id="UploadImageProvider" id="file-upload" class="csvfile"   multiple>
																	</span>
																</label>
															</div>
															
                                                            </div>
                                                       
													   
            
                    <div class="col-md-12">
                        <div class="alert alert-primary" role="alert">
                            <i class="fa fa-id-card" aria-hidden="true"></i> معلومات البطاقة
                        </div>
                    </div>


					 <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-address-card"
                                                               ></i></span>
                                                    </div>
                                                    <input type="text" class="form-control qiCardNo" placeholder="رقم المحفظة او رقم البطاقة" aria-label="Username" aria-describedby="basic-addon1" required="required">
                                                </div>
                                            </div>
											
                    <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-address-card"
                                                                aria-hidden="true"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control qiCardAccountNumber" placeholder="رقم الحساب" aria-label="Username" aria-describedby="basic-addon1" required="required">
                                                </div>
                                            </div>

    </div>
                
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="stopedit()">غلق</button>
                    <button type="button" class="btn btn-primary" onclick="EditDetalis()">تعديل </button>
               
            </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document" style="    max-width: 100%;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">تسوية مالية</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="TableClear" style="min-height:250px" class="table-responsive">
                        <table id="TableDB" class="table table-striped text-center mt-4 " style="font-size: 14px">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>الاسم</th>
                                    <th>رقم حساب كـــي كارد </th>
                                    <th>من تاريخ</th>
                                    <th>إلى تاريخ</th>
                                    <th>المبلغ</th>
                                    <th>اجراءات</th>

                                </tr>
                            </thead>
                            <tbody id="BodyData">
                                <tr>
                                    <td colspan="100%" class="text-center text-danger">
                                        <h5>جاري تحميل البيانات</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">غلق</button>

                </div>
            </div>
        </div>
    </div>



    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document" style="    max-width: 100%;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">تقرير التسوية</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-calendar"
                                            aria-hidden="true"></i></span>
                                </div>
                                <input type="date" class="form-control" placeholder="من تاريخ" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-calendar"
                                            aria-hidden="true"></i></span>
                                </div>
                                <input type="date" class="form-control" placeholder="الى تاريخ" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <button type="button" class="btn btn-primary1" onclick="OnSendFourm2();">بحث </button>
                        </div>
                        <div class="col-md-12">
                            <table id="TableDB" class="table table-striped text-center mt-4 " style="font-size: 14px">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>الخدمة</th>
                                        <th>عدد الفواتير</th>
                                        <th>مبلغ</th>


                                    </tr>
                                </thead>
                                <tbody id="BodyData">
                                    <tr>
                                        <td colspan="100%" class="text-center text-danger">
                                            <h5>جاري تحميل البيانات</h5>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">غلق</button>

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
                    <h5 class="modal-title" id="exampleModalLabel">نتائج البحث</h5>
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
    <div class="modal fade" id="exampleModal11" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="z-index: 99999;">
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
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff"><i class="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control name1" placeholder="الاسم" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff"><i class="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control userName1" placeholder="اسم الحساب" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff"><i class="fa fa-key" aria-hidden="true"></i></span>
                                </div>
                                <input type="password" class="form-control password1" placeholder="الرقم السري للحساب" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control address1" placeholder="العنوان">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff"><i class="fa fa-phone" aria-hidden="true"></i></span>
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
    <?php include "../include/footer.php" ?>
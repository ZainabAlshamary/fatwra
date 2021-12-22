<?php include"../include/header.php" ?>

<script src="../jsapi/provider/createbill.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../assets/js/Tafqeet.js"></script>
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
                            <div class="page-header">
							<div>
								
								<ol class="breadcrumb">
									<li class="breadcrumb-item active" aria-current="page">انشاء فاتورة جديدة</li>
								</ol>
							</div>
						</div> 
			
			
											
							<div class="col-lg-12">
							
							
								<div class="card custom-card">
									<div class="card-body">
									       <div class="container-fluid" style="padding-top: 20px">
                <div class="row">
                    <div class="col-md-12 ">
                        <div class="compose-right widget-shadow">
                            <div class="panel-default">
                                <div class="panel-body">

                                    <div class="row">
                                        <div class="col-md-12 ">
                                            <div class="row">
											<div class="col-md-8 ">
                                                    <div class="col-md-7">
                                                        <label style="font-size: 17px;font-weight: bold;color: #2b3f79;">اسم الشركة :</label>
                                                        <label style="font-size: 17px;font-weight: bold;color: #FFB500" id="companyName"></label>
                                                    </div>
                                                    <div class="col-md-7">
                                                        <label style="font-size: 17px;font-weight: bold;color: #2b3f79;">رقم الهاتف :</label>
                                                        <label style="font-size: 17px;font-weight: bold;color: #FFB500;" id="phoneNumber"></label>
                                                    </div>
                                                    <div class="col-md-7">
                                                        <label style="font-size: 17px;font-weight: bold;color: #2b3f79;">العنوان :</label>
                                                        <label style="font-size: 17px;font-weight: bold;color: #FFB500;" id="address"></label>
                                                    </div>
                                                    <div class="col-md-7">
                                                        <label style="font-size: 17px;font-weight: bold;color: #2b3f79;">البريد الالكتروني :</label>
                                                        <label style="font-size: 17px;font-weight: bold; color: #FFB500;" id="email"></label>
                                                    </div>
                                                    
                                                    
                                            </div>
                                            <div class="col-md-4 ">
											 <div class="image">
                                                        </div>
											</div>
                                            </div>

                                                   
                                                    
                                                    
                                                    
                                           

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <br>
                            <div class="panel-default">
                                <div class="panel-heading text-right" style=" background-color: rgba(222, 222, 222, 0.41);
                                border-color: #ddd;
                                border-bottom: 1px solid transparent;
                                text-align: center !important;
                                border-top: 4px solid #2d66ae;
                                color: #2d66ae;
                                padding:10px;
                                border-radius:4px">
                                    انشاء فاتورة جديدة
                                </div>
                                <div class="panel-body">

                                    <div class="row">
                                        <div class="col-md-12 ">
                                            <br>
                                            <div class="row" style="margin-bottom: 21px;">
                                                <div class="col-lg-3 col-md-6">
                                                    <input type="text" class="form-control customerN" id="customerName" placeholder="الاسم" />
                                                </div>
                                                <div class="col-lg-3 col-md-6">
                                                    <input type="tel" data-filter='(\+|(\+[1-9])?[0-9]*)' maxlength="11" onkeypress="return event.charCode >= 48 && event.charCode <= 57" id="PhoneNumber" class="form-control phonen" placeholder="رقم الهاتف" required="required">
                                                </div>
                                                <div class="col-lg-3 col-md-6">
                                                    <input type="text" maxlength="16" data-filter='(\+|(\+[1-9])?[0-9]*)' onkeypress="return event.charCode >= 48 && event.charCode <= 57" id="billNumber" class="form-control billn" placeholder="رقم الفاتورة" required="required">
                                                </div>
                                                <div class="col-lg-3 col-md-6">
                                                    <select class="form-control serviceI" id="ServiscesType">
													<option value="0">يرجى اختيار الخدمة</option>
                                                    </select>
                                                </div>
                                            </div>
                                               
                                            
                                             <div class="row"  style="margin-bottom: 21px;">
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" style="color: #fff !important;background-color: #2c5495 !important;" id="basic-addon1">YY/MM/DD</span>
                                                    </div>
                                                    <input type="date" id="DueDate" class="datetime form-control" placeholder="تاريخ نفاذ الفاتورة">
                                                </div>
                                                </div>
											   <div class="col-lg-4 col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" style="color: #fff !important;background-color: #2c5495 !important;" id="basic-addon1">IQD</span>
                                                    </div>
                                                    <input type="text" class="form-control lastsum" onmouseover="showprice()" onmouseout="hideprice()"  id="EndSum"  placeholder="قيمة الفاتورة" pattern="[0-9]*"><br>
													
                                                </div>
												  <h5 id="TypeNumber" class="TypeNumber" style="font-size: 13px;">
                                            </div>
                                                  <div class="col-lg-4 col-md-6">
                                                        <div class="input-group mb-3 notebill">
                                                            </div>
                                                </div>
                                            </div>
                                            <div class="row" style="margin-bottom: 21px;" >
                                                <div class="col-lg-2 col-md-3.5 ml-auto">
                                                    <button type="button" onclick="OnAddBill()" class="btn btn-info  btn-block">حفظ
                                                    <i class="fa fa-save"></i></button>
                                                </div>
                                                <div class="col-lg-2 col-md-3.5">
                                                    <button type="button" onclick="printBills()" class="btn btn-danger btn-block create">طباعة
                                                    <i class="fa fa-print"></i></button>
                                                    <input type="hidden" id="hiddenBillId">
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
					</div>
		 <div class="modal fade" id="SendError" tabindex="-1" role="dialog" aria-labelledby="SendError" aria-hidden="true">
            <div class="modal-dialog" role="document">
    
                <div class="modal-body bg-danger" style="border-radius: 5px;">
                    <h5 class="text-center text-white"> عذرا حدث خطأ<br>يرجى التأكد رقم البطاقة</h5>
                </div>
    
            </div>
        </div>
			<!-- End Main Content-->

			<!-- Main Footer-->
			 <div id="exampleModalLong2" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" style="max-width: 80%;">

            <div class="modal-content">
              	<div class="modal-header">
							<h6 class="modal-title">الفاتورة</h6><button aria-label="Close" class="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
						</div>
                <div class="modal-body FormForPrint" id="DataCammingWithout">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">أغلاق</button>
                </div>
            </div>

        </div>
    </div>
	
	<div id="exampleModalLong4" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" style="max-width: 80%;">

            <div class="modal-content">
               	<div class="modal-header">
							<h6 class="modal-title">تعديل التاريخ</h6><button aria-label="Close" class="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
						</div>
                <div class="modal-body">
                        <div class="col">
                               
                                <div class="input-group mb-12">
                                        <label style="    background: #17a2b84f;
                                        width: 100%;
                                        height: 35px;
                                        padding: 5px;">تعديل التاريخ</label>
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" style="    color: #fff !important;
                                                 background-color: #dc3545 !important;" id="basic-addon1">التاريخ الجديد</span>
                                        </div>
                                        <input type="text" class="form-control datetime"  id="newdate"  >
                                    </div>
                            </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger dateEdit" onclick="editbilldate()">تعديل</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">أغلاق</button>
                    
                </div>
            </div>

        </div>
    </div>

    <div id="exampleModalLong3" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" style="max-width: 80%;">

            <div class="modal-content">
                 	<div class="modal-header">
							<h6 class="modal-title">تعديل مبلغ الفاتورة</h6><button aria-label="Close" class="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
						</div>
                <div class="modal-body">
                        <div class="col">
                               
                                <div class="input-group mb-3">
                                        <label style="    background: #17a2b84f;
                                        width: 100%;
                                        height: 35px;
                                        padding: 5px;">قيمة الفاتورة</label>
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" style="    color: #fff !important;
                                                 background-color: #3597dc !important;" id="basic-addon1">بالدينار العراقي</span>
                                        </div>
                                        <input type="text" class="form-control lastsum"  id="EndSum"  placeholder="قيمة الفاتورة" pattern="[0-9]*">
                                    </div>
                            </div>
                </div>
                <div class="modal-footer">
                        <button type="button" class="btn btn-danger invoiceEdit" onclick="Editbill()">تعديل</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">أغلاق</button>
                    
                </div>
            </div>

        </div>
    </div>
    <div class="modal fade" id="SendError" tabindex="-1" role="dialog" aria-labelledby="SendError" aria-hidden="true">
        <div class="modal-dialog" role="document">

            <div class="modal-body bg-danger" style="border-radius: 5px;">
                <h5 class="text-center text-white"> عذرا حدث خطأ<br>يرجى التأكد من رقم الهاتف او رقم البطاقة</h5>
            </div>

        </div>
    </div>
	      
		<?php include"../include/footer.php" ?>
				<!-- Internal Fileuploads js-->
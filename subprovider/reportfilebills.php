<?php include"../include/header.php" ?>

<script src="../jsapi/subprovider/reportfilebills.js"></script>
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
									<li class="breadcrumb-item active" aria-current="page">تفاصيل الملفات المرفوعة</li>
								</ol>
							</div>
						</div> 
						<!-- End Page Header -->

						<!-- row opened -->
						<div class="row row-sm">
							
							<div class="col-lg-12 col-md-12">
								<div class="card custom-card">
									<div class="card-body">
										<div>
											<h6 class="main-content-label mb-1">Date Range Picker</h6>
											<p class="text-muted card-sub-title">Date Range Picker</p>
										</div>
										
										<div class="row row-sm">
											  <div class='col-sm-6'>
												        <label>من تاريخ</label>
														<input type="date" class="form-control from">
														
													</div>
																								  <div class='col-sm-6'>
												        <label>الى تاريخ</label>
														<input type="date" class="form-control to">
														
													</div>
											  </div>
											  <br>
											  <div class="row row-sm">
											    <div class='col-lg-3 col-md-3 col-sm-12'>
										<button class="btn ripple btn-primary" onclick="GetFileBillsByDateTime(0)" >بحث</button>
										</div>
										</div>
										</div>
									</div>
								</div>
							</div>
						
											
							<div class="col-lg-12">
							
							
								<div class="card custom-card">
									<div class="card-body">
										<div>
											<h6 class="main-content-label mb-1">الفواتير</h6>
											<p class="text-muted card-sub-title">اعدادات الفواتير</p>
										</div>
										<div class="table-responsive border">
											<table class="table text-nowrap text-md-nowrap mg-b-0">
												<thead>
													<tr>
														<th>#</th>
														<th>اسم الخدمة</th>
														<th>المبلغ الكلي</th>
														<th>تاريخ انشاء الفاتورة</th>
														<th>عدد الفواتير</th>
														<th>نوع الملف </th>
														<th>تحميل</th>
													
													</tr>
												</thead>
												<tbody id="BodyData">
													
												</tbody>
												 <tfoot>
                                                        <tr>
                                                            <td colspan="100%" class="justify-content-center">
                                                                <nav aria-label="...">
                                                                    <ul class="pagination justify-content-center">
                                                                        <li id="Previous" onclick="Pagension(-1)" style="cursor: pointer;" class="page-item disabled">
                                                                            <a class="page-link" tabindex="-1" style="cursor: pointer;">السابق</a>
                                                                        </li>
                                                                        <li id="Next" onclick="Pagension(1)" style="cursor: pointer;" class="page-item">
                                                                            <a class="page-link" style="cursor: pointer;">التالي</a>
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
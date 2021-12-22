<?php include"../include/header.php" ?>

<script src="../jsapi/provider/reportallbills.js"></script>
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
									<li class="breadcrumb-item active" aria-current="page">الخدمات</li>
								</ol>
							</div>
						</div> 
						<!-- End Page Header -->

						<!-- row opened -->
						<div class="row row-sm">
							
							<div class="col-lg-12 col-md-12">
								<div class="card custom-card">
									<div class="card-body">
								            <div class="panel-body">
                                        <div class="row">
										  <div class="col-lg-3">
                                                <div class="form-group">
												   <label >بحث عن</label>
                                                    <input type="text"  id="Bill_Number"  placeholder="رقم الفاتورة او رقم الهاتف" class="form-control Bill_Number" />
                                                </div>
                                            </div>
											 <div class="col-lg-3">
                                                <div class="form-group">
												   <label >نوع الفاتورة</label>
                                                    <select class="form-control bill_type">
													<option value="1" >الكل</option>
													<option value="3" >المدفوعة</option>
													<option value="2" >غير المدفوعة</option>
													<option value="5" >المتاخرة</option>
													<option value="4" >الملغاة</option>

													</select>
                                                </div>
                                            </div>
											<div class='col-sm-3'>
												        <label>من تاريخ</label>
														<input type="date" class="form-control from datetime">
														
													</div>
                                         	<div class='col-sm-3'>
												        <label>الى التاريخ</label>
														<input type="date" class="form-control to datetime2">
														
													</div>
											
                                          
                                          
                                            <div class="col-md-3">
                                                <button type="button" class="btn ripple btn-primary"  onclick="searchBiller();" >بحث</button>
                                            </div>
                                            <div class="col-md-12 ">
                                                <button type="button" class="btn ripple btn-primary pull-left"  style="margin-right: 4px"  onclick="downloadcsv()">CSV</button>
                                                <button type="button" class="btn ripple btn-primary pull-left" style="margin-left: 4px"  onclick="downloadexcel()" >EXCEL</button>
                                            </div>
                                            </div>
                                    
                                        <hr>
                                        <div id="TableClear" style="min-height:250px" class="table-responsive">
                                            <table id="TableDB" class="table table-striped text-center mt-4" style="font-size: 14px">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>الاسم</th>
                                                        <th>رقم الفاتورة</th>
                                                        <th>تاريخ الإنشاء</th>
                                                        <th>رقم الهاتف</th>
                                                        <th>تاريخ الدفع</th>
                                                        <th>طريقة الدفع</th>
                                                        <th>المبلغ</th>
                                                        <th>اسم الخدمة</th>
                                                        <th class="ReferenceNumber"></th>
                                                        <th>تاريخ النفاذ</th>
                                                        <th>الحالة</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="BodyData">
                                                    <tr>
                                                        <td colspan="100%" class="text-center text-danger">
                                                            <h5>جاري تحميل البيانات</h5>
                                                        </td>
                                                    </tr>
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
                                                                    &nbsp;&nbsp; &nbsp;&nbsp;
                                                               <!--     <li  class="page-item disabled primary" style="border: 1px solid #dedede;
                                                                    padding: 5px;
                                                                    text-align: center;">
                                                                         <span id="pages">---</span> / <span id="allbills">---</span>
                                                                        </li> -->
                                                                        
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
							</div>
						</div>
					</div>
		
			
	       
	
	
	
		<?php include"../include/footer.php" ?>
<?php include"../include/header.php" ?>

<script src="../jsapi/subprovider/reportlatebills.js"></script>
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
									<li class="breadcrumb-item active" aria-current="page">الفواتير المتاخرة</li>
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
									
											<div class='col-sm-6'>
												        <label>من تاريخ</label>
														<input type="date" class="form-control from datetime">
														
													</div>
                                         	<div class='col-sm-6'>
												        <label>الى التاريخ</label>
														<input type="date" class="form-control to datetime2">
														
													</div>
											
                                          
                                        
										  
                                          
                                            </div>
											
											  <br>
                                          <br>
										  
											 <div class="row">
											   <div class="col-md-3">
                                                <button type="button" class="btn ripple btn-primary"  onclick="FilterBills(0);" >بحث</button>
                                            </div>
                                            <div class="col-md-12 ">
                                                <button type="button" class="btn ripple btn-primary pull-left"  style="margin-right: 4px"  onclick="downloadcsvl()">CSV</button>
                                                <button type="button" class="btn ripple btn-primary pull-left" style="margin-left: 4px"  onclick="downloadexcel()" >EXCEL</button>
                                            </div>
											 </div>
											
                                   
                    
                                        <div id="TableClear" style="min-height:250px" class="table-responsive">
                                            <table id="TableDB" class="table table-striped text-center mt-4" style="font-size: 14px">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>الاسم</th>
                                                        <th>رقم الفاتورة</th>
                                                        <th>تاريخ الإنشاء</th>
                                                        <th>المبلغ</th>
                                                        <th>رقم الهاتف</th>
                                                        <th>اسم الخدمة</th>
														 <th class="ReferenceNumber" ></th>
                                                        <th>تاريخ الدفع</th>
                                                        <th>طريقة الدفع</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="BodyData">
                                                    <tr>
                                                        <td colspan="100%" class="text-center text-danger">
                                                            <h5>....</h5>
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
                                                                        <!--    <li  class="page-item disabled primary" style="border: 1px solid #dedede;
                                                                            padding: 5px;
                                                                            text-align: center;">
                                                                                 <span id="pages">---</span> / <span id="allbills_success">---</span>
                                                                                </li> -->
                                                                                
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
		
			

	

		<?php include"../include/footer.php" ?>
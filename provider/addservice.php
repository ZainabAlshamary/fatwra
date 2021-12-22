<?php include"../include/header.php" ?>

<script src="../jsapi/provider/addservice.js"></script>
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
                                        <div class="row text-right">
                                            <div class="col-md-12">
                                                <label>اضافة خدمة جديدة</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-8">
                                                <form>
                                                    <div class="row">
                                                        <div class="col-lg-4 col-sm-6">
                                                            <input type="text" class="form-control serviceName" placeholder="اسم الخدمة" required>
                                                        </div>
                                                        <div class="col-lg-4 col-sm-6">
                                                            <input type="text" class="form-control serviceNote create" placeholder="وصف الخدمة" required>
                                                        </div>


                                                        <div class="col-lg-2 col-sm-12">
                                                            <button type="button" class="btn ripple btn-primary create" onclick="AddServes()">اضافة خدمة</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <table id="TableService" class="table table-striped text-center mt-4" style="font-size: 14px">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>اسم الخدمه</th>
                                                        <th>وصف الخدمه</th>
                                                        <th>حالة الخدمه</th>
                                                        <th>اجراءات</th>

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
		
			
	       <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document" style="    max-width: 100%;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">اضافة خدمة</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <form>
                            <div class="row">
                                <div class="col-md-4">
                                    <input type="text" class="form-control "  placeholder="اسم الخدمة" required="required">
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control Price" placeholder="وصف الخدمة" required="required">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">غلق</button>
                    <button type="button" class="btn btn-primary" onclick="EditService();">تعديل</button>
                </div>
            </div>
        </div>
    </div>
	
	
	
	    <div class="modal fade" id="exampleModalLong2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" style="max-width:1105px !important " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">تعديل الخدمة</h5>
                    <button type="button" onclick="$('#reset').trigger('reset');" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="row">

               
                        <div class="col-md-12">
                            <div class="text-center">
                                <div class="imgcustmer"></div>

                            </div><br>
                        </div><br>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca ; color:#fff"><i class="fa fa-edit"
                                            aria-hidden="true"></i></span>
                                </div>
                                <input type="email" class="form-control nameservice" placeholder="اسم الخدمة" aria-label="
                                    Username" aria-describedby="basic-addon1">
                                <input type="hidden" class="form-control id" aria-label="serviceName" aria-describedby="basic-addon1">
                                <input type="hidden" class="form-control providerId" aria-label="serviceName" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca ; color:#fff"><i class="fa fa-info" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control note" placeholder="وصف الخدمة" aria-label="info" aria-describedby="basic-addon1">
                            </div>
                        </div>
                    

                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button"  class="btn btn-secondary" data-dismiss="modal">غلق</button>
                    <button type="button" class="btn btn-primary" onclick="EditDetalis()">تعديل</button>
                </div>

            </div>

        </div>

    </div>
		<?php include"../include/footer.php" ?>
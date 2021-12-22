<?php include"../include/header.php" ?>
<style>
  .alert-success {
        color: #0081b3;
    background-color: #e8e8f7;
    border-color: #ffffff;
    }
    .btn-default{
        font-size: 15px;
    position: relative;
    float: left;
    top: -8px;
    border: 1px dashed;
    color: #0081b3;
    }
</style>
<script src="../jsapi/provider/addcancelfile.js"></script>
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
  <div class="page-header">
							<div>
								
								<ol class="breadcrumb">
									<li class="breadcrumb-item active" aria-current="page">الغاء مجموعة فواتير</li>
								</ol>
							</div>
						</div> 
						
							<div class="card custom-card">
									<div class="card-body">
									
									        <div class="row">
                        <div class="col-md-12 ">
                            <div class="compose-right widget-shadow">
                                <div class="panel-default">
                                    
                                    <div class="panel-body">

                                        <div class="row">
                        <div class="col-md-12 ">
                            <div class="compose-right widget-shadow">
                                <div class="panel-default">
                                 
                                    <div class="panel-body">

                                        <div class="row">

                                            <div class="col-md-12">
                                                <div class="container-fluid">

                                                    <form enctype="multipart/form-data">
                                                        <div class="row">
                                                            <div class="col-10">
                                                                
																
																		<div class="input-group file-browser">
														
																<input type="file" class="form-control border-left-0 browse-file custom-file-upload csvfile"  id="file-upload" placeholder="choose" readonly>
																<label class="input-group-btn">
																	<span class="btn btn-primary">
																		اختر ملف <input type="file" style="display: none;" id="file-upload"  id="file-upload" class="csvfile"   multiple>
																	</span>
																</label>
															</div>
															
                                                            </div>
                                                       
                                                            <div class="col">
                                                                <span class="readBytesButtons">
                                <button type="button"  onclick="uploadcsv()" class="btn ripple btn-primary csvfile">
                                    أرسال البيانات  <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                                </span>
                                                            </div>
                                                        </div>
                                                    </form>

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
            	<div class="card custom-card">
									<div class="card-body">
					       <div class="container-fluid">

                        <div class="row">
                            <div class="col-md-12 ">
                                <div class="compose-right widget-shadow">
                                    <div class="panel-default">
                                        <div class="panel-heading text-right">
                                            نماذج الملفات
                                        </div>
                                        <div class="panel-body">

                                            <div class="row">

                                                <div class="col-lg-4 col-md-4">
                                                    <div class="alert alert-success" role="alert" style="">
                                                        <i class="fa fa-file" aria-hidden="true"></i>  ملف الغاء مجموعة فواتير (Excel)
                                                        <button type="button" onclick="APIile('cancelFile.xlsx')" class="btn ripple btn-default">تحميل  <i class="fa fa-download" aria-hidden="true"></i></button>
																										</div>
																									</div>


                                             
                                               


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" id="SendError2" tabindex="-1" role="dialog" aria-labelledby="SendError" aria-hidden="true">
                                <div class="modal-dialog" role="document">

                                    <div class="modal-body bg-danger" style="border-radius: 5px;">
                                        <h5 class="text-center text-white"> عذرا حدث خطأ<br>صيغة الملف غير مطابقة</h5>
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
	
			<!-- End Main Content-->


	

   <script>
        function APIile(file) {
            window.location = file;
        }

    </script>
	      
		<?php include"../include/footer.php" ?>
<?php include"include/signheader.php" ?>
	<body class="main-body leftmenu">

		<!-- Loader -->
		<div id="global-loader"  class="global-loader" >
			<img src="assets/img/loader.svg" class="loader-img" alt="Loader">
		</div>
		<!-- End Loader -->

		<!-- Page -->
		<div class="page main-signin-wrapper">

			<!-- Row -->
			<div class="row signpages text-center">
		
				<div class="col-md-12">
				
			    <div class="alert alert-outline-danger mg-b-0" role="alert" id="alerterror" style="display:none">
						<button aria-label="Close" class="close" data-dismiss="alert" type="button">
						<span aria-hidden="true">×</span></button>
						
			   </div>
			
					<div class="card">
					
						<div class="row row-sm">
							<div class="col-lg-6 col-xl-5 d-none d-lg-block text-center bg-primary details">
							<div class="mt-5 pt-4 p-5 pos-absolute"> 
							<img src="assets/img/brand/logo.png" class="header-brand-img mb-4" alt="logo">
							<div class="clearfix"></div> <img src="assets/img/svgs/user.svg" class="ht-100 mb-0" alt="user">
							<h5 class="mt-4 text-white">انظم مع عملاء فاتورة</h5> <span class="tx-white-6 tx-13 mb-5 mt-xl-0"> يوفر لك السهولة في ادارة فواتيك ودفع الفواتير</span> 
							</div>
							</div>

							<div class="col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form ">
								<div class="container-fluid">
									<div class="row row-sm">
										<div class="card-body mt-2 mb-2">
											<img src="assets/img/brand/logo.png" class=" d-lg-none header-brand-img text-left float-left mb-4" alt="logo">
											<div class="clearfix"></div>
											<div>
												<h5 class="text-right mb-2">تسجيل الدخول الى الحساب</h5>
												<p class="mb-4 text-muted tx-13 ml-0 text-right">الرجاء ملئ البيانات بصورة صحيحة</p>
												<div class="form-group text-right">
													<label>البريد الالكتروني</label>
													<input id="username" class="form-control" placeholder="" type="text">
												</div>
												<div class="form-group text-right">
													<label>الرمز السري</label>
													<input id="password"   class="form-control" placeholder="" type="password">
												</div>
												<button  class="btn ripple btn-main-primary btn-block waitbtn" disabled  style="display: none" type="button"><span aria-hidden="true" class="spinner-border spinner-border-sm" role="status"></span> جاري الدخول ...</button>
												<button class="btn ripple btn-main-primary btn-block  signbtn" onclick="loginForm()" >دخول</button>
											</div>
											<div class="text-left mt-5 ml-0">
												<!-- <div class="mb-1"><a href="">Forgot password?</a></div> -->
												<div style="text-align: justify;">ليس لديك حساب ؟ <a href="#">قريبا </a></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End Row -->

		</div>
		<!-- End Page -->

<?php include"include/signfooter.php" ?>
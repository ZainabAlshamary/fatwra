<?php include "../include/header.php" ?>
<script src="../jsapi/subprovider/dashboard.js?version=<?= time() ?>"></script>

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

			<div class="container-fluid">
				<div class="inner-body">

					<!-- Page Header -->
					<div class="page-header">
						<div>
							<h2 class="main-content-title tx-24 mg-b-5">أهلا وسهلا بكم في نظام فاتورة</h2>
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><a href="index">النظام</a></li>
								<li class="breadcrumb-item active" aria-current="page">الرئيسية</li>
							</ol>
						</div>
						<!--	<div class="d-flex">
								<div class="justify-content-center">
									<button type="button" class="btn btn-white btn-icon-text my-2 ml-2">
									   Import<i class="fe fe-download ml-2"></i>
									</button>
									<button type="button" class="btn btn-white btn-icon-text my-2 ml-2">
									   Filter<i class="fe fe-filter ml-2"></i>
									</button>
									<button type="button" class="btn btn-primary my-2 btn-icon-text">
									   Download Report<i class="fe fe-download-cloud ml-2"></i>
									</button>
								</div>
							</div> -->
					</div>
					<!-- End Page Header -->

					<!-- row opened -->
					<div class="row">
						<div id="cryptoChart2" class="chart-dropshadow-info cryptoChart2 overflow-hidden"></div>

						<div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-xxl-4">
							<div class="item">
								<div class="card custom-card">
									<div class="card-body">
										<div class="d-flex no-block align-items-center">
											<div>
												<span class="text-muted tx-13 mb-3">عدد الفواتير المصدرة</span>
												<h3 class="m-0 mt-2" id="allbills">----</h3>
											</div>
											<div class="mr-auto mt-auto">
												<img src="data:image/png;base64,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">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-xxl-4">
							<div class="item">
								<div class="card custom-card">
									<div class="card-body">
										<div class="d-flex no-block align-items-center">
											<div>
												<span class="text-muted tx-13 mb-3">مجموع المبالغ الكلية</span>
												<h3 class="m-0 mt-2" id="sum_allbills">----</h3>
											</div>
											<div class="mr-auto mt-auto">
												<img src="data:image/png;base64,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">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-xxl-4">
							<div class="item">
								<div class="card custom-card">
									<div class="card-body">
										<div class="d-flex no-block align-items-center">
											<div>
												<span class="text-muted tx-13 mb-3">عدد الفواتير المدفوعة</span>
												<h3 class="m-0 mt-2" id="allbills_success">----</h3>
											</div>
											<div class="mr-auto mt-auto">
												<img src="data:image/png;base64,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">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-xxl-4">
							<div class="item">
								<div class="card custom-card">
									<div class="card-body">
										<div class="d-flex no-block align-items-center">
											<div>
												<span class="text-muted tx-13 mb-3">عدد الفواتير غير المدفوعة</span>
												<h3 class="m-0 mt-2" id="unpaidbills">----</h3>
											</div>
											<div class="mr-auto mt-auto">
												<img src="data:image/png;base64,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">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-xxl-4">
							<div class="item">
								<div class="card custom-card">
									<div class="card-body">
										<div class="d-flex no-block align-items-center">
											<div>
												<span class="text-muted tx-13 mb-3">عدد الفواتير الملغات</span>
												<h3 class="m-0 mt-2" id="cancelledbills">----</h3>
											</div>
											<div class="mr-auto mt-auto">
												<img src="data:image/png;base64,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">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-xxl-4">
							<div class="item">
								<div class="card custom-card">
									<div class="card-body">
										<div class="d-flex no-block align-items-center">
											<div>
												<span class="text-muted tx-13 mb-3">عدد الفواتير المتاخرة</span>
												<h3 class="m-0 mt-2" id="latebills">----</h3>
											</div>
											<div class="mr-auto mt-auto">
												<img src="data:image/png;base64,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">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-xxl-4">
							<div class="item">
								<div class="card custom-card">
									<div class="card-body">
										<div class="d-flex no-block align-items-center">
											<div>
												<span class="text-muted tx-13 mb-3">مجموع المبالغ المدفوعة</span>
												<h3 class="m-0 mt-2" id="sum_allbills_success">----</h3>
											</div>
											<div class="mr-auto mt-auto">
												<img src="data:image/png;base64,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" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-xxl-4">
							<div class="item">
								<div class="card custom-card">
									<div class="card-body">
										<div class="d-flex no-block align-items-center">
											<div>
												<span class="text-muted tx-13 mb-3">مجموع المبالغ غير المدفوعة</span>
												<h3 class="m-0 mt-2" id="sum_allbills_pending">----</h3>
											</div>
											<div class="mr-auto mt-auto">
												<img src="data:image/png;base64,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">
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
					<!-- row closed -->

					<!-- row opened -->
					<!-- <div class="row row-sm">
							<div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-4">
								<div class="card custom-card">
									<div class="card-header border-bottom-0">
										<label class="main-content-label my-auto pt-2 mb-1">طرق الدفع</label>
										<span class="d-block tx-12 mb-0 mt-1 text-muted">يصنف حسب طريقة الدفع المتوفر</span>
									</div>
									<div class="card-body crypto-wallet">
										<div class="">
											<canvas id="crypto-donut" class="ht-200-f "></canvas></div>
											
										</div>
									</div>

							
								</div>
							</div> -->

					<div class="row row-sm">
						<div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-4">
							<div class="card custom-card">
								<div class="card-header border-bottom-0">
									<label class="main-content-label my-auto pt-2 mb-1">احصائيات اصدار الفواتير</label>
									<span class="d-block tx-12 mb-0 mt-1 text-muted">عدد الفواتير المصدرة</span>
								</div>
								<div class="card-body crypto-wallet">
									<div class="">

										<div class="row row-sm">

											<div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
												<div class="card custom-card">
													<div class="card-body">
														<div class="card-item">
															<div class="card-item-icon card-icon">
															<img src="https://img.icons8.com/nolan/64/paid-bill.png"/>
															</div>
															<div class="card-item-title mb-2">
																<label class="main-content-label tx-13 font-weight-bold mb-1">عدد الفواتير اليومية</label>
																<span class="d-block tx-12 mb-0 text-muted">الفواتير التي يتم اصدارها في اليوم الواحد</span>
															</div>
															<div class="card-item-body">
																<div class="card-item-stat">
																	<h4 class="font-weight-bold" id="dayCount">---</h4>

																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
												<div class="card custom-card">
													<div class="card-body">
														<div class="card-item">
															<div class="card-item-icon card-icon">
															<img src="https://img.icons8.com/nolan/64/paid-bill.png"/>
															</div>
															<div class="card-item-title mb-2">
																<label class="main-content-label tx-13 font-weight-bold mb-1">عدد الفواتير الشهرية</label>
																<span class="d-block tx-12 mb-0 text-muted">الفواتير التي تم اصدارها هذا الشهر</span>
															</div>
															<div class="card-item-body">
																<div class="card-item-stat">
																	<h4 class="font-weight-bold" id="mounthlyCount">---</h4>

																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="col-sm-12 col-md-12 col-lg-12 col-xl-4">
												<div class="card custom-card">
													<div class="card-body">
														<div class="card-item">
															<div class="card-item-icon card-icon">
															<img src="https://img.icons8.com/nolan/64/paid-bill.png"/>
															</div>
															<div class="card-item-title  mb-2">
																<label class="main-content-label tx-13 font-weight-bold mb-1"> عدد الفواتير سنويا </label>
																<span class="d-block tx-12 mb-0 text-muted">عدد الفواتير التي تم اصدارها هذه السنة</span>
															</div>
															<div class="card-item-body">
																<div class="card-item-stat">
																	<h4 class="font-weight-bold" id="yearCount">---</h4>

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
						<div class="col-xl-12 col-xxl-8 col-lg-12 col-md-12">
							<div class="card card-bitcoin custom-card">
								<div class="card-body">
									<div>
										<h6 class="main-content-label mb-1">الاجمالي للفواتير مقابل الاجمالي للدفع</h6>
										<p class="text-muted  card-sub-title"></p>
									</div>
									<div class="chartjs-wrapper-demo">
										<canvas id="chartBar2"></canvas>
									</div>
								</div>


							</div>
						</div>

					</div>
					<!-- row closed -->

					<!-- row opened -->


					<div class="row row-sm">
						<div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">

							<div class="card custom-card">
								<div class="card-header border-bottom-0">
									<label class="main-content-label my-auto pt-2">اخر عشرة فواتير</label>
									<span class="d-block tx-12 mb-3 mt-1 text-muted">عرض رقم , مبلغ و حالة اخر عشرة فواتير مصدرة</span>
								</div>
								<div class="card-body pt-2 pb-0">
									<div class="table-responsive tasks">
										<table class="table card-table table-vcenter text-nowrap border">
											<thead>
												<tr>
													<th class="wd-lg-10p">#</th>
													<th class="wd-lg-10p">رقم الفاتورة</th>
													<th class="wd-lg-10p">المبلغ</th>
													<th class="wd-lg-10p">الحالة</th>
												</tr>
											</thead>
											<tbody id="Last10Bill">




											</tbody>
										</table>
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
		<?php include "../include/footer.php" ?>
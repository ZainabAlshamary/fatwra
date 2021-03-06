<?php include "../include/header.php" ?>

<script src="../jsapi/admin/profilesetting.js"></script>
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


.alert-success {
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
                                <li class="breadcrumb-item"><a href="index">????????????</a></li>
                                <li class="breadcrumb-item active" aria-current="page">?????????? ????????????</li>
                            </ol>
                        </div>
                    </div>
                    <!-- End Page Header -->
                    <div class="card custom-card">
									<div class="card-body">
								            <div class="panel-body">
                                            <div class="row row-sm">

                          <div class="modal-body">
                                   
                                    <div class="row">
									 <div class="col-md-12">
                                        <div class="alert alert-success" role="alert">
                                            <i class="fa fa-user" aria-hidden="true"></i>??????????????????
                                        </div>
                                    </div>
                                        <div class="col-md-12">
                                            <div class="text-center">
                                                <div class="content1"></div>

                                            </div><br>
                                        </div><br>

                                        <div class="col-md-6">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope"
                                            aria-hidden="true"></i></span>
                                                </div>
                                                <input type="text" class="form-control email" placeholder="???????????? ????????????????????" aria-label="
                                    Username" aria-describedby="basic-addon1">
                                                <input type="hidden" class="form-control id" aria-label="Username" aria-describedby="basic-addon1">
                                                <input type="hidden" class="form-control fileId" aria-label="Username" aria-describedby="basic-addon1">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                                                </div>
                                                <input type="text" class="form-control name" placeholder="?????? ????????????" aria-label="Username" aria-describedby="basic-addon1">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                                                </div>
                                                <input type="text" class="form-control userName" placeholder="?????? ????????????" aria-label="Username" aria-describedby="basic-addon1">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-key" aria-hidden="true"></i></span>
                                                </div>
                                                <input type="password" class="form-control password" placeholder="?????????? ?????????? ????????????" aria-label="Username" aria-describedby="basic-addon1">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-map-marker"
                                            aria-hidden="true"></i></span>
                                                </div>
                                                <input type="text" class="form-control address" placeholder="??????????????">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-phone" aria-hidden="true"></i></span>
                                                </div>
                                                <input type="text" class="form-control phone" placeholder="?????? ????????????">
                                            </div>
                                        </div>
										
										     <div class="col-lg-12 col-md-12">
															<div class="input-group file-browser">
														
																<input type="file" class="form-control border-left-0 browse-file custom-file-upload csvfile" id="UploadImageProvider" placeholder="choose" readonly>
																<label class="input-group-btn">
																	<span class="btn btn-primary">
																		???????? ?????? <input type="file" style="display: none;" id="file-upload"  onchange="uploadeImage()" id="UploadImageProvider"  class="csvfile" multiple>
																	</span>
																</label>
															</div>
                                                             
                                                            </div>
															
															
                               

					
											
             
											    <div class="col-lg-12 col-md-12">
											 <button type="button" class="btn btn-primary" onclick="EditDetalis()">??????????</button>
										
						
                                  </div>
                                </div>
</div>
                                            </div>
                                    </div>
                    </div>
                    <!-- row opened -->
           



                </div>






            </div>
        </div>
    </div>
    </div>


    <div class="modal fade" id="exampleModasearch" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" style="max-width:1105px !important " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">?????????? ??????????</h5>
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
                                        <h5 class="text-center text-white"> ???????? ?????? ??????<br>???????????? ?????? ??????????</h5>
                                    </div>

                                </div>
                            </div>
                            <table id="dataTable" class="table table-hover table-bordered table-striped">
                                <thead style="background:#17a2b8; color:#fff;">
                                    <tr>
                                        <th>#</th>
                                        <th>?????? ??????????</th>
                                        <th>?????? ????????????</th>
                                        <th>????????????????</th>
                                        <th>??????????????</th>

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
                    <button type="button" onclick="$('#reset').trigger('reset');" class="btn btn-secondary" data-dismiss="modal">??????</button>

                </div>

            </div>

        </div>

    </div>
    <div class="modal fade" id="exampleModal11" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="z-index: 99999;">
        <div class="modal-dialog modal-lg" style="max-width:1105px !important " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">??????????????</h5>
                    <button type="button" onclick="$('#reset').trigger('reset');" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="row">

                        <div class="col-md-12">
                            <div class="alert alert-primary" role="alert">
                                <i class="fa fa-user" aria-hidden="true"></i> ?????????????? ???????????? ????????????
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control email1" placeholder="???????????? ????????????????????" aria-label="Username" aria-describedby="basic-addon1">
                                <input type="hidden" class="form-control id1" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff"><i class="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control name1" placeholder="??????????" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff"><i class="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control userName1" placeholder="?????? ????????????" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff"><i class="fa fa-key" aria-hidden="true"></i></span>
                                </div>
                                <input type="password" class="form-control password1" placeholder="?????????? ?????????? ????????????" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control address1" placeholder="??????????????">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1" style="background:#6259ca;color:#fff"><i class="fa fa-phone" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" class="form-control phone1" placeholder="?????? ????????????">
                            </div>
                        </div>

                    </div>


                </div>

                <div class="modal-footer">
                    <button type="button" onclick="$('#reset').trigger('reset');" class="btn btn-secondary" data-dismiss="modal">??????</button>
                    <button type="button" class="btn btn-primary" onclick="EditDetalis()">??????????</button>
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
                                <i class="fa fa-user" aria-hidden="true"></i> ???????????? ???????????? ????????????
                            </div>
                        </div>
                        <div id="TableClear" class="table-responsive">
                            <table id="TableDB" class="table table-hover table-bordered table-striped" style="font-size: 14px">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>??????????</th>
                                        <th>?????? ????????????????</th>
                                        <th>?????? ????????????</th>
                                        <th>?????????? ??????????????</th>
                                        <th>?????????? ????????????</th>
                                        <th>?????????? ??????????</th>
                                        <th>?????????? ??????????</th>
                                        <th>????????????</th>
                                        <th>?????? ????????????</th>
                                        <th>????????????</th>
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
                                                        <a class="page-link" tabindex="-1">????????????</a>
                                                    </li>
                                                    <li id="Next1" onclick="Pagension(1)" style="cursor: pointer;" class="page-item">
                                                        <a class="page-link">????????????</a>
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
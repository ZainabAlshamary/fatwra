var options = {
    "closeButton": true,
    "debug": true,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "showDuration": "300",
    "hideDuration": "100000",
    "timeOut": "10000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};


$( ".lastsum" ).keyup(function() {

   TypeNumber ();
});
 function TypeNumber (){
	 
                $(".TypeNumber").css("padding", "5px");
                var fraction = $(".lastsum").val().split(".");
                if (fraction.length == 2){
                    document.getElementById ("TypeNumber").innerHTML =  tafqeet (fraction[0]) + " فاصلة " + tafqeet (fraction[1]);
                }
                else if (fraction.length == 1){
                    document.getElementById ("TypeNumber").innerHTML =  tafqeet (fraction[0]);
                }
            }
			
			
			
var providerId = sessionStorage.getItem("id");
var Token = "Bearer " + sessionStorage.getItem('token');
var BillId;
var Data;


//console.log = function () {}
// $(function () {
    // $('.datetime').datetimepicker({
        // format: 'YYYY-MM-DD'
    // });
// });
GetServices();


// document.getElementById("EndSum").onblur = function () {
    // this.value = parseFloat(this.value.replace(/,/g, ""))
        // .toFixed(0)
        // .toString()
        // .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // if (this.value == "NaN")
        // document.getElementById("EndSum").value = "";
// }


function showprice() {

$(".TypeNumber").css("display", "block");

}

function hideprice() {
 	$(".TypeNumber").css("display", "none");
}



jQuery.fn.alphaNumericOnly = function () {
    $(this).keydown(function (e) {
        var key = e.which || e.keyCode;
        if (e.shiftKey && key >= 48 && key <= 57) {
            return false;
        }

    });
}
$(document).ready(function () {
    $(".customerN").alphaNumericOnly();
});



$(document).ready(function () {
    $('.customerN').on("cut copy paste", function (e) {
        e.preventDefault();
    });
});
function GetServices() {
    $(".loading").fadeIn();
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "SubProvider/GetServices?start=0&end=1000",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {
        $(".loading").fadeOut();
        for (var item of response.data) {
            $("#ServiscesType").append(`<option value="` + item.id + `">` + item.name + `</option>`);
        }
        $('.selectpicker').selectpicker('refresh');
    });
}


function OnAddBill() {
    if ($("#customerName").val() == "") {
        swal("يرجى ادخال اسم الزبون");
        return;
    } else if ($("#PhoneNumber").val() == "") {
        swal("يرجى ادخال رقم الهاتف");
        return;
    } else if ($("#PhoneNumber").val().substring(0, 2) != '07') {
        swal("رقم الهاتف يجب ان يبدأ بالرقم 07");
        return;
    } else if ($("#PhoneNumber").val().length < 11) {
        swal("حدث خطأ ! رقم الهاتف يجب ان يكون 11 ارقام");
        return;
    } else if ($(".billn").val().length < 5 && $(".billn").val().length > 0) {
        swal("حدث خطأ!الحد الادنى لرقم الفاتورة 5 ارقام");
        return;
    } else if ($("#ServiscesType").val() == "0") {
        swal("يرجى ادخال نوع الخدمة");
        return;
    } else if ($("#EndSum").val() == "") {
        swal("يرجى ادخال مبلغ الفاتورة ");
        return;
    } else if ($("#EndSum").val() < 0) {
        swal("حدث خطأ ! الحد الادنى لمبلغ الفاتورة 0");
        return;
    } else if ($("#EndSum").val() > 100000000) {
        swal("حدث خطأ ! الحد الاعلى لمبلغ الفاتورة (100000000)");
        return;
    }
    else if ($("#DueDate").val() == "") {
        swal("يرجى ادخال تاريخ النفاذ");
        return;
    }else if(((providerId == hrinsid)) && ($("#Note").val() == "")){
            swal("حدث خطأ ! يرجى ادخال ID");
        return;
    }else if(((providerId == ebroid)) && ($("#Note").val() == "")){
        swal("حدث خطأ ! يرجى ادخال التفاصيل");
    return;
}else if(((providerId == npadminid) || (providerId == shamsid) || (providerId == broadid) || (providerId == IQ) || (providerId == nolimit)) && ($("#Note").val() == "")){
        swal("حدث خطأ ! يرجى ادخال (@)reseller");
    return;
}else if((providerId == earthip) && ($("#Note").val() == "")){
            swal("حدث خطأ ! يرجى ادخال ip"); 
        return; 
    }else if((providerId == abizahraa) && ($("#Note").val() == "")){
          swal("حدث خطأ ! يرجى ادخال القضاء والناحية"); 
        return; 
    }else if((providerId == itechid) && ($("#Note").val() == "")){
        swal("حدث خطأ ! يرجى ادخال @ اسم اشتراك الانترنت"); 
    return; 
}
     else {
        OnAddBill1();

    }
}
$("body").on("blur", ".quantity1", function () {
    if (parseInt($(this).val()) <= 0 || $(this).val().length <= 0) {
        swal("يرجى كتابة الكمية");
    }
});
function OnAddBill1() {
    var billId = "";
    var SendData = {
        payId: $("#billNumber").val(),
        customerName: $("#customerName").val(),
        dueDate: $("#DueDate").val(),
        payDate: $("#DueDate").val(),
        status: 0,
        amount: $("#EndSum").val().replace(/\D/g, ''),
        clientId: 0,
        phoneNumber: $("#PhoneNumber").val(),
        serviceId: $("#ServiscesType").val(),
        note: $("#Note").val()

    };

    swal({
        title: "سيتم أنشاء فاتورة",
        text: "",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true
    }, function () {
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": DomainAPI + "SubProvider/AddBill",
            "method": "PUT",
            "headers": {
                "Authorization": Token,
                "Content-Type": "application/json"
            },
            "data": JSON.stringify(SendData)
        }).done(function (response) {
            BillId = response.data.id;
            if (response.error == false & response.message == "Bill Created Successfully") {
                swal("تم إنشاء الفاتورة بنجاح ", "رقم الفاتورة :" + response.data.payId + "");

                $('#billNumber').val('');
                $('#customerName').val('');
                $('#DueDate').val('');
                $('#EndSum').val('');
                $('.phonen').val('');
                $('.serviceI').append('<option value=""></option>')
                $('#Note').val('');
                $("#ServiscesType").val('0');
            } else if ((response.error == false & response.message == "Bill Created Successfully, But cannot send SMS")) {
                swal("تم إنشاء الفاتورة بنجاح ولكن تعذر ارسال الرسالة للزبون ", "رقم الفاتورة : " + response.data.payId + "");

                $('#billNumber').val('');
                $('#customerName').val('');
                $('#DueDate').val('');
                $('#EndSum').val('');
                $('.phonen').val('');
                $('.serviceI').val(0);
                $('#Note').val('');
                $("#ServiscesType").val('0');
            }

        }).fail(function (error) {
            if (error.responseJSON.error == true & error.responseJSON.message == "Duplicate PayId") {
                swal("حدثت مشكلة عند الاضافة ! رقم الفاتورة موجود مسبقا  ");
            } else if(error.responseJSON.error == true & error.responseJSON.message == "Amount must less than 100000000"){
                swal("حدث خطأ ! الحد الاعلى لمبلغ الفاتورة (100000000)");
            }

            else {
                swal("حدثت مشكلة عند الأضافة اعد المحاولة");
            }



        });
    });

}

function GetInfoCard(indexItem) {
    if (indexItem == 1) {
        masterqinumber = $("#Note").val()
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": DomainAPI + "SubProvider/CheckMasterQi?masterQiNumber=" + masterqinumber + "",
            "method": "GET",
            "headers": {
                "Authorization": Token
            },
        }).done(function (response) {
            if(response.error == false){
                $("#customerName").val(response.data);
                $("input").prop('disabled', false);
                $("#customerName").prop('disabled', true);
                $("#customerName").css('background-color', 'rgba(74, 144, 226, 0.38)');
            }else{
                
                $("#SendError").modal("show");
            }
        }).fail(function (error) {
            $("#SendError").modal("show");
        });
    } else {
        qiCardNumber = $("#Note").val()
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": DomainAPI + "SubProvider/CheckQiCard?qiCardNumber=" + qiCardNumber + "",
            "method": "GET",
            "headers": {
                "Authorization": Token
            },
        }).done(function (response) {
            if(response.error == false){
                $("#customerName").val(response.data);
                $("input").prop('disabled', false);
                $("#customerName").prop('disabled', true);
                $("#customerName").css('background-color', 'rgba(74, 144, 226, 0.38)');
            }else{
                
                $("#SendError").modal("show");
                }
        }).fail(function (error) {
            $("#SendError").modal("show");
        });
    }
}
GetproviderInformation();
var ItemInformation;

function GetproviderInformation() {

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "SubProvider/GetSupProviderInformation",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {

        ItemInformation = response;
        $("#companyName").text(response.data.name);
        $("#phoneNumber").text(response.data.phone);
        $("#address").text(response.data.address);
        $("#email").text(response.data.email);
        $(".nav-user").html(`<img src="` + response.data.imagePath + `" class="avatar-rounded"> ` + response.data.name + ``);
        $(".image").append(`<img src="` + response.data.imagePath + `" class="inform" width="120" height="120" style="   border-radius: 50%;">`);
        $("#provider-logo").text(response.data.name);
        changplaceholder();
    });
}
function GetQiCardNumber() {
    $("#Note").attr("placeholder", "ادخل رقم بطاقة كي كارد");
    $("#GetInfoCard").attr("onclick","GetInfoCard(0)");
}
//GetInfoCard
function GetMasterCardNumber() {
    $("#Note").attr("placeholder", "ادخل رقم بطاقة ماستر كارد");
    $("#GetInfoCard").attr("onclick","GetInfoCard(1)");
}
function changplaceholder() {

    if (providerId == qiid) {

        $(".changenote").attr("placeholder", "Reference Number");
        $(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #6259ca !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="Reference Number" id="Note" data-filter="(\+|(\+[1-9])?[0-9]*)" >`);
      

    } else if((providerId == loanid )  || (providerId == loanqi) || (providerId == loanm)) {
        $(".notebill").html(`
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split SelectCard" style="right:unset;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu qimaster" >
                <button class="dropdown-item" onclick="GetQiCardNumber()" id="QiCardNumber">بطاقة كي كارد</button>
                <button class="dropdown-item" onclick="GetMasterCardNumber()" id="MasterCardNumber">بطاقة ماستر كارد</button>
                </div>
            </div>
            <input type="text" class="form-control changenote"  placeholder="حدد نوع البطاقة اولاً" id="Note" data-filter="(\+|(\+[1-9])?[0-9]*)" />
            <button type="button" id="GetInfoCard" class="btn btn-primary">جلب المعلومات</button>
        </div>`);
        $("input").prop('disabled', true);
        $("#Note").prop('disabled', false)
    }else if((providerId == hrinsid )){
        $(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #6259ca !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="ID" id="Note" >`);
    }else if((providerId == earthip)){
        $(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #6259ca !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="ip" id="Note" >`);
    }else if((providerId == itechid)){
        $(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #6259ca !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="@ اسم اشتراك الانترنت" id="Note" >`);
    }else if((providerId == ebroid)){
        $(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #6259ca !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="التفاصيل" id="Note" >`);
    }else if((providerId == shamsid) || (providerId == npadminid) || (providerId == broadid) || (providerId == IQ) || (providerId == nolimit)){
            
			$(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #6259ca !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="(@)reseller" id="Note" >`);
		
			
    }else if((providerId == abizahraa) ){
            
			$(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #6259ca !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="القضاء والناحية" id="Note" >`);
		
			
    }else{
        $(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #6259ca !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="الوصف" id="Note" >`);

    }
};

function Getbill(id) {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "SubProvider/GetBill?id=" + id + "",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {
        var dataObj = response;
    });

}

function printBills() {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "SubProvider/GetBill?id=" + BillId + "",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {

        printBillData(response);
    });

}

function printBillData(data) {

    var contents = "";
    if(providerId == qiid){
		
        var notebill = `Reference Number	: <span style='color:#147970;font-size:20px; '> ${data.data.note} </span>`
           
        }else if ((providerId == loanid) || (providerId == loanqi) || (providerId == loanm)){
            
        var notebill = `رقم البطاقة	: <span style='color:#147970;font-size:20px; '> ${data.data.note} </span>`
        
        }else if((providerId == hrinsid )){
            var notebill = `ID	: <span style='color:#147970;font-size:20px; '> ${data.data.note} </span>`	  
        }else if((providerId == shamsid ) || (providerId == npadminid) || (providerId == broadid) || (providerId == IQ) || (providerId == nolimit)){
            var notebill = `(@)reseller	: <span style='color:#147970;font-size:20px; '> ${data.data.note} </span>`	  
        }else if(providerId == broadid){
            var notebill = `التفاصيل	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
        }else if(providerId == earthip ){
            var notebill = `ip	: <span style='color:#147970;font-size:20px; '> ${data.data.note} </span>`	  
        }else if(providerId == itechid ){
            var notebill = `@اسم اشتراك الانترنت	: <span style='color:#147970;font-size:20px; '> ${data.data.note} </span>`	  
        }else if(providerId == abizahraa ){
            var notebill = `القضاء والناحية	: <span style='color:#147970;font-size:20px; '> ${data.data.note} </span>`	  
        }
        else {
        var notebill = `الوصف	: <span style='color:#147970;font-size:20px; '> ${data.data.note} </span>`	
            
            
        }
    contents = ` <div class="row">

        <div class="container" style="margin-right: 2px;">

            <div class="col-md-12" style="border: 4px dashed">
                <div class="row">
                    <div class="col-md-5"  style="background: #067b70;margin-top: 53px;
    margin-bottom: 14px;width: 50%">
                    </div>
                    <div class="col-md-2 text-center">
                        <label style="
        font-size: 25px;
    margin-top: 37px;">فاتورة</label>
                    </div>
                   <div class="col-md-5" style="background: #067b70;margin-top: 53px;
    margin-bottom: 14px;">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <br>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-8">
                                <label style="    font-size: 20px;
    font-weight: bold;
    color: #000;float: right">اسم الشركة :` + ItemInformation.data.name + `</label>
                            </div>
                            <div class="col-md-8">
                                <label style="    font-size: 20px;
    font-weight: bold;
    color: #000;float: right">رقم الهاتف :` + ItemInformation.data.phone + `</label>
                            </div>
                            <div class="col-md-8">
                                <label style="    font-size: 20px;
    font-weight: bold;
    color: #000;float: right">العنوان :` + ItemInformation.data.address + `</label>
                            </div>
                            <div class="col-md-8">
                                <label style="    font-size: 20px;
    font-weight: bold;
    color: #000;float: right">البريد الالكتروني :` + ItemInformation.data.email + `</label>
                            </div>

                    <div class="col-md-2 ml-auto">
                       <img src="` + ItemInformation.data.imagePath + `" id="logoimg" width="80" height="80" style="margin-top: -145px; ">
                        <label class="provider-logo center" style="color: #000;font-size: 20px;font-weight: bold;margin-top: -65px;padding-left:12px !important">` + ItemInformation.data.name + `</label>
                    </div>
                        </div>
                    </div>
                    
                </div>

                <br>
                <hr>
                <div class="FormForPrint">
                    <div class="row">
                        <br>
                        <div class="col-md-4 biller-name">
                            <div class="name">الأسم</div>
                            <div>${data.data.customerName}</div>
                        </div>
                        <div class="col-md-3 biller-number" style="flex: 0 0 29.3%;max-width: 30%;">
                            <div class="number">رقم الفاتورة</div>
                            <div>${data.data.payId}</div>
                        </div>
                        <div class="col-md-4 biller-salary">
                            <div class="salary">المبلغ</div>
                            <div>${(addCommas(data.data.amount))}</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 biller-Card">
                            <div class="Card1">رقم الهاتف</div>
                            <div>${data.data.phoneNumber}</div>
                        </div>
                        <div class="col-md-3 biller-service" style="flex: 0 0 29.3%;max-width: 30%;">
                            <div class="service">نوع الخدمة</div>
                            <div>` + data.data.serviceName + `</div>
                        </div>
                        <div class="col-md-4 biller-status">
                            <div class="status">الحالة</div>
                            <div>${(data.data.status == "2" ? `<span style="width: 100%;" class="text-danger" >غير مدفوعة</span>` : `<span style="width: 100%;" class="text-success" > مدفوعة</span>`)}</div>
                        </div>

                    </div>
                </div>
                <br>
                <label style="font-size:25px; class='notebill' ">` + notebill + `</label>
                <hr>
                <p style="float:right; margin-left:150px; font-size: 18px;
            font-weight: 500; color: #000;margin-top:10px;font-weight:bold;">تاريخ الإنشاء : ${data.data.dueDate.split('T')[0] || ""}</p>
<br>
                <p style="float:right; margin-left:65%; font-size: 18px;
            font-weight: 500; color: #000;margin-top:10px;font-weight:bold;">تاريخ النفاذ : </p>
<div class="col-md-2 text-center  ml-auto">.

 <div id="qrcode" style="margin-top: -50px;margin-right: 30px;"></div>

            </div>
        </div>
    </div>`;

    var frame1 = $("<iframe />");
    frame1[0].name = "frame1";
    frame1.css({
        "position": "absolute",
        "top": "-1000000px"
    });
    $("body").append(frame1);
    var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
    frameDoc.document.open();
    frameDoc.document.write('<html lang="ar-iq" dir="rtl"><head><meta charset="utf-8"><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title></title>');
    frameDoc.document.write(`<link href="../assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" /> <link href="../css/billPrintStyle.css?q=15" rel="stylesheet" /><style type="text/css">table {page-break-inside: auto;}tr {page-break-inside: avoid;page-break-after: auto;}</style></head><body>`);
    frameDoc.document.write(contents);
    frameDoc.document.write(`
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>

<script>
(function () {
    var qrcode = new QRCode("qrcode", {
        text: "` + data.data.payId + `",
        width: 120,
        height: 120,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctlevel: QRCode.correctlevel
    });
})();
                    </script></body></html>`);
    frameDoc.document.close();
    setTimeout(function () {
        window.frames["frame1"].focus();
        window.frames["frame1"].print();

        frame1.remove();
    }, 100);
}

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}



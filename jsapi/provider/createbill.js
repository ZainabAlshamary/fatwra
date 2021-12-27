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
        "url": DomainAPI + "Provider/GetServices?providerId=" + providerId + "&start=0&end=1000",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {
        $(".loading").fadeOut();
        for (var item of response.data) {
            $("#ServiscesType").append(`<option value="` + item.id + `">` + item.name + `</option>`);
        }
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
            "url": DomainAPI + "Provider/AddBill",
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
            "url": DomainAPI + "Provider/CheckMasterQi?masterQiNumber=" + masterqinumber + "",
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
            "url": DomainAPI + "Provider/CheckQiCard?qiCardNumber=" + qiCardNumber + "",
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
        "url": DomainAPI + "Provider/GetProviderInformation?providerId=" + providerId + "",
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
        $(".nav-user").html(`<img src="`+ API +`` + response.data.imagePath + `" class="avatar-rounded"> ` + response.data.name + ``);
        $(".image").append(`<img src="`+ API +`` + response.data.imagePath + `" class="inform" width="120" height="120" style="   border-radius: 50%;">`);
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
             background-color: #2c5495 !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="ID" id="Note" >`);
    }else if((providerId == earthip)){
        $(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #2c5495 !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="ip" id="Note" >`);
    }else if((providerId == itechid)){
        $(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #2c5495 !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="@ اسم اشتراك الانترنت" id="Note" >`);
    }else if((providerId == ebroid)){
        $(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #2c5495 !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="التفاصيل" id="Note" >`);
    }else if((providerId == shamsid) || (providerId == npadminid) || (providerId == broadid) || (providerId == IQ) || (providerId == nolimit)){
            
			$(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #2c5495 !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="(@)reseller" id="Note" >`);
		
			
    }else if((providerId == abizahraa) ){
            
			$(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #2c5495 !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="القضاء والناحية" id="Note" >`);
		
			
    }else{
        $(".notebill").html(`   <div class="input-group-prepend">
        <span class="input-group-text" style="    color: #fff !important;
             background-color: #2c5495 !important;" id="basic-addon1"><i class="fa fa-info" aria-hidden="true"></i></span>
    </div>  <input type="text" class="form-control changenote"  placeholder="الوصف" id="Note" >`);

    }
};

function Getbill(id) {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetBill?id=" + id + "",
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
        "url": DomainAPI + "Provider/GetBill?id=" + BillId + "",
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
        if (data.data.status == 2) {

            var stch = `<span style="width: 100%;" class="text-danger" >غير مدفوعة</span>`;
    
        } else if (data.data.status == 3) {
    
            var stch = `<span style="width: 100%;" class="text-success"> مدفوعة</span>`;
    
        } else if (data.data.status == 4) {
    
            var stch = `<span style="width: 100%;" class="text-warning"> ملغاة</span>`;
    
        } else if (data.data.status == 5) {
    
            var stch = `<span style="width: 100%; color:gray" class="text"> متأخره</span>`;
    
        }
    
    contents = ` <div class="row">

    <div class="container" style="margin-right: 2px;border-top: 5px solid #2c8db2;
    border-bottom: 5px solid #2c8db2;background: url(https://www.cashadvance6online.com/data/archive/img/259814630.png) 0px 300px;
    background-size: cover;">

        <div class="col-md-12">
        <div class="row">
        
<div class="col-md-1 text-center">
<img src="`+ API +`` + ItemInformation.data.imagePath + `" id="logoimg" width="200" height="150" style="margin-top: 0px;float:left;border-radius:20px">

</div>
            <div class="col-md-9"><i class="fa fa-circle text-blue-m2 text-xs mr-1" style="float: right;
            padding-top: 10px;
            padding-left: 5px;
            color: #fcdd44;"></i>
              <label style="    font-size: 20px;
font-weight: bold;
color: #464e54;float: right">اسم الشركة : ` + ItemInformation.data.name + `</label>
            </div>
            <div class="col-md-9"><i class="fa fa-circle text-blue-m2 text-xs mr-1" style="float: right;
            padding-top: 10px;
            padding-left: 5px;
            color: #fcdd44;"></i>
                <label style="    font-size: 20px;
font-weight: bold;
color: #464e54;float: right">رقم الهاتف : ` + ItemInformation.data.phone + `</label>
            </div>
            <div class="col-md-9"><i class="fa fa-circle text-blue-m2 text-xs mr-1" style="float: right;
            padding-top: 10px;
            padding-left: 5px;
            color: #fcdd44;"></i>
                <label style="    font-size: 20px;
font-weight: bold;
color: #464e54;float: right">العنوان : ` + ItemInformation.data.address + `</label>
            </div>
            <div class="col-md-9"><i class="fa fa-circle text-blue-m2 text-xs mr-1" style="float: right;
            padding-top: 10px;
            padding-left: 5px;
            color: #fcdd44;"></i>
                <label style="    font-size: 20px;
font-weight: bold;
color: #464e54;float: right">البريد الالكتروني : ` + ItemInformation.data.email + `</label>
            </div>
           
            </div>

            <br>
            <hr>
            <div class="FormForPrint">
            <table class="table table-striped" style="z-index:-11">
            <tbody>
              <tr>
                <td><strong> الأسم</strong></td>
                <td class="text-center">` + data.data.customerName + `</td>
              </tr>
              <tr>
                <td><strong>رقم الفاتورة</strong></td>
                <td class="text-center">` + data.data.payId + `</td>
              </tr>
              <tr>
                <td><strong> المبلغ</strong></td>
                <td class="text-center">` + (addCommas(data.data.amount)) + `</td>
              </tr>
              <tr>
                <td><strong>  رقم الهاتف</strong></td>
                <td class="text-center" ><div>` + data.data.phoneNumber + `</div></td>
              </tr>
              <tr>
                <td><strong>الخدمة</strong></td>
                <td class="text-center">` + data.data.serviceName + `</td>
              </tr>
              <tr>
                <td><strong>الحالة</strong></td>
                <td class="text-center" >` + stch + `</td>
              </tr>
              <tr>
              <td><strong>الوصف</strong></td>
              <td class="text-center" >` + notebill + `</td>
            </tr>
            <tr>
              <td><strong>تاريخ الإنشاء</strong></td>
              <td class="text-center" >` + data.data.createDate.split('T')[0] || +`</td>
            </tr>
            <tr>
            <td><strong>تاريخ النفاذ</strong></td>
            <td class="text-center" >`+ data.data.dueDate.split('T')[0] || +`</td>
          </tr>
            </tbody>
          </table>
         
        </div>
            </div>
            <hr>
           

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
    frameDoc.document.write(`<link href="../assets/css-rtl/bootstrap.min.css" rel="stylesheet" type="text/css" /> <link href="../assets/css-rtl/billPrintStyle.css?q=15" rel="stylesheet" /><style type="text/css">table {page-break-inside: auto;}tr {page-break-inside: avoid;page-break-after: auto;}</style></head><body>`);
    frameDoc.document.write(contents);
    frameDoc.document.write(`
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

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
GetProviderFibCredential();

function GetProviderFibCredential() {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetProviderFibCredential",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {
        $(".loading").fadeOut();
        sessionStorage.setItem("clientid", response.data.clientId);
        sessionStorage.setItem("clientsecret", response.data.clientSecret);
    });
}



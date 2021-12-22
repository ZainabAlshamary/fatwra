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
if (sessionStorage.getItem('token')) { } else {
    window.location.href = "../signin.php";
}
var providerId = sessionStorage.getItem("id");

var Token = "Bearer " + sessionStorage.getItem('token');



console.log = function () { }

var flag = true;
var RangePages = 0;
Pagension(RangePages);

function Pagension(opsion) {
    if (opsion > 0) {
        RangePages += 10;
        $("#Previous").removeClass("disabled");
    } else {
        if (RangePages <= 0) {
            RangePages = 0;
            $("#Previous").addClass("disabled");
        } else {
            RangePages -= 10;
        }
    }

    if (flag) {
        GetData();
    } else {
        searchBiller();
    }
}

// $(function () {
    // $('.datetime').datetimepicker({
        // format: 'YYYY/MM/DD',
        // date: new Date(),

    // });
    // $('.datetime2').datetimepicker({
        // useCurrent: false,
        // format: 'YYYY/MM/DD',
        // date: new Date(),

    // });
    // $(".datetime").on("dp.change", function (e) {
        // $('.datetime2').data("DateTimePicker").minDate(e.date);
    // });
    // $(".datetime2").on("dp.change", function (e) {
        // $('.datetime').data("DateTimePicker").maxDate(e.date);
    // });

// });


function GetInformation() {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetProviderInformation?providerId=" + providerId + "",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {
        $("#companyName").text(response.data.name);
        $("#phoneNumber").text(response.data.phone);
        $("#address").text(response.data.address);
        $("#email").text(response.data.email);
        $(".nav-user").append(`<img src="`+ API +`` + response.data.imagePath + `" class="avatar-rounded"> ` + response.data.name + ``);
        if (providerId == qiid) {
            $(".ip").removeAttr("style");
            $(".ip").html("Reference Number");
            $("#Bill_Number").attr("placeholder", "رقم الفاتورة او الهاتف او الاسم او RefrenceNumber");

        } else if ((providerId == loanid) || (providerId == loanqi) || (providerId == loanm)) {

            $(".ip").removeAttr("style");
            $(".ip").html("Card Number");
            $("#Bill_Number").attr("placeholder", "رقم الفاتورة او الهاتف او الاسم او CardNumber");
        } else if ((providerId == earthip)) {
            $(".ip").removeAttr("style");
            $(".ip").html("ip");
            $("#Bill_Number").attr("placeholder", "رقم الفاتورة او الهاتف او الاسم او ip");

        } else if ((providerId == hrinsid)) {
            $(".ip").removeAttr("style");
            $(".ip").html("ID");
            $("#Bill_Number").attr("placeholder", "رقم الفاتورة او الهاتف او الاسم او ID");
        } else if ((providerId == itechid)) {
            $(".ip").removeAttr("style");
            $(".ip").html("@ اسم اشتراك النت");
            $("#Bill_Number").attr("placeholder", "رقم الفاتورة او الهاتف او الاسم او @اسم اشتراك النت");
        } else if ((providerId == ebroid)) {
            $(".ip").removeAttr("style");
            $(".ip").html("التفاصيل");
            $("#Bill_Number").attr("placeholder", "رقم الفاتورة او الهاتف او الاسم او  التفاصيل");
        } else if ((providerId == shamsid) || (providerId == npadminid) || (providerId == broadid) || (providerId == IQ) || (providerId == nolimit)) {
            $(".ip").removeAttr("style");
            $(".ip").html("(@)reseller");
            $("#Bill_Number").attr("placeholder", "رقم الفاتورة او الهاتف او الاسم او (@)reseller");
        } else if ((abizahraa == providerId)) {

            $(".ip").html("القضاء والناحية");
            $("#Bill_Number").attr("placeholder", "رقم الفاتورة او الهاتف او الاسم او القضاء والناحية");
        } else {
            $(".ip").removeAttr("style");
            $(".ip").html("note");
            $("#Bill_Number").attr("placeholder", "رقم الفاتورة او الهاتف او الاسم او note");
        }
        ItemInformation = response;


    });
}

var GetDataBill;

function GetData() {
    var provideid = sessionStorage.getItem('id');


    if (!flag) {
        RangePages = 0;
        flag = true;
    }
    $(".loading").fadeIn();
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetAllBills?providerId=" + providerId + "&start=" + RangePages + "&end=10",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {
        $(".loading").fadeOut();
        GetDataBill = response;
        var TextHtml = "",
            j = 1;

        for (var i = 0; i < response.data.length; i++) {

            if ((response.data[i].status == 4) || (response.data[i].paidBy != 00)) {

                var cancelb = ``
                var editbill = ``

            } else if ((response.data[i].status == 5) || (response.data[i].paidBy != 00)) {

                 var cancelb = `<button type="button"  class="btn btn-primary btn-sm" onclick="cancelbill('` + response.data[i].payId + `')"  title="الغاء الفاتورة "><i class="fa fa-times" aria-hidden="true"></i></button>`
                var editbill = ``
            } else {

                var cancelb = `<button type="button"  class="btn btn-primary btn-sm" onclick="cancelbill('` + response.data[i].payId + `')"  title="الغاء الفاتورة "><i class="fa fa-times" aria-hidden="true"></i></button>`
                var editbill = `<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModalLong3" onclick="GetDetalis('` + response.data[i].id + `','` + response.data[i].amount + `')"  title="تعديل المبلغ"><i class="fa fa-edit" aria-hidden="true"></i></button>`
            }

            if (response.data[i].status == 2) {

                var stch = `<button style = "border: none;
    font-size: 13px;
    height: 30px;" class="btn ripple btn-danger">غير مدفوعة</button>`;
                var pay = `<button type="button" class="btn ripple btn-primary" style=" 
                    border: none;font-size: 15px;cursor:pointer"   onclick="paybill('` + response.data[i].payId + `')" ><i class="fa fa-money" aria-hidden="true"></i> دفع </button>`;

            } else if (response.data[i].status == 3) {

                var stch = `<button style="border: none;
    font-size: 13px;
    height: 30px;width:100%" class="btn ripple btn-success"> مدفوعة</button>`;
                var pay = `<button type="button"class="btn ripple btn-primary" disabled style=" 
                font-size: 15px;cursor: no-drop;border: none;"  ><i class="fa fa-money" aria-hidden="true" ></i> دفع </button>`;

            } else if (response.data[i].status == 4) {

                var stch = `<button style="border: none;
    font-size: 13px;
    height: 30px;width:100%" class="btn ripple btn-danger"> ملغاة</button>`;
                var pay = `<button type="button"class="btn ripple btn-danger" disabled style="  
                font-size: 15px;cursor: no-drop;border: none;"  ><i class="fa fa-money" aria-hidden="true" ></i> دفع </button>`;

            } else if ((response.data[i].status == 5) && (provideid == qiid)) {

                var stch = `<button style="border: none;
    font-size: 13px;
    height: 30px;width:100%; background:#0000003d; color:white" class="btn ripple btn-danger"> متأخره</button>`;
                var pay = `<button type="button" class="btn ripple btn-danger" style=" 
                    border: none;font-size: 15px;cursor:pointer"   onclick="paybill('` + response.data[i].payId + `')" ><i class="fa fa-money" aria-hidden="true"></i> دفع </button>`;
            } else {

                var stch = `<button style="border: none;
    font-size: 13px;
    height: 30px;width:100%; background:#0000003d; color:white" class="btn ripple btn-danger"> متأخره</button>`;
                var pay = `<button type="button" class="btn ripple btn-danger" disabled style="
                font-size: 15px;cursor: no-drop;    border: none;"  ><i class="fa fa-money" aria-hidden="true" ></i> دفع </button>`;

            }
            if (response.data[i].paidBy == 1) {

                var paidby = `<span class="text-primary">اقساطي</span>`;

            } else if (response.data[i].paidBy == 2) {

                var paidby = `<span class="text-warning">POS</span>`;

            } else if (response.data[i].paidBy == 3) {

                var paidby = `<span class="text-danger">دفع نقدا</span>`;

            } else if (response.data[i].paidBy == 4) {

                var paidby = `<span class="text-info">زين كاش</span>`;

            } else if (response.data[i].paidBy == 5) {

                var paidby = `<span class="text-warning">منافذ كي</span>`;

            } else if (response.data[i].paidBy == 6) {

                var paidby = `<span class="text-warning">دفع الكتروني</span>`;

            } else if (response.data[i].paidBy == 00) {

                var paidby = `<span class="text">/</span>`;

            }
            if ((providerId == hrinsid) || (providerId == alaynid) || (providerId == almoshriqid) || (providerId == earthip) || (providerId == qiid) || (providerId == loanid) || (providerId == loanm) || (providerId == loanqi) || (providerId == wafaaid)) {

                response.data[i].note = (response.data[i].note || "/");
                var tdv = '<td class="ip"><span style="width: 100%;">' + (response.data[i].note) + '</span></td>';
            }
            else {
                response.data[i].note = (response.data[i].note || "/");
                var tdv = '<td class="ip"><span style="width: 100%;">' + (response.data[i].note) + '</span></td>';
            }
            TextHtml += `<tr class="text-center"><td>` + ((j++) + RangePages) + `</td>
			 	
                            <td>` + (response.data[i].customerName == null ? '<span style="width: 100%;">/</span>' : '<span style="width: 100%;">' + (response.data[i].customerName) + '</span>') + `</td>
                            <td>` + response.data[i].phoneNumber + ` </td>
                            <td>` + response.data[i].payId + ` </td>
                            <td>` + (spittime(response.data[i].createDate)) + `  </td>
                            <td>` + (addCommas(response.data[i].amount)) + `</td>
                            <td>` + (response.data[i].dueDate.split('T')[0] || "") + `</td>
                            <td>` + (response.data[i].serviceName) + `</td>
                            <td>` + paidby + `</td>
                            <td>` + stch + `</td>  
                            `+ tdv + `
                            <td><button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModalLong2" onclick="ShowWithoutFourm(` + i + `)"  title="عرض "><i class="fa fa-eye" aria-hidden="true"></i></button>          
                            <button type="button" class="btn btn-primary btn-sm" onclick="PrintBill(` + i + `)"  title="طباعة "><i class="fa fa-print" aria-hidden="true"></i></button>  
                            `+ editbill + `
                            `+ cancelb + `
                            </td>
							<td class="payCashTd">` + pay + `</td>
                            </tr>`;
        }

        $("#BodyData").html(TextHtml);
        $(".loading").fadeOut();
        // checkProvider();

    }).fail(function (error) {
        $("#BodyData").html(``);

        $(".loading").fadeOut();
    });
}

// function checkProvider(){
// provider id should NOT be hard coded!!!
// if(providerId == qiid){
// $("#payCashTh").css("display", "none");
// $(".payCashTd").css("display", "none");
// }
// }
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

GetServices();

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

GetInformation();
var ItemInformation;


$("#Bill_Number").keypress(function (e) {
    if (e.which == 13) {
        searchBiller();
    }

});
var searchItems = "";
function searchBiller() {
    var provideid = sessionStorage.getItem('id');
    if ($("#Bill_Number").val().length > 0) {
        searchItems = $("#Bill_Number").val();
        if ($("#Bill_Number").val().length <= 0) {
            $("#SendError").modal("show");
            return;
        }
        RangePages = 0;
    }
    flag = false;
    $(".loading").fadeIn();
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/SearchBill?searchTerm=" + searchItems + "&start=" + RangePages + "&end=10",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {
        $(".showAll").show();
        GetDataBill = response;
        $("#Bill_Number").val('');
        $(".loading").fadeOut();
        var TextHtml = "",
            j = 1;

        for (var i = 0; i < response.data.length; i++) {

            if ((response.data[i].status == 4) || (response.data[i].paidBy != 00)) {

                var cancelb = ``
                var editbill = ``


            } else if ((response.data[i].status == 5) || (response.data[i].paidBy != 00)) {

                var cancelb = `<button type="button"  class="btn btn-primary btn-sm" onclick="cancelbill('` + response.data[i].payId + `')"  title="الغاء الفاتورة "><i class="fa fa-times" aria-hidden="true"></i></button>`
                var editbill = `<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModalLong4" onclick="GetDetalis('` + response.data[i].id + `','` + response.data[i].amount + `')"  title="تعديل التاريخ"><i class="fa fa-edit" aria-hidden="true"></i></button>`


            } else {

                var cancelb = `<button type="button"  class="btn btn-primary btn-sm" onclick="cancelbill('` + response.data[i].payId + `')"  title="الغاء الفاتورة "><i class="fa fa-times" aria-hidden="true"></i></button>`
                var editbill = `<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModalLong3" onclick="GetDetalis('` + response.data[i].id + `','` + response.data[i].amount + `')"  title="تعديل المبلغ"><i class="fa fa-edit" aria-hidden="true"></i></button>`



            }



            if (response.data[i].status == 2) {

                 var stch = `<button style = "border: none;
    font-size: 13px;
    height: 30px;" class="btn ripple btn-danger">غير مدفوعة</button>`;
                var pay = `<button type="button" class="btn ripple btn-primary" style=" 
                    border: none;font-size: 15px;cursor:pointer"   onclick="paybill('` + response.data[i].payId + `')" ><i class="fa fa-money" aria-hidden="true"></i> دفع </button>`;

            } else if (response.data[i].status == 3) {

                var stch = `<button style="border: none;
    font-size: 13px;
    height: 30px;width:100%" class="btn ripple btn-success"> مدفوعة</button>`;
                var pay = `<button type="button"class="btn ripple btn-primary" disabled style=" 
                font-size: 15px;cursor: no-drop;border: none;"  ><i class="fa fa-money" aria-hidden="true" ></i> دفع </button>`;

            } else if (response.data[i].status == 4) {

                var stch = `<button style="border: none;
    font-size: 13px;
    height: 30px;width:100%" class="btn ripple btn-danger"> ملغاة</button>`;
                var pay = `<button type="button"class="btn ripple btn-danger" disabled style="  
                font-size: 15px;cursor: no-drop;border: none;"  ><i class="fa fa-money" aria-hidden="true" ></i> دفع </button>`;

            } else if ((response.data[i].status == 5) && (provideid == qiid)) {

                var stch = `<button style="border: none;
    font-size: 13px;
    height: 30px;width:100%; background:#0000003d; color:white" class="btn ripple btn-danger"> متأخره</button>`;
                var pay = `<button type="button" class="btn ripple btn-danger" style=" 
                    border: none;font-size: 15px;cursor:pointer"   onclick="paybill('` + response.data[i].payId + `')" ><i class="fa fa-money" aria-hidden="true"></i> دفع </button>`;
            } else {

                var stch = `<button style="border: none;
    font-size: 13px;
    height: 30px;width:100%; background:#0000003d; color:white" class="btn ripple btn-danger"> متأخره</button>`;
                var pay = `<button type="button" class="btn ripple btn-danger" disabled style="
                font-size: 15px;cursor: no-drop;    border: none;"  ><i class="fa fa-money" aria-hidden="true" ></i> دفع </button>`;

            }
            if (response.data[i].paidBy == 1) {

                var paidby = `<span class="text-primary">اقساطي</span>`;

            } else if (response.data[i].paidBy == 2) {

                var paidby = `<span class="text-warning">POS</span>`;

            } else if (response.data[i].paidBy == 3) {

                var paidby = `<span class="text-danger">دفع نقدا</span>`;

            } else if (response.data[i].paidBy == 4) {

                var paidby = `<span class="text-info">زين كاش</span>`;

            } else if (response.data[i].paidBy == 5) {

                var paidby = `<span class="text-warning">منافذ كي</span>`;

            } else if (response.data[i].paidBy == 6) {

                var paidby = `<span class="text-warning">دفع الكتروني</span>`;

            }
            else if (response.data[i].paidBy == 00) {

                var paidby = `<span class="text">/</span>`;

            }
            if ((providerId == hrinsid) || (providerId == alaynid) || (providerId == almoshriqid) || (providerId == earthip) || (providerId == qiid) || (providerId == loanid) || (providerId == loanm) || (providerId == loanqi) || (providerId == wafaaid)) {
                response.data[i].note = (response.data[i].note || "/");
                var tdv = '<td class="ip"><span style="width: 100%;">' + (response.data[i].note) + '</span></td>';

            } else {

                var tdv = '<td class="ip"><span style="width: 100%;">' + (response.data[i].note) + '</span></td>';
            }
            TextHtml += `<tr class="text-center"><td>` + ((j++) + RangePages) + `</td>
			 	
<td>` + (response.data[i].customerName == null ? '<span style="width: 100%;">/</span>' : '<span style="width: 100%;">' + (response.data[i].customerName) + '</span>') + `</td>
                            <td>` + response.data[i].phoneNumber + ` </td>
 <td>` + response.data[i].payId + ` </td>
                                                                <td>` + (spittime(response.data[i].createDate)) + `  </td>
                                                                <td>` + (addCommas(response.data[i].amount)) + `</td>
                                                                <td>` + (response.data[i].dueDate.split('T')[0] || "") + `</td>
                                                                <td>` + (response.data[i].serviceName) + `</td>
<td>` + paidby + `</td>
<td>` + stch + `</td>  
`+ tdv + `
                                                               	    <td>
                                                                   <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModalLong2" onclick="ShowWithoutFourm(` + i + `)"  title="عرض "><i class="fa fa-clone" aria-hidden="true"></i></button>          
<button type="button" class="btn btn-primary btn-sm" onclick="PrintBill(` + i + `)"  title="طباعة "><i class="fa fa-print" aria-hidden="true"></i></button>  
`+ editbill + `
`+ cancelb + `

                                                                </td>
															
                                                               <td class="payCashTd" >` + pay + `</td>
                    </tr>`;
        }

        $("#BodyData").html(TextHtml);
        $(".loading").fadeOut();
        checkProvider();
    }).fail(function (error) {
        $(".showAll").show();
        $("#BodyData").html(`<tr class="text-center">
            <td colspan="100%">
                <p class="h5 text-danger">لا توجد بيانات</p>
            </td>
        </tr>`);
        RangePages = 0;
        $(".loading").fadeOut();
    });
}

// function checkProvider(){
//     // provider id should NOT be hard coded!!!
//     if(providerId == qiid ){
//         $("#payCashTh").css("display", "none");
//         $(".payCashTd").css("display", "none");
//     }
// }

function showAll() {
    GetData();
}

function cancelbill(payid) {

    var form = {

        payId : payid
    }
    swal({
        title: "هل ترغب",
        text: "هل ترغب في الغاء الفاتورة",
        type: "warning",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
        confirmButtonText: "موافق",
        cancelButtonText: "الغاء",
    }, function () {

        $.ajax({
            url: DomainAPI + 'Provider/CancelBill', // 
            headers: {

                "Authorization": Token,
                "Content-Type": "application/json",
            },
            type: 'post',
            "processData": false,            
            "data": JSON.stringify(form), 
        }).done(function (response) {
            swal("تم الغاء الفاتورة");
            $("#clear-data").click();
            GetData();

        }).fail(function (error) {
            swal("حدث خطا في عملية الالغاء");
            $(".loading").fadeOut();
        });

    });
}

function paybill(ida) {

    var billid = ida;
    swal({
        title: "هل ترغب",
        text: "في دفع الفاتورة ؟",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
        confirmButtonText: "دفع",
        cancelButtonText: "الغاء",
    }, function () {

        $.ajax({
            url: DomainAPI + 'Provider/PayBill?payId=' + billid, // 
            headers: {

                "Authorization": Token
            },
            type: 'put',
            cache: false,
            contentType: false,
            processData: false,


        }).done(function (response) {

            swal("شكرا", "تم دفع الفاتورة بنجاح", "success");
            $("#clear-data").click();
            GetData();

        }).fail(function (error) {
            swal("حدث خطأ في عملية الدفع");
            $(".loading").fadeOut();
        });

    });
}
function GetDetalis(id, amount) {
    id1 = id;
    amount1 = amount
    $(".lastsum").val(amount1);
    $(".invoiceEdit").attr("onclick", `Editbill('${id1}');`);
    $(".dateEdit").attr("onclick", `editbilldate('${id1}');`);
}
function Editbill(payId) {
    if ($("#EndSum").val() < 0) {
        swal("حدث خطأ ! الحد الادنى لقيمة الفاتورة 0");
        return;
    }
    else if ($("#EndSum").val() > 100000000) {
        swal("حدث خطأ ! الحد الاعلى لمبلغ الفاتورة (100000000)");
        return;
    }
    var DataSend = {
        id: payId,
        amount: parseInt($("#EndSum").val(),)
    };

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/EditBill",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": Token
        },

        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": JSON.stringify(DataSend)

    }).done(function (response) {
        swal("تم التعديل بنجاح");
        GetData();
        $('#exampleModalLong3').modal('toggle');
    }).fail(function () {
        swal("يوجد خطأ");
    });
}


function editbilldate(payId) {

    var d = new Date();
    var strDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();



    if ($("#newdate").val() < strDate) {
        swal("لايمكن اختيار تاريخ قديم");
        return;

    }
    // }else  if ($("#newdate").val() == strDate ) {

    // swal("لايمكن اختيار تاريخ اليوم");
    // return;
    // }

    var billId = payId;
    var newDueDate = $("#newdate").val();


    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/UpdateLateBillDueDate?billId=" + billId + "&newDueDate=" + newDueDate,
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": Token
        },

        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",


    }).done(function (response) {


        swal("تم التعديل بنجاح");
        GetData();
        $('#exampleModalLong4').modal('toggle');
    }).fail(function (response) {


        if (response.message == "Due date must be more than create date and today date") {

            swal("لايمكن اختيار تاريخ اليوم او تاريخ قديم");

        }
    });
}

function spittime(strdate) {
    if (strdate == null) {
        var str = "0001-01-01T00:00:00";
    } else {

        var str = strdate;
    }


    var res = str.split(".")[0];
    var res1 = res.split("T")
    return res1;
}

function ShowWithoutFourm(id) {

    var ItemBill = GetDataBill.data[id];
    if (providerId == qiid) {

        var notebill = `Reference Number	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`

    } else if ((providerId == loanid) || (providerId == loanqi) || (providerId == loanm)) {

        var notebill = `رقم البطاقة	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`

    } else if (providerId == hrinsid) {
        var notebill = `ID	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
    }
    else if ((providerId == shamsid) || (providerId == npadminid) || (providerId == broadid) || (providerId == IQ) || (providerId == nolimit)) {
        var notebill = `(@)reseller	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
    }
    else if (providerId == itechid) {
        var notebill = `@ اسم اشتراك الانترنت	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
    } else if (providerId == ebroid) {
        var notebill = `التفاصيل	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
    } else if (providerId == earthip) {
        var notebill = `ip	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
    } else if (providerId == abizahraa) {
        var notebill = `المحافظة	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
    }
    else {
        var notebill = `الوصف	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`


    }
    if (ItemBill.status == 2) {

        var stch = `<span style="width: 100%;" class="text-danger" >غير مدفوعة</span>`;

    } else if (ItemBill.status == 3) {

        var stch = `<span style="width: 100%;" class="text-success"> مدفوعة</span>`;

    } else if (ItemBill.status == 4) {

        var stch = `<span style="width: 100%;" class="text-warning"> ملغاة</span>`;

    } else if (ItemBill.status == 5) {

        var stch = `<span style="width: 100%; color:gray" class="text"> متأخره</span>`;

    }

    var contents = `<html lang="ar-iq" dir="rtl">
                                <head>
                                    <meta charset="utf-8">
                                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                    <title></title>
                                    <link href="../css/billPrintStyle.css" rel="stylesheet" />
                                </head>
                                <body>
                                    <div class="row">

        <div>

            <div class="col-md-12">
               
               
                        <div class="row">
                            <div class="col-md-9">
                                <label style="    font-size: 20px;
    font-weight: bold;
    color: #464e54;float: right">اسم الشركة : ` + ItemInformation.data.name + `</label>
                            </div>
                            <div class="col-md-9">
                                <label style="    font-size: 20px;
    font-weight: bold;
    color: #464e54;float: right">رقم الهاتف : ` + ItemInformation.data.phone + `</label>
                            </div>
                            <div class="col-md-9">
                                <label style="    font-size: 20px;
    font-weight: bold;
    color: #464e54;float: right">العنوان : ` + ItemInformation.data.address + `</label>
                            </div>
                            <div class="col-md-9">
                                <label style="    font-size: 20px;
    font-weight: bold;
    color: #464e54;float: right">البريد الالكتروني : ` + ItemInformation.data.email + `</label>
                            </div>
 <div class="col-md-2 text-center">
                        <img src="`+ API +`` + ItemInformation.data.imagePath + `" id="logoimg" width="100" height="100" style="margin-top: -100px;">
                        <label class="provider-logo" style="color: #365b85;font-size: 20px;font-weight: bold;text-align:center">` + ItemInformation.data.name + `</label>
                    </div>
                        </div>
                <hr>
                <div class="FormForPrint">
                    <div class="row">
                        <br>
                        <div class="col-md-4 biller-name">
                            <div class="name">الأسم</div>
                            <div>` + ItemBill.customerName + `</div>
                        </div>
                        <div class="col-md-3 biller-number" style="flex: 0 0 29.3%;max-width: 30%;">
                            <div class="number">رقم الفاتورة</div>
                            <div>` + ItemBill.payId + `</div>
                        </div>
                        <div class="col-md-4 biller-salary">
                            <div class="salary">المبلغ</div>
                            <div>` + (addCommas(ItemBill.amount)) + `</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 biller-Card">
                            <div class="Card1">رقم الهاتف</div>
                            <div>` + ItemBill.phoneNumber + `</div>
                        </div>
                        <div class="col-md-3 biller-service" style="flex: 0 0 29.3%;max-width: 30%;">
                            <div class="service">نوع الخدمة</div>
                            <div>` + ItemBill.serviceName + `</div>
                        </div>
                        <div class="col-md-4 biller-status">
                            <div class="status">الحالة</div>
                            <div>` + stch + `</div>
                        </div>

                    </div>
                </div>
                <br>
               
                <label style="font-size:25px; class='notebill' ">` + notebill + `</label>
                <hr>
                <p style="float:right; margin-left:150px; font-size: 18px;
            font-weight: 500; color: #0a4a82;margin-top:10px;font-weight:bold;">تاريخ الإنشاء : ` + ItemBill.createDate.split('T')[0] || +`</p>

                <p style="float:left; margin-left:150px; font-size: 18px;
            font-weight: 500; color: #0a4a82;margin-top:10px;font-weight:bold;">تاريخ النفاذ : `+ ItemBill.dueDate.split('T')[0] || +`</p>

                
            </div>
        </div>
    </div>`;
    $("#DataCammingWithout").html(contents);
    $('#FourmWithout').modal('show');
};

function PrintBill(id) {
    var ItemBill = GetDataBill.data[id];
    if (providerId == qiid) {

        var notebill = `Reference Number	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`

    } else if ((providerId == loanid) || (providerId == loanqi) || (providerId == loanm)) {

        var notebill = `رقم البطاقة	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`

    } else if (providerId == hrinsid) {
        var notebill = `ID	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
    } else if ((providerId == shamsid) || (providerId == npadminid) || (providerId == broadid) || (providerId == IQ) || (providerId == nolimit)) {
        var notebill = `(@)reseller	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
    }
    else if (providerId == itechid) {
        var notebill = `@ اسم اشتراك الانترنت	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
    } else if (providerId == broadid) {
        var notebill = `التفاصيل	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
    } else if (providerId == earthip) {
        var notebill = `ip	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
    } else if (providerId == abizahraa) {
        var notebill = `القضاء والناحية	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
    }
    else {
        var notebill = `الوصف	: <span style='color:#147970;font-size:20px; '> ${ItemBill.note} </span>`
    }



    if (ItemBill.status == 2) {

        var stch = `<span style="width: 100%;" class="text-danger" >غير مدفوعة</span>`;

    } else if (ItemBill.status == 3) {

        var stch = `<span style="width: 100%;" class="text-success"> مدفوعة</span>`;

    } else if (ItemBill.status == 4) {

        var stch = `<span style="width: 100%;" class="text-warning"> ملغاة</span>`;

    } else if (ItemBill.status == 5) {

        var stch = `<span style="width: 100%; color:gray" class="text"> متأخره</span>`;

    }

    var contents = "";
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
                       <img src="`+ API +`` + ItemInformation.data.imagePath + `" id="logoimg" width="80" height="80" style="margin-top: -145px; ">
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
                            <div style="font-size: 18px;color:#000">${ItemBill.customerName}</div>
                        </div>
                        <div class="col-md-3 biller-number" style="flex: 0 0 29.3%;max-width: 30%;">
                            <div class="number">رقم الفاتورة</div>
                            <div style="font-size: 18px;color:#000">${ItemBill.payId}</div>
                        </div>
                        <div class="col-md-4 biller-salary">
                            <div class="salary">المبلغ</div>
                            <div style="font-size: 18px;color:#000">${(addCommas(ItemBill.amount))}</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 biller-Card">
                            <div class="Card1">رقم الهاتف</div>
                            <div style="font-size: 18px;color:#000">${ItemBill.phoneNumber}</div>
                        </div>
                        <div class="col-md-3 biller-service" style="flex: 0 0 29.3%;max-width: 30%;">
                            <div class="service">نوع الخدمة</div>
                            <div style="font-size: 18px;color:#000">` + ItemBill.serviceName + `</div>
                        </div>
                        <div class="col-md-4 biller-status">
                            <div class="status">الحالة</div>
                            <div style="font-size: 18px">${stch}</div>
                        </div>

                    </div>
                </div>
                <br>
<label style="font-size:19px; class='notebill' ">` + notebill + `</label>
                <hr>
                <p style="float:right; margin-left:150px; font-size: 18px;
            font-weight: 500; color: #000;margin-top:10px;font-weight:bold;">تاريخ الإنشاء : ${ItemBill.createDate.split('T')[0] || ""}</p>
<br>
                <p style="float:right; margin-left:65%; font-size: 18px;
            font-weight: 500; color: #000;margin-top:10px;font-weight:bold;">تاريخ النفاذ : ${ItemBill.dueDate.split('T')[0] || ""}</p>
<div class="col-md-2 text-center  ml-auto">.

 <div id="qrcode" style="margin-top: -50px;margin-right: 50px;"></div>
                        
                    </div>
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
    frameDoc.document.write(`<link href="../assets/css-rtl/bootstrap.min.css" rel="stylesheet" type="text/css" /> <link href="../assets/css-rtl/billPrintStyle.css?q=15" rel="stylesheet" /><style type="text/css">table {page-break-inside: auto;}tr {page-break-inside: avoid;page-break-after: auto;}</style></head><body>`);
    frameDoc.document.write(contents);
    frameDoc.document.write(`
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>

<script>
(function () {
    var qrcode = new QRCode("qrcode", {
        text: "` + ItemBill.payId + `",
        width: 90,
        height: 90,
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

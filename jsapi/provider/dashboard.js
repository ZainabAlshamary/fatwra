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

var providerId = sessionStorage.getItem("id");
var Token = "Bearer " + sessionStorage.getItem('token');


// console.log = function () { }
//  $(".pulse2").click(function(){
//     $(".fa-long-arrow-down").hide();
//     $(".loadericon").show();
//   });
GetCardInformation();

function GetCardInformation() {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetCardInformation",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {
        $(".pulse").text(addCommas(response.data.balance));
        $(".image2").hide();
        $(".image1").show();

    }).fail(function (error) {
        if (error.responseJSON.error == true & error.responseJSON.message == "Invalid card number !") {
            $(".pulse").text("تأكد من البطاقة");
            $(".image1").hide();
            $(".image2").show();

        } else if (error.responseJSON.error == true & error.responseJSON.message == "Error when get information !") {
            $(".pulse").text("يوجد خطأ !");
            $(".image1").hide();
            $(".image2").show();
        }

        else {
            swal("حدثت مشكلة عند الأضافة اعد المحاولة");
        }
    });

}
Gettop();

function Gettop() {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetTopSupProviders",
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": Token
        },

    }
    $.ajax(settings).done(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            $('#topsubprovider').append(`
			
				<li class="list-item mb-0 pl-3 pr-3 mt-0 pb-3">
											<div class="media align-items-center">
												<div class="crypto-icon bg-primary-transparent text-primary"> <i class="mdi mdi-arrow-up-bold-circle-outline" data-toggle="tooltip" title="" data-original-title="mdi-arrow-up-bold-circle-outline"></i>
												</div>
												<div class="media-body mr-3">
													<p class="tx-medium mg-b-3 tx-15">` + response.data[i].subProviderName + `</p>
													<p class="tx-11 mg-b-0 tx-gray-500">عدد الفواتير</p>
												</div>
											</div>
											<div class="text-right mr-auto my-auto">
												<h5 class="font-weight-semibold tx-16 mb-0">+ ` + response.data[i].billsCount + ` <i class="text-success tx-16 fe fe-arrow-up ml-1"></i></h5>
											</div>
										</li>
									
									
									
					`);
        }
    });
}
GetDataIndex();

function GetDataIndex() {
    $(".loading").fadeIn();
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetHome",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {
        $(".loading").fadeOut();
        $("#allbills").text(addCommas(response.data.issuedBills));
        $("#sum_allbills").text(addCommas(response.data.totalAmount));
        $("#allbills_success").text(addCommas(response.data.paidBills));
        $("#unpaidbills").text(addCommas(response.data.unPaidBills));
        $("#cancelledbills").text(addCommas(response.data.cancelledBills));
        $("#latebills").text(addCommas(response.data.lateBills));
        $("#sum_allbills_success").text(addCommas(response.data.totalPaidAmount));
        $("#sum_allbills_pending").text(addCommas(response.data.totalUnPaidAmount));
        $("#dayCount").text(addCommas(response.data.countBillsDaily));
        $("#mounthlyCount").text(addCommas(response.data.countBillsMonthly));
        $("#yearCount").text(addCommas(response.data.countBillsYearly));
        var Paids = [];
        var Monthly = [];
        var UnPaid = [];
        for (var i = 1; i <= 12; i++) {
            Monthly.push(`${i}/2021`);
            UnPaid.push(0);
            Paids.push(0);
        }
        for (var i = 0; i < 12; i++) {
            for (var item of response.data.monthlyBills) {
                if (item.key == Monthly[i]) {
                    UnPaid[i] = item.value.unPaid;
                    Paids[i] = item.value.paid;
                }
            }
        }



        var ctx = document.getElementById("chartBar2");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Monthly,
                datasets: [{
                    label: 'الفواتير المدفوعة',
                    backgroundColor: '#6259ca',
                    data: Paids
                }, {
                    label: 'الفواتير غير المدفوعة',
                    backgroundColor: '#fd6074',
                    data: UnPaid
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: "#77778e",
                        },
                        gridLines: {
                            color: 'rgba(119, 119, 142, 0.2)'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor: "#77778e",
                        },
                        gridLines: {
                            color: 'rgba(119, 119, 142, 0.2)'
                        },
                    }]
                },
                legend: {
                    labels: {
                        fontColor: "#77778e"
                    },
                },
            }
        });



    });
}



GetData();

function GetData() {

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetAllBills?providerId=" + providerId + "&start=0&end=10",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {

        GetDataBill = response;
        var TextHtml = "",
            j = 1;

        for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].status == 2) {

                var stch = `<span  class="btn btn-danger btn-sm">غير مدفوعة</span>`;

            } else if (response.data[i].status == 3) {

                var stch = `<span  class="text-success" > مدفوعة</span>`;

            } else if (response.data[i].status == 4) {

                var stch = `<span  class="text-danger"> ملغاة</span>`;

            } else {

                var stch = `<span  class="text-danger"> متأخره</span>`;

            }
            TextHtml += `<tr><td>` + (j++) + `</td>
 <td>` + response.data[i].payId + ` </td>
<td>` + (addCommas(response.data[i].amount)) + `</td>
<td>` + stch + ` </td>
                    </tr>`;
        }
        $("#Last10Bill").html(TextHtml);
    });
}

GetPaymentmethodData();

function GetPaymentmethodData() {
    $(".loading").fadeIn();
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetPaymentCount",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {
        $(".loading").fadeOut();
        console.log(response);
        var papaymentmethodidsdata = [];
        var paymentmethodcount = [];
        for (var item of response.data) {
			    console.log(item.paymentMethod);
                papaymentmethodidsdata.push(item.paymentMethod),
                paymentmethodcount.push(item.count)
        }
        var ctx = document.getElementById("crypto-donut").getContext("2d");
		
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [  "زين كاش" , 'دفع نقدي' , 'POS', 'دفع الكتروني', 'غير محدد'],
                datasets: [{
                    data: paymentmethodcount,
                    backgroundColor: ["#6c737e", "#3a9679", "#dc3545", "#ffc107", "#5090f1"],
                    borderWidth: 0,
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: true
                },
                cutoutPercentage: 73,
            },

        });

    });
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




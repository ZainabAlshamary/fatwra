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

var searchItems = "";

var providerId = sessionStorage.getItem("id");
var Token = "Bearer " + sessionStorage.getItem('token');



console.log = function () {}
GetInformation();
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
		
		  if(providerId == qiid){
            
			     $(".ReferenceNumber").removeAttr("style");
                $(".ReferenceNumber").html("Reference Number");
			     sessionStorage.setItem("notsas", "RefrenceNumber");
			

            }else if((providerId == loanid ) || (providerId == loanqi) || (providerId == loanm)){
				 $(".ReferenceNumber").removeAttr("style");
                    $(".ReferenceNumber").html("Card Number");
				
            sessionStorage.setItem("notsas", "CardNumber");
		
                
            }else if((providerId == earthip)){
				
             sessionStorage.setItem("notsas", "Ip");
		       $(".ReferenceNumber").html("IP");
            
            }else if((providerId == hrinsid)){
            
			 sessionStorage.setItem("notsas", "Id");
			  $(".ReferenceNumber").html("ID");
			
			
            }else if((providerId == itechid)){
            
                sessionStorage.setItem("notsas", "@ اسم اشتراك النت");
                	  $(".ReferenceNumber").html("@ اسم اشتراك النت");
               
               
               }else if((providerId == ebroid)){
            
                sessionStorage.setItem("notsas", "التفاصيل");
                	  $(".ReferenceNumber").html("التفاصيل");
               
               
               }else if(((providerId == shamsid) || (providerId == npadminid) || (providerId == broadid) || (providerId == IQ) || (providerId == nolimit))){
            
			 sessionStorage.setItem("notsas", "(@)reseller");
			
			   $(".ReferenceNumber").html("(@)reseller");
			
            }else if((abizahraa == providerId)){
				sessionStorage.setItem("notsas", "القضاء والناحية");
			     $(".ReferenceNumber").html("القضاء والناحية");
				  $("#Bill_Number").attr("placeholder", "رقم الفاتورة او الهاتف او الاسم او القضاء والناحية");
		    
			}else {
				 sessionStorage.setItem("notsas", "note");
                  $(".ReferenceNumber").html("note");
            }
			
			
          
      

    });
}



var flag = true;
var RangePages = 0;


function FilterBills(Range){
	var a = Range ;
	RangePages = 0;
	FilterBills1(a);

} 


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
    if(searchItems.length>0){
        searchBiller();
    }else{
    if (flag) {
        GetDataByStartEnd();
    } else {
        FilterBills1(RangePages);
    }
    }
}
var number=10;
function GetDataIndex(length) {
    var pagelength = length;
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
        $("#allbills").text(addCommas(response.data.issuedBills));
        var shownumber = pagelength + RangePages ;
        $("#pages").text(addCommas(shownumber));
    });
}
function GetDataByStartEnd() {
    if (!flag) {
        RangePages = 0;
        flag = true;
    }
    $(".loading").fadeIn();
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetBillsByType?providerId=" + providerId + "&start=" + RangePages + "&end=10&type=1",
        "method": "GET",
        "headers": {

            "Authorization": Token
        },

    }).done(function (response) {
        GetDataIndex(response.data.length);
        console.log(response);
        $(".loading").fadeOut();
        var TextHtml = "",
            j = 1;
        for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].status == 2) {

                var stch = `<span style="width: 100%;" class="btn btn-danger btn-sm">غير مدفوعة</span>`;

            } else if (response.data[i].status == 3) {

                var stch = `<span style="width: 100%;" class="btn btn-success btn-sm"> مدفوعة</span>`;

            } else if (response.data[i].status == 4) {

                var stch = `<span style="width: 100%;" class="btn btn-warning btn-sm"> ملغاة</span>`;

            } else {

                var stch = `<span style="width: 100%; background:#0000003d; color:white" class="btn btn-sm"> متأخره</span>`;

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

            }else if (response.data[i].paidBy == 00) {

                var paidby = `<span class="text">/</span>`;

            }

              if((providerId == hrinsid) || (providerId == alaynid) || (providerId == almoshriqid) || (providerId == earthip) || (providerId == qiid) || (providerId == loanid) || (providerId == loanm) || (providerId == loanqi) || (providerId == wafaaid)){

                response.data[i].note = (response.data[i].note || "/");
                var tdv = '<td class="ip"><span style="width: 100%;">' + (response.data[i].note) + '</span></td>';
            }
            else{
                response.data[i].note = (response.data[i].note || "/");
                var tdv = '<td class="ip"><span style="width: 100%;">' + (response.data[i].note) + '</span></td>';  
            }
			
            
            TextHtml += `<tr><td>` + ((j++) + RangePages) + `</td>
 
                            <td>` + response.data[i].customerName + ` </td>
                                                                <td>` + response.data[i].payId + `  </td>
                                                                <td>` + (spittime(response.data[i].createDate ))+ `</td>
                                                                <td>` + response.data[i].phoneNumber + `</td>
<td>` + (response.data[i].payDate == "0001-01-01T00:00:00" ? '<span style="width: 100%;">/</span>' : '<span style="width: 100%;">' + (spittime(response.data[i].payDate ))+ '</span>') + `</td>
<td>` + paidby + `</td> 
         <td>` + (addCommas(response.data[i].amount)) + `</td>                                                       
 <td>` + response.data[i].serviceName + `</td>
 `+ tdv + `
<td>` + response.data[i].dueDate.split('T')[0] + `</td>
 <td>` + stch + ` </td>
                                                           
                                                               
                    </tr>`
        }
        $("#BodyData").html(TextHtml);
    });
}



 
function FilterBills1(range) {
    flag = false;
    $(".loading").fadeIn();
    var from = $('.from').val();
    var to = $('.to').val();

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetBillsByTypeDateTime?from=" + from + "&to=" + to + "&providerId=" + providerId + "&start=" + range + "&end=10&type=1",
        "method": "GET",
        "headers": {


            "Authorization": Token
        },

    }).done(function (response) {
        $(".loading").fadeOut();

        var TextHtml = "",
            j = 1;
        for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].status == 2) {

                var stch = `<span style="width: 100%;" class="btn btn-danger btn-sm">غير مدفوعة</span>`;

            } else if (response.data[i].status == 3) {

                var stch = `<span style="width: 100%;" class="btn btn-success btn-sm"> مدفوعة</span>`;

            } else if (response.data[i].status == 4) {

                var stch = `<span style="width: 100%;" class="btn btn-warning btn-sm"> ملغاة</span>`;

            } else {

                var stch = `<span style="width: 100%; background:#0000003d; color:white" class="btn btn-sm"> متأخره</span>`;

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

                if((providerId == hrinsid) || (providerId == alaynid) || (providerId == almoshriqid) || (providerId == earthip) || (providerId == qiid) || (providerId == loanid) || (providerId == loanm) || (providerId == loanqi) || (providerId == wafaaid)){

                response.data[i].note = (response.data[i].note || "/");
                var tdv = '<td class="ip"><span style="width: 100%;">' + (response.data[i].note) + '</span></td>';
            }
            else{
                response.data[i].note = (response.data[i].note || "/");
                var tdv = '<td class="ip"><span style="width: 100%;">' + (response.data[i].note) + '</span></td>';  
            }


            TextHtml += `<tr><td>` + ((j++) + range) + `</td>
 
                            <td>` + response.data[i].customerName + ` </td>
                                                                <td>` + response.data[i].payId + `  </td>
                                                                <td>` + (spittime(response.data[i].createDate ))+ `</td>
                                                                <td>` + response.data[i].phoneNumber + `</td>
<td>` + (response.data[i].payDate == "0001-01-01T00:00:00" ? '<span style="width: 100%;">/</span>' : '<span style="width: 100%;">' + (spittime(response.data[i].payDate ))+ '</span>') + `</td>
<td>` + paidby + `</td> 
         <td>` + (addCommas(response.data[i].amount)) + `</td>                                                       
 <td>` + response.data[i].serviceName + `</td>
 `+ tdv +`
 <td>` + response.data[i].dueDate.split('T')[0] + `</td>
 <td>` + stch + ` </td>
                                                           
                                                               
                    </tr>`
        }
        $("#BodyData").html(TextHtml);
	
    }).fail(function (error) {
        $("#BodyData").html(``);
    
    $(".loading").fadeOut();
});
}

$("#Bill_Number").keypress(function (e) {
    if (e.which == 13) {
        searchBiller();
    }

})  
function searchBiller() {
	
	var from = $('.from').val();
    var to = $('.to').val();
	var searchItems = $("#Bill_Number").val();  
	var bill_type = $(".bill_type").val();
    // if ($("#Bill_Number").val().length>0) {
        // searchItems = $("#Bill_Number").val();
        // if ($("#Bill_Number").val().length <= 0) {
            // $("#SendError").modal("show");
            // return;
        // }
        // RangePages = 0;
    // }
    $(".loading").fadeIn();
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/SearchBillsByTypeDateTime?searchTerm=" + searchItems + "&from="+  from  +"&to="+  to  +"&type="+ bill_type +"&start=" + RangePages + "&end=10",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {
       
        $(".loading").fadeOut();

        var TextHtml = "",
            j = 1;
        for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].status == 2) {

                var stch = `<span style="width: 100%;" class="btn btn-danger btn-sm">غير مدفوعة</span>`;

            } else if (response.data[i].status == 3) {

                var stch = `<span style="width: 100%;" class="btn btn-success btn-sm"> مدفوعة</span>`;

            } else if (response.data[i].status == 4) {

                var stch = `<span style="width: 100%;" class="btn btn-warning btn-sm"> ملغاة</span>`;

            } else {

                var stch = `<span style="width: 100%; background:#0000003d; color:white" class="btn btn-sm"> متأخره</span>`;

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

            if((providerId == hrinsid) || (providerId == alaynid) || (providerId == almoshriqid) || (providerId == earthip) || (providerId == qiid) || (providerId == loanid) || (providerId == loanm) || (providerId == loanqi) || (providerId == wafaaid)){

                response.data[i].note = (response.data[i].note || "/");
                var tdv = '<td class="ip"><span style="width: 100%;">' + (response.data[i].note) + '</span></td>';
            }
            else{
                response.data[i].note = (response.data[i].note || "/");
                var tdv = '<td class="ip"><span style="width: 100%;">' + (response.data[i].note) + '</span></td>';  
            }

            TextHtml += `<tr><td>` + ((j++) + RangePages) + `</td>
 
                            <td>` + response.data[i].customerName + ` </td>
                                                                <td>` + response.data[i].payId + `  </td>
                                                                <td>`+ (spittime(response.data[i].createDate ))+`</td>
                                                                <td>` + response.data[i].phoneNumber + `</td>
<td>` + (response.data[i].payDate == "0001-01-01T00:00:00" ? '<span style="width: 100%;">/</span>' : '<span style="width: 100%;">' + (spittime(response.data[i].payDate ))+ '</span>') + `</td>
<td>` + paidby + `</td> 
         <td>` + (addCommas(response.data[i].amount)) + `</td>                                                       
 <td>` + response.data[i].serviceName + `</td>
 `+ tdv  + `
 <td>` + response.data[i].dueDate.split('T')[0] + `</td>
 <td>` + stch + ` </td>
                                                           
                                                               
                    </tr>`
        }
        $("#BodyData").html(TextHtml);

    }).fail(function (error) {
        $("#BodyData").html(`<tr class="text-center">
        <td colspan="100%">
            <p class="h5 text-danger">لا توجد بيانات</p>
        </td>
    </tr>`);
        RangePages=0;
    $(".loading").fadeOut();
});
}



function downloadcsv(){
	$(".loading").fadeIn();
    var from = $('.from').val();
    var to = $('.to').val();
	var searchItems = $(".Bill_Number").val();
	var bill_type = $(".bill_type").val();
	var notetype =  sessionStorage.getItem('notsas');
    $.ajax({
        url: DomainAPI + "Provider/SearchBillsByTypeDateTimeCsv?searchTerm=" + searchItems + "&from="+  from  +"&to="+  to  +"&type="+ bill_type +"&noteName="+ notetype,
        method: 'GET',
        headers: {
            "Authorization": Token
        },
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = `${from}_to_${to}.csv`;
            a.click();
            window.URL.revokeObjectURL(url);
			$(".loading").fadeOut();
        }
    });
};


function downloadexcel(){
	console.log($(".Bill_Number").val()) ;
	$(".loading").fadeIn();
    var from = $('.from').val();
    var to = $('.to').val();
	var searchItems = $(".Bill_Number").val();
	var bill_type = $(".bill_type").val();
	
	var notetype =  sessionStorage.getItem('notsas');
    $.ajax({
       url: DomainAPI + "Provider/SearchBillsByTypeDateTimeExcel?searchTerm=" + searchItems + "&from="+  from  +"&to="+  to  +"&type="+ bill_type +"&noteName="+ notetype,
        method: 'GET',
        headers: {
         "Authorization": Token
      
        },
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = `${from}_to_${to}.xlsx`;
            a.click();
            window.URL.revokeObjectURL(url);
			$(".loading").fadeOut();
        }
    });
};

function spittime(strdate) {
        if(strdate == null){
            var str = "0001-01-01T00:00:00";
        }else {

            var str = strdate;
        }


        var res = str.split(".")[0];
    var res1 = res.split("T")
    return res1 ;
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

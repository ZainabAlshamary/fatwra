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






GetInformation();
var ItemInformation1;
var ItemInformation;


function GetInformation() {

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "SubProvider/GetSupProviderInformation?providerId=" + providerId + "",
        "method": "GET",
        "headers": {
            "Authorization": Token
        },
    }).done(function (response) {
		     
			 ItemInformation1= response.data;
		     ItemInformation = response.data.parentId;
		     ID = response.data.parentId; 
             if(response.data.parentId == qiid ){
			sessionStorage.setItem("enableProvider", true);
            
              }else  if(response.data.parentId == materialsid ){
                sessionStorage.setItem("enableProvider", true);
                
                  }else{
				sessionStorage.setItem("enableProvider", false);
        }
				  if(ID == qiid){
            
			     $(".ReferenceNumber").removeAttr("style");
                $(".ReferenceNumber").html("Reference Number");
			     sessionStorage.setItem("notsas", "RefrenceNumber");
			

            }else if((ID == loanid ) || (ID == loanqi) || (ID == loanm)){
				 $(".ReferenceNumber").removeAttr("style");
                    $(".ReferenceNumber").html("Card Number");
				
            sessionStorage.setItem("notsas", "CardNumber");
		
                
            }else if((ID == earthip)){
				
             sessionStorage.setItem("notsas", "Ip");
		       $(".ReferenceNumber").html("IP");
            
            }else if((ID == hrinsid)){
            
			 sessionStorage.setItem("notsas", "Id");
			  $(".ReferenceNumber").html("ID");
			
			
            }else if((ID == itechid)){
            
                sessionStorage.setItem("notsas", "@ ?????? ???????????? ????????");
                	  $(".ReferenceNumber").html("@ ?????? ???????????? ????????");
               
               
               }else if((ID == ebroid)){
            
                sessionStorage.setItem("notsas", "????????????????");
                	  $(".ReferenceNumber").html("????????????????");
               
               
               }else if(((ID == shamsid) || (ID == npadminid) || (ID == broadid) || (ID == IQ) || (ID == nolimit))){
            
			 sessionStorage.setItem("notsas", "(@)reseller");
			
			   $(".ReferenceNumber").html("(@)reseller");
			
            }else if((ID == abizahraa)){
            
                sessionStorage.setItem("notsas", "???????????? ????????????????");
               
                  $(".ReferenceNumber").html("???????????? ????????????????");
               
               }else {
				 sessionStorage.setItem("notsas", "note");
                  $(".ReferenceNumber").html("note");
            }
			
			
        $(".nav-user").html(`<img src="` + response.data.providerInformation.imagePath + `" class="avatar-rounded"> ` + response.data.providerInformation.name + ``);

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
    }if(searchItems.length>0){
        searchBiller();
    }else{
    if (flag) {
        GetDataByStartEnd();
    } else {
        FilterBills1(RangePages);
    }
    }
}

function GetDataByStartEnd() {
	
var isEnabled = sessionStorage.getItem('enableProvider');
    if (!flag) {
        RangePages = 0;
        flag = true;
    }
    $(".loading").fadeIn();
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "SubProvider/GetBillsByType?start=" + RangePages + "&end=10&type=1&enableProvider=" + isEnabled ,
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

                var stch = `<span style="width: 100%;" class="btn btn-danger btn-sm">?????? ????????????</span>`;

            } else if (response.data[i].status == 3) {

                var stch = `<span style="width: 100%;" class="btn btn-success btn-sm"> ????????????</span>`;

            } else if (response.data[i].status == 4) {

                var stch = `<span style="width: 100%;" class="btn btn-warning btn-sm"> ??????????</span>`;

            } else {

                var stch = `<span style="width: 100%; background:#0000003d; color:white" class="btn btn-sm"> ????????????</span>`;

            }
            if (response.data[i].paidBy == 1) {

                var paidby = `<span class="text-primary">????????????</span>`;

            } else if (response.data[i].paidBy == 2) {

                var paidby = `<span class="text-warning">POS</span>`;

            } else if (response.data[i].paidBy == 3) {

                var paidby = `<span class="text-danger">?????? ????????</span>`;

            } else if (response.data[i].paidBy == 4) {

                var paidby = `<span class="text-info">?????? ??????</span>`;

            } else if (response.data[i].paidBy == 5) {

                var paidby = `<span class="text-warning">?????????? ????</span>`;

            } else if (response.data[i].paidBy == 6) {

                var paidby = `<span class="text-warning">?????? ????????????????</span>`;

            } else if (response.data[i].paidBy == 00) {

                var paidby = `<span class="text">/</span>`;

            }
			
				 if((ItemInformation == hrinsid) || (ItemInformation == alaynid) || (ItemInformation == almoshriqid) || (ItemInformation == earthip) || (ItemInformation == qiid) || (ItemInformation == loanid) || (ItemInformation == loanm) || (ItemInformation == loanqi) || (ItemInformation == wafaaid)){

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
                                                                <td>` + (spittime(response.data[i].createDate)) + `</td>
                                                                <td>` + response.data[i].phoneNumber + `</td>
<td>` + (response.data[i].payDate == "0001-01-01T00:00:00" ? '<span style="width: 100%;">/</span>' : '<span style="width: 100%;">' + (spittime(response.data[i].payDate)) + '</span>') + `</td>
<td>` + paidby + `</td> 
         <td>` + (addCommas(response.data[i].amount)) + `</td>                                                       
 <td>` + response.data[i].serviceName + `</td>
 `+ tdv + `<td>` + response.data[i].dueDate.split('T')[0] + `</td>
 <td>` + stch + ` </td>
                                                           
                                                               
                    </tr>`
        }

        $("#BodyData").html(TextHtml);
    }).fail(function (error) {
        $("#BodyData").html(``);
    
    $(".loading").fadeOut();
});
}

$(function () {
    $('.datetime').datetimepicker({
        format: 'YYYY/MM/DD',
        date: new Date("2018/01/01"),

    });
    $('.datetime2').datetimepicker({
        useCurrent: false,
        format: 'YYYY/MM/DD',
        date: new Date(),

    });
    $(".datetime").on("dp.change", function (e) {
        $('.datetime2').data("DateTimePicker").minDate(e.date);
    });
    $(".datetime2").on("dp.change", function (e) {
        $('.datetime').data("DateTimePicker").maxDate(e.date);
    });

});


function FilterBills1(rang) {
	
var isEnabled = sessionStorage.getItem('enableProvider');
  //  if (flag) {
  //      RangePages = 0;
  //  }
    flag = false;
    $(".loading").fadeIn();
    var from = $('.from').val();
    var to = $('.to').val();

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "SubProvider/GetBillsByTypeDateTime?from=" + from + "&to=" + to + "&start=" + rang + "&end=10&type=1&enableProvider=" + isEnabled ,
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

                var stch = `<span style="width: 100%;" class="btn btn-danger btn-sm">?????? ????????????</span>`;

            } else if (response.data[i].status == 3) {

                var stch = `<span style="width: 100%;" class="btn btn-success btn-sm"> ????????????</span>`;

            } else if (response.data[i].status == 4) {

                var stch = `<span style="width: 100%;" class="btn btn-warning btn-sm"> ??????????</span>`;

            } else {

                var stch = `<span style="width: 100%; background:#0000003d; color:white" class="btn btn-sm"> ????????????</span>`;

            }
            if (response.data[i].paidBy == 1) {

                var paidby = `<span class="text-primary">????????????</span>`;

            } else if (response.data[i].paidBy == 2) {

                var paidby = `<span class="text-warning">POS</span>`;

            } else if (response.data[i].paidBy == 3) {

                var paidby = `<span class="text-danger">?????? ????????</span>`;

            } else if (response.data[i].paidBy == 4) {

                var paidby = `<span class="text-info">?????? ??????</span>`;

            } else if (response.data[i].paidBy == 5) {

                var paidby = `<span class="text-warning">?????????? ????</span>`;

            } else if (response.data[i].paidBy == 6) {

                var paidby = `<span class="text-warning">?????? ????????????????</span>`;

            } else if (response.data[i].paidBy == 00) {

                var paidby = `<span class="text">/</span>`;

            }
			
			 	
			 if((ItemInformation == hrinsid) || (ItemInformation == alaynid) || (ItemInformation == almoshriqid) || (ItemInformation == earthip) || (ItemInformation == qiid) || (ItemInformation == loanid) || (ItemInformation == loanm) || (ItemInformation == loanqi) || (ItemInformation == wafaaid)){

                response.data[i].note = (response.data[i].note || "/");
                var tdv = '<td class="ip"><span style="width: 100%;">' + (response.data[i].note) + '</span></td>';
            }
            else{
                response.data[i].note = (response.data[i].note || "/");
                var tdv = '<td class="ip"><span style="width: 100%;">' + (response.data[i].note) + '</span></td>';  
            }
			
			
            TextHtml += `<tr><td>` + ((j++) + rang) + `</td>
 
                            <td>` + response.data[i].customerName + ` </td>
							
							
                                                                <td>` + response.data[i].payId + `  </td>
																
                                                                <td>` + (spittime (response.data[i].createDate)) + `</td>
																
																
                                                                <td>` + response.data[i].phoneNumber + `</td>
																
																
<td>` + (response.data[i].payDate == "0001-01-01T00:00:00" ? '<span style="width: 100%;">/</span>' : '<span style="width: 100%;">' + (spittime (response.data[i].payDate)) + '</span>') + `</td>


<td>` + paidby + `</td> 


<td>` + (addCommas(response.data[i].amount)) + `</td>    
		 
 <td>` + response.data[i].serviceName + `</td>
 
`+ tdv + `

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
    if ($("#Bill_Number").val().length>0) {
        searchItems = $("#Bill_Number").val();
        if ($("#Bill_Number").val().length <= 0) {
            $("#SendError").modal("show");
            return;
        }
        RangePages = 0;
    }
    $(".loading").fadeIn();
    if((ID == qiid) || (ID == materialsid)){

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": DomainAPI + "SubProvider/SearchProviderBill?searchTerm=" + searchItems + "&start=" + RangePages + "&end=10",
            "method": "GET",
            "headers": {
                "Authorization": Token
            },
        }).done(function (response) {
            $("#Bill_Number").val('');
        $(".loading").fadeOut();

        var TextHtml = "",
            j = 1;
    
                for (var i = 0; i < response.data.length; i++) {
                    if (response.data[i].status == 2) {
        
                        var stch = `<span style="width: 100%;" class="btn btn-danger btn-sm">?????? ????????????</span>`;
        
                    } else if (response.data[i].status == 3) {
        
                        var stch = `<span style="width: 100%;" class="btn btn-success btn-sm"> ????????????</span>`;
        
                    } else if (response.data[i].status == 4) {
        
                        var stch = `<span style="width: 100%;" class="btn btn-warning btn-sm"> ??????????</span>`;
        
                    } else {
        
                        var stch = `<span style="width: 100%; background:#0000003d; color:white" class="btn btn-sm"> ????????????</span>`;
        
                    }
                    if (response.data[i].paidBy == 1) {
        
                        var paidby = `<span class="text-primary">????????????</span>`;
        
                    } else if (response.data[i].paidBy == 2) {
        
                        var paidby = `<span class="text-warning">POS</span>`;
        
                    } else if (response.data[i].paidBy == 3) {
        
                        var paidby = `<span class="text-danger">?????? ????????</span>`;
        
                    } else if (response.data[i].paidBy == 4) {
        
                        var paidby = `<span class="text-info">?????? ??????</span>`;
        
                    } else if (response.data[i].paidBy == 5) {
        
                        var paidby = `<span class="text-warning">?????????? ????</span>`;
        
                    }  else if (response.data[i].paidBy == 6) {
        
                        var paidby = `<span class="text-warning">?????? ????????????????</span>`;
        
                    }else if (response.data[i].paidBy == 00) {
        
                        var paidby = `<span class="text">/</span>`;
        
                    }
                    if((ItemInformation == hrinsid) || (ItemInformation == alaynid) || (ItemInformation == almoshriqid) || (ItemInformation == earthip) || (ItemInformation == qiid) || (ItemInformation == loanid) || (ItemInformation == loanm) || (ItemInformation == loanqi) || (ItemInformation == wafaaid)){

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
                                    <td>` + (spittime (response.data[i].createDate ) )+ `</td>
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
            checkProvider();
            $(".loading").fadeOut();
            
        }).fail(function (error) {
            $("#BodyData").html(`<tr class="text-center">
            <td colspan="100%">
                <p class="h5 text-danger">???? ???????? ????????????</p>
            </td>
        </tr>`);
            RangePages=0;
        $(".loading").fadeOut();
    });
        }else{ $.ajax({
            "async": true,
            "crossDomain": true,
            "url": DomainAPI + "SubProvider/SearchBill?searchTerm=" + searchItems + "&start=" + RangePages + "&end=10",
            "method": "GET",
            "headers": {
                "Authorization": Token
            },
        }).done(function (response) {
            $("#Bill_Number").val('');
            $(".loading").fadeOut();
    
            var TextHtml = "",
                j = 1;
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].status == 2) {
    
                    var stch = `<span style="width: 100%;" class="btn btn-danger btn-sm">?????? ????????????</span>`;
    
                } else if (response.data[i].status == 3) {
    
                    var stch = `<span style="width: 100%;" class="btn btn-success btn-sm"> ????????????</span>`;
    
                } else if (response.data[i].status == 4) {
    
                    var stch = `<span style="width: 100%;" class="btn btn-warning btn-sm"> ??????????</span>`;
    
                } else {
    
                    var stch = `<span style="width: 100%; background:#0000003d; color:white" class="btn btn-sm"> ????????????</span>`;
    
                }
                if (response.data[i].paidBy == 1) {
    
                    var paidby = `<span class="text-primary">????????????</span>`;
    
                } else if (response.data[i].paidBy == 2) {
    
                    var paidby = `<span class="text-warning">POS</span>`;
    
                } else if (response.data[i].paidBy == 3) {
    
                    var paidby = `<span class="text-danger">?????? ????????</span>`;
    
                } else if (response.data[i].paidBy == 4) {
    
                    var paidby = `<span class="text-info">?????? ??????</span>`;
    
                } else if (response.data[i].paidBy == 5) {
    
                    var paidby = `<span class="text-warning">?????????? ????</span>`;
    
                }  else if (response.data[i].paidBy == 6) {
    
                    var paidby = `<span class="text-warning">?????? ????????????????</span>`;
    
                }else if (response.data[i].paidBy == 00) {
    
                    var paidby = `<span class="text">/</span>`;
    
                }
                TextHtml += `<tr><td>` + ((j++) + RangePages) + `</td>
     
                                <td>` + response.data[i].customerName + ` </td>
                                <td>` + response.data[i].payId + `  </td>
                                <td>` + (spittime (response.data[i].createDate ) )+ `</td>
                                <td>` + response.data[i].phoneNumber + `</td>
                                <td>` + (response.data[i].payDate == "0001-01-01T00:00:00" ? '<span style="width: 100%;">/</span>' : '<span style="width: 100%;">' + (spittime(response.data[i].payDate ))+ '</span>') + `</td>
                                <td>` + paidby + `</td> 
                                <td>` + (addCommas(response.data[i].amount)) + `</td>                                                       
                                <td>` + response.data[i].serviceName + `</td>
      
                                `+(ItemInformation != qiid ? '' : '<td class="ReferenceNumber"><span style="width: 100%;">' + (response.data[i].note) + '</span></td>') + `<td>` + response.data[i].dueDate.split('T')[0] + `</td>
                                <td>` + stch + ` </td>
                                                                   
                        </tr>`
            }
            $("#BodyData").html(TextHtml);
        }).fail(function (error) {
            $("#BodyData").html(`<tr class="text-center">
            <td colspan="100%">
                <p class="h5 text-danger">???? ???????? ????????????</p>
            </td>
        </tr>`);
        
        $(".loading").fadeOut();
    });}
   
}


 function downloadcsv() {
	var isEnabled = sessionStorage.getItem('enableProvider');
	$(".loading").fadeIn();
    var from = $('.from').val();
    var to = $('.to').val();
	var notetype =  sessionStorage.getItem('notsas');
    $.ajax({
        url: DomainAPI + "SubProvider/GetCsvBillsFile?providerId=" + providerId + "&from=" + from + "&to=" + to + "&type=1&enableProvider="+ isEnabled +"&noteName="+ notetype,
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


function downloadexcel() {
	var isEnabled = sessionStorage.getItem('enableProvider');
	$(".loading").fadeIn();
    var from = $('.from').val();
    var to = $('.to').val();
	var notetype =  sessionStorage.getItem('notsas');
    $.ajax({
       url: DomainAPI + "SubProvider/GetExcelBillsFile?providerId=" + providerId + "&from=" + from + "&to=" + to + "&type=1&enableProvider="+ isEnabled +"&noteName="+ notetype,
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
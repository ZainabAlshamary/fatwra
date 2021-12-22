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



console.log = function () {}









function GetFileBillsByDateTime(Range){
	var a = Range ;
	RangePages = 0;
	GetFileBillsByDateTime1(a);

} 
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
   
        GetFileBillsByDateTime1(RangePages);
  
   
}





function GetFileBillsByDateTime1(range) {

    $(".loading").fadeIn();
	if (($('.from').val()  == undefined || $('.from').val()  == "" ) && ($('.to').val() == undefined   || $('.to').val()  == "") )
		
		{
	
	    
		var from = "2018/01/01";
		var d = new Date();
          var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
        var to = strDate; 
	    
	
		}else {
			
		  var from = $('.from').val();
          var to = $('.to').val();
	
		}
  
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetFilesLogDate?from=" + from + "&to=" + to + "&start=" + range + "&end=10",
        "method": "GET",
        "headers": {

            "Authorization": Token
        },

    }).done(function (response) {
        console.log(response);
        $(".loading").fadeOut();
        var TextHtml = "",
            j = 1;
        for (var i = 0; i < response.data.length; i++) {
            TextHtml += `<tr><td>` + ((j++) + range) + `</td>
 
                            <td>` + response.data[i].serviceName + ` </td>
                                                                <td>` + (addCommas(response.data[i].totalAmount)) + `</td>
                                                                <td>` + (spittime(response.data[i].createDate )) + `</td>
                                                               
 <td>` + response.data[i].totalCount + `</td>
                           <td>` + (response.data[i].fileType == "1" ? `<span style="width: 100%;" class="text-danger">CSV</span>` : `<span style="width: 100%;" class="text-success">EXCEL</span>`) + ` </td>    
 <td>` + (response.data[i].isUploaded == false ? `<a  style="text-transform: lowercase;" href="${API}${response.data[i].filePath}" class="btn btn-danger">download</a>` : `<a  style="text-transform: lowercase;" href="${response.data[i].filePath}" class="btn btn-danger">download</a>`) + ` </td>

                    <
                    /tr>`
        }
        $("#BodyData").html(TextHtml);
    }).fail(function (error) {
        $("#BodyData").html(``);
    
    $(".loading").fadeOut();
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


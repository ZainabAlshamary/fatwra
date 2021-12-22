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

function parseJwt(token) {
    try {

        const base64HeaderUrl = token.split('.')[0];
        const base64Header = base64HeaderUrl.replace('-', '+').replace('_', '/');
        const headerData = JSON.parse(window.atob(base64Header));

        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const dataJWT = JSON.parse(window.atob(base64));
        dataJWT.header = headerData;



        return dataJWT;
    } catch (err) {
        return false;
    }
}

const jwtDecoded = parseJwt(sessionStorage.getItem('token'));
if (jwtDecoded) {

    var idtoken = jwtDecoded.sub;
    //console.log(idtoken);
}
getData();


$('.csvfile').change(function () {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload')[0].files[0].name;
    $(this).prev('label').text(file);
});


function uploadcsv() {

    var file_data = $(".csvfile").val();
    var xType = $("#CSVType").val();
    var serviceId = $("#serviceId").val();

    console.log(xType);
    var aux = file_data.split('.');
    var extension = aux[aux.length - 1].toUpperCase();

    if (extension === 'CSV') {

        var file_data = $('.csvfile').prop('files')[0];
        var other_data = $('form').serialize();
        var form_data = new FormData();
        form_data.append('file', file_data);
        $.ajax({
            url: DomainAPI + 'Provider/UploadBillsCSV?' + other_data, // 
            headers: {

                "Authorization": Token
            },
            dataType: 'text', // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',

        }).done(function (response) {
	
	if(response.message == "Please upload valid file!"){
		
				   swal("حدث خطا في الأرسال");
			}
    $(".loading").fadeOut();
            if (response) {
                var bills = JSON.parse(response)
                
               	if (bills.data.fileError.count == 0){
					
					Swal.fire({
                    title: 'تم الرفع',
                    type: 'success',
                    html:
                      'عدد الفواتير المرفوعة  ' + bills.data.totalValidCount +  "<br>" +
                      ' ملبغ الفواتير  ' + bills.data.totalValidAmount + "<br>" + 
                      ' عدد الفواتير الخطأ ' + bills.data.fileError.count + '<br>' ,

                      onBeforeOpen: () => {
                        $( "#download" ).click(function() {
                            window.location =  bills.data.fileError.url  ;
                          });
                      },
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                      '<i class="fa fa-thumbs-up"></i> تم!',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                   
                  })
					
				}else{
					
					        Swal.fire({
                    title: 'تم الرفع',
                    type: 'success',
                    html:
                      'عدد الفواتير المرفوعة  ' + bills.data.totalValidCount +  "<br>" +
                      ' ملبغ الفواتير  ' + bills.data.totalValidAmount + "<br>" + 
                      ' عدد الفواتير الخطأ ' + bills.data.fileError.count + '<br>' +
                      '<button id="download" class="btn btn-danger">' +
                      'تحميل' 
                      ,

                      onBeforeOpen: () => {
                        $( "#download" ).click(function() {
                            window.location =  API + bills.data.fileError.url  ;
                          });
                      
                  
                       
                      },

                      
                    showCloseButton: true,
                   
                    focusConfirm: false,
                    confirmButtonText:
                      '<i class="fa fa-thumbs-up"></i> تم!',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                   
                  })
					
					
				}
                $("#clear-data").click();
            } else {
                swal("حدث خطا في الأرسال");
            }
        });

    } else if (extension === 'XLSX') {


        var file_data = $('.csvfile').prop('files')[0];
        var other_data = $('form').serialize();
        var form_data = new FormData();
        form_data.append('file', file_data);
        $.ajax({
            url: DomainAPI + 'Provider/UploadBillsExcel?serviceId=' + serviceId + '&excelType=' + xType + '', // 
            headers: {

                "Authorization": Token
            },
            dataType: 'text', // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',

        }).done(function (response) {
	
					if(response.message == "Please upload valid file!"){
				
				   swal("حدث خطا في الأرسال");
			}
$(".loading").fadeOut();
            if (response) {
                var bills = JSON.parse(response);
				
				
                console.log(bills.data);
				
				if (bills.data.fileError.count == 0){
					
					        Swal.fire({
                    title: 'تم الرفع',
                    type: 'success',
                    html:
                      'عدد الفواتير المرفوعة  ' + bills.data.totalValidCount +  "<br>" +
                      ' مبلغ الفواتير  ' + bills.data.totalValidAmount + "<br>" +
                      ' عدد الفواتير الخطأ ' + bills.data.fileError.count + '<br>' 
                      
                      ,

                      onBeforeOpen: () => {
                        $( "#download" ).click(function() {
                            window.location =  bills.data.fileError.url  ;
                          });
                      },

                      
                    showCloseButton: true,
                   
                    focusConfirm: false,
                    confirmButtonText:
                      '<i class="fa fa-thumbs-up"></i> تم!',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                   
                  })
					
				}else{
					
					        Swal.fire({
                    title: 'تم الرفع',
                    type: 'success',
                    html:
                      'عدد الفواتير المرفوعة  ' + bills.data.totalValidCount +  "<br>" +
                      ' ملبغ الفواتير  ' + bills.data.totalValidAmount + "<br>" + 
                      ' عدد الفواتير الخطأ ' + bills.data.fileError.count + '<br>' +
                      '<button id="download" class="btn btn-danger">' +
                      'تحميل' 
                      ,

                      onBeforeOpen: () => {
                        $( "#download" ).click(function() {
                            window.location =  API + bills.data.fileError.url  ;
                          });
                      },
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                      '<i class="fa fa-thumbs-up"></i> تم!',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                   
                  })
					
				}
        
                $("#clear-data").click();
            } else {
                swal("حدث خطا في الأرسال");
            }
        }).fail(function (xhr, status, error) {
		  var err = eval("(" + xhr.responseText + ")");
		  console.log(err.message);
		  
		  if ((err.message) == 'Duplicate PayId'){
		
			  swal("لم يتم اضافة الفواتير","رقم فاتورة مكرر"); 
			  
		  } else {
			  
			    swal("يوجد خطأ");
		  }	
        
      });

    } else {
        $("#SendError2").modal("show");

    }
}


function getData() {
    $(".loading").fadeIn();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": DomainAPI + "Provider/GetServices?providerId=" + idtoken + "&start=0&end=1000",
        "method": "GET",
        "headers": {
            "Authorization": Token
        }
    }
    $.ajax(settings).done(function (response) {
        $(".loading").fadeOut();
        for (var i = 0; i < response.data.length; i++) {
            $('#serviceId').append(`<option value="` + response.data[i].id + `">` + response.data[i].name + `</option>`);
        }
    });
}
GetInformation();
var notsas = "";
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
            
			
			sessionStorage.setItem("notsas", "RefrenceNumber");
			

            }else if((providerId == loanid ) || (providerId == loanqi) || (providerId == loanm)){
				
				
            sessionStorage.setItem("notsas", "CardNumber");
		
                
            }else if((providerId == earthip)){
				
             sessionStorage.setItem("notsas", "Ip");
		 

            }else if((providerId == hrinsid)){
            
			 sessionStorage.setItem("notsas", "Id");
			
			
			
            }else if((providerId == itechid)){
            
                sessionStorage.setItem("notsas", "@ اسم اشتراك النت");
                $(".ReferenceNumber").attr("style", 'display: none;');
               
               
               }else if((providerId == ebroid)){
            
                sessionStorage.setItem("notsas", "التفاصيل");
                $(".ReferenceNumber").attr("style", 'display: none;');
               
               
               }else if((providerId == shamsid) || (providerId == npadminid) || (providerId == broadid) || (providerId == IQ) || (providerId == nolimit)){
            
			 sessionStorage.setItem("notsas", "(@)reseller");
			
			 $(".ReferenceNumber").attr("style", 'display: none;');
			
            }else if((providerId == abizahraa)){
            
			 sessionStorage.setItem("notsas", "القضاء والناحية");
			
			 $(".ReferenceNumber").attr("style", 'display: none;');
			
            }else {
				 sessionStorage.setItem("notsas", "note");
       
            }
		
    });
}





function APIilex(filetype) {
	$(".loading").fadeIn();
    var filetype =  filetype
    var notetype =  sessionStorage.getItem('notsas');
    $.ajax({
        url: DomainAPI + "Provider/GetExcelTemplateFile?excelFileType=" + filetype + "&noteName=" + notetype ,
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
            a.download = 'Tempelet.xlsx';
            a.click();
            window.URL.revokeObjectURL(url);
			$(".loading").fadeOut();
        }
    });
}

function APIilecsv(filetype) {
	$(".loading").fadeIn();
    var filetype =  filetype
    var notetype =  sessionStorage.getItem('notsas');
    $.ajax({
        url: DomainAPI + "Provider/GetCsvTemplateFile?csvFileType=" + filetype + "&noteName=" + notetype ,
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
            a.download = 'Tempelet.csv';
            a.click();
            window.URL.revokeObjectURL(url);
			$(".loading").fadeOut();
        }
    });
}


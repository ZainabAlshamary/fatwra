
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
        if (strdate == null) {
            var str = "0001-01-01T00:00:00";
        } else {
    
            var str = strdate;
        }
    
    
        var res = str.split(".")[0];
        var res1 = res.split("T")
        return res1;
    }
      var urL = window.location.href.split('/')[4];
	 sendid();
 function sendid(){
    $.ajax({
        "async": true,
        "crossDomain": true,
		"url": DomainAPI + "Home/Fib?code="+ urL +"",
        "method": "GET",
    }).done(function (response) {
        if(response.data.note == ""){
            var notee = `/`
        } else {
        var notee = `<div>`+ response.data.note +`</div>`
    }
    if(response.data.status == 2){
        var status1 = `غير مدفوعة`
    }else if(response.data.status == 3){
        var status1 = `مدفوعة`
    }else if(response.data.status == 4){
        var status1 = `ملغاة`
    }else if(response.data.status == 5){
        var status1 = `متأخرة`
    }
     $("#providerName").text(response.data.providerName);
     $("#serviceName").text(response.data.serviceName);
     $("#amount").text(addCommas(response.data.amount));
     $("#note").text(notee);
     $("#createDate").text(spittime(response.data.createDate));
     $("#dueDate").text(response.data.dueDate.split('T')[0] || "");
     $("#customerName").text(addCommas(response.data.customerName));
     $("#phoneNumber").text(response.data.phoneNumber);
     $("#status").text(status1);
     var qrcode = new QRCode("qrcode", {
        text: urL,
        width: 270,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctlevel: QRCode.correctlevel
    });
    
    })
 .fail(function(response) {

  
  });
 }

 function ondonwload(){
   
    var youtubeimgsrc  = document.querySelectorAll('#qrcode img')[0].src
    var a = document.createElement("a"); //Create <a>
    a.href = youtubeimgsrc; //Image Base64 Goes here
    a.download = "Image.png"; //File name Here
    a.click(); //Downloaded file
 }
 function copyRequstId() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = urL;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    $('#code').css('display','inline');
    $("#code").text(urL);
  }
  




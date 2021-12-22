// QRCODE reader Copyright 2011 Lazar Laszlo
// http://www.webqr.com


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
	 
var gCtx = null;
var gCanvas = null;
var c=0;
var stype=0;
var gUM=false;
var webkit=false;
var moz=false;
var v=null;

var imghtml='<div id="qrfile"><canvas id="out-canvas" width="320" height="240"></canvas>'+
    '<div id="imghelp">drag and drop a QRCode here'+
	'<br>or select a file'+
	'<input type="file" onchange="handleFiles(this.files)"/>'+
	'</div>'+
'</div>';

var vidhtml = '<video id="v" autoplay></video>';

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;
  if(files.length>0)
  {
	handleFiles(files);
  }
  else
  if(dt.getData('URL'))
  {
	qrcode.decode(dt.getData('URL'));
  }
}

function handleFiles(f)
{
	var o=[];
	
	for(var i =0;i<f.length;i++)
	{
        var reader = new FileReader();
        reader.onload = (function(theFile) {
        return function(e) {
            gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);

			qrcode.decode(e.target.result);
        };
        })(f[i]);
        reader.readAsDataURL(f[i]);	
    }
}

function initCanvas(w,h)
{
    gCanvas = document.getElementById("qr-canvas");
    gCanvas.style.width = w + "px";
    gCanvas.style.height = h + "px";
    gCanvas.width = w;
    gCanvas.height = h;
    gCtx = gCanvas.getContext("2d");
    gCtx.clearRect(0, 0, w, h);
}


function captureToCanvas() {
    if(stype!=1)
        return;
    if(gUM)
    {
        try{
            gCtx.drawImage(v,0,0);
            try{
                qrcode.decode();
            }
            catch(e){       
                console.log(e);
			
                setTimeout(captureToCanvas, 500);
            };
        }
        catch(e){       
                console.log(e);
                setTimeout(captureToCanvas, 500);
        };
    }
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function read(a)
{
	var idbill = a ;
	$("#loader-wrapper").css("display","inherit")
    $.ajax({
        "async": true,
        "crossDomain": true,
		"url": DomainAPI + "Home/SearchBill?searchTerm=" + idbill,
        "method": "GET",
    }).done(function (response) {
     $("#loader-wrapper").css("display","none");
	
	    // if(response.message == "Error in disabled information"){
	      // $("#infouser").hide();	 
		  // $("#errorsearch").show();	 
          // $('#Idinfo').val(''); 	 
          // $('.Idinfo1').val(''); 	 
          // $('#fullName').val(''); 
          // $('#bornDate').val(''); 
          // $('#gander').val('');  
          // $('#motherName').val(''); 	 
          // $('#assistantName').val(''); 
          // $('#assistantMotherName').val(''); 	 
          // $('#gov').val(''); 		 
          // $('#assistantNearingId').val(''); 		 
		// }
		
	    // setTimeout(function() {
        // $("#errorsearch").hide();
        // }, 2000);
	
		
	  if (response.data.status == 2) {

                    var stch = "غير مدفوعة";
					$(".paidstuats").css("background-color", "#dc3545");
					$(".paidstuats").css("color", "#fff");

                } else if (response.data.status == 3) {

                    var stch = "مدفوعة";
					$(".paidstuats").css("background-color", "#28a745");
						$(".paidstuats").css("color", "#fff");

                } else if (response.data.status == 4) {

                    var stch = "ملغاة";

                } else {

                    var stch = "متاخره";

                }
				
				if (response.data.payDate == "0001-01-01T00:00:00") {
					
					var pay = "/" ;
					$('#serach').prop('disabled', false);

				}else {
					$('#serach').prop('disabled', true);

					var pay = (response.data.dueDate.split('T')[0] || "");
				}
  
        $("#status").val(stch);
        $("#providerName").val(response.data.providerName);
        $("#createDate").val(response.data.createDate.split('T')[0] || "");
        $("#pay").val(pay);
        $("#serviceName").val(response.data.serviceName);
        $("#customerName").val(response.data.customerName);
       $("#amount").val(addCommas(response.data.amount));
		
        
			billid = $(".Bill_Number").val() ;

		

    })
 .fail(function(response) {
	 
	 	 	 swal({
            title: "Bad!",
            text: "No Bill Found !!",
            icon: "error",
            type: "error"
        }).then(function() {
            window.location = "./index.html";
        });
		
	 if(response.message == "No Bills!"){
		     	 $("#loader-wrapper").fadeOut();	 

     $("#loader-wrapper").css("display","none");
		 }
		
	  // $("#errorsearch").show();
	  
	 $("#loader-wrapper").fadeOut();
  
  });
  $(".advance-search").css('display', 'inline-block');
	
    // var html="<br>";
    // if(a.indexOf("http://") === 0 || a.indexOf("https://") === 0)
        // html+="<a target='_blank' href='"+a+"'>"+a+"</a><br>";
    // html+="<b>"+htmlEntities(a)+"</b><br><br>";
    // document.getElementById("result").innerHTML=html;
	        $("#qrcode").val(a);
			 
	


}	

function isCanvasSupported(){
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}
function success(stream) 
{

    v.srcObject = stream;
    v.play();

    gUM=true;
    setTimeout(captureToCanvas, 500);
}
		
function error(error)
{
    gUM=false;
    return;
}

function load()
{

		initCanvas(800, 600);
		qrcode.callback = read;
		document.getElementById("mainbody").style.display="inline";
        setwebcam();
	
}

function setwebcam()
{
	
	var options = true;
	if(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
	{
		try{
			navigator.mediaDevices.enumerateDevices()
			.then(function(devices) {
			  devices.forEach(function(device) {
				if (device.kind === 'videoinput') {
				  if(device.label.toLowerCase().search("back") >-1)
					options={'deviceId': {'exact':device.deviceId}, 'facingMode':'environment'} ;
				}
				console.log(device.kind + ": " + device.label +" id = " + device.deviceId);
			  });
			  setwebcam2(options);
			});
		}
		catch(e)
		{
			console.log(e);
			
	alert("aaaa");
		}
	}
	else{
		console.log("no navigator.mediaDevices.enumerateDevices" );
		setwebcam2(options);
	}
	
}

function setwebcam2(options)
{
	
	console.log(options);
	// document.getElementById("result").innerHTML="- scanning -";
    if(stype==1)
    {
        setTimeout(captureToCanvas, 500);    
        return;
    }
    var n=navigator;
    document.getElementById("outdiv").innerHTML = vidhtml;
    v=document.getElementById("v");


    if(n.mediaDevices.getUserMedia)
    {
        n.mediaDevices.getUserMedia({video: options, audio: false}).
            then(function(stream){
                success(stream);
            }).catch(function(error){
                error(error)
            });
    }
    else
    if(n.getUserMedia)
	{
		webkit=true;
        n.getUserMedia({video: options, audio: false}, success, error);
	}
    else
    if(n.webkitGetUserMedia)
    {
        webkit=true;
        n.webkitGetUserMedia({video:options, audio: false}, success, error);
    }


    stype=1;
    setTimeout(captureToCanvas, 500);
}

function setimg()
{
	// document.getElementById("result").innerHTML="";
    if(stype==2)
        return;
    document.getElementById("outdiv").innerHTML = imghtml;
    //document.getElementById("qrimg").src="qrimg.png";
    //document.getElementById("webcamimg").src="webcam2.png";

    var qrfile = document.getElementById("qrfile");
    qrfile.addEventListener("dragenter", dragenter, false);  
    qrfile.addEventListener("dragover", dragover, false);  
    qrfile.addEventListener("drop", drop, false);
    stype=2;
}
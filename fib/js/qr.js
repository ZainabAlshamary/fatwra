$(document).ready(function(){
   $('[data-toggle="tooltip"]').tooltip();   
 });

 var urL = window.location.href.split('/')[4];
sendid();
function sendid(){
$.ajax({
   "async": true,
   "crossDomain": true,
   "url": DomainAPI + "Home/Fib?code="+ urL +"",
   "method": "GET",
}).done(function (response) {
var qrcode = new QRCode("qrcode", {
   text: urL,
   width: 290,
   height: 180,
   colorDark: '#0C090A',
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






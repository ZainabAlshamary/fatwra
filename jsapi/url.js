var DomainAPI = "https://api-uat.fatwra.net/v1/api/";
var API= "https://api-uat.fatwra.net";
var qiid = "810b4cd9-1b70-4abf-8957-67606ed34829" ;
var materialsid = "79763d3d-764a-4174-81ee-a88372a2ef7e";
var loanid ="8d6c666d-132d-493a-8448-4aace7e72b04";
var loanm = "9bc1192a-d811-4cab-b122-430a86c663d9";
var loanqi = "17c4150a-028a-4e1e-b3eb-86bececf827e";
var hrinsid = "697257be-9834-438f-9461-39204e055741";
var alaynid = "c5deb1e0-57cb-4765-b853-48202fdfd485";
var almoshriqid = "ea0a61c4-babb-492c-baf0-1e28ed72f349";
var earthip = "4375b009-85ed-4db1-823c-e1c13e9c64c0";
var shamsid = "6bf07d88-d6b5-4b4a-b24c-fca0dfc8bb02";
var wafaaid = "704917f5-45d4-4231-9761-d95a286f8390";
var npadminid = "a2dbe2d1-6f87-494c-b1f9-b1ebba88aadf" ;
var itechid  = "4af4f289-8d10-4a8c-afe7-77f729475c48" ;
var ebroid = "1bfd318c-ddf2-4782-b12d-4d5d664c2bab";
var broadid = "75ecfab0-da20-497f-a36f-548d424acd95";
var abizahraa = "77e79dee-ff84-4582-9f56-c4a381286d42";
var IQ = "b4da7fc8-b377-47a0-a6e7-da5c032e0ab8";
var nolimit = "d0751ecb-795e-43d6-94fb-8d13d01157cb";






$.ajaxSetup({
    error: function (xhr, status, error) {
        $(".loading").fadeOut();
    }
});

// window.$crisp=[];
// window.CRISP_WEBSITE_ID="3b4f41a9-840a-4807-b7ce-00c0fdf659f5";
// (function(){
// d=document;s=d.createElement("script");
// s.src="https://client.crisp.chat/l.js";
// s.async=1;
// d.getElementsByTagName("head")[0].appendChild(s);
// })();
// $("").text($(this).text().substr(0, 8)+'...');
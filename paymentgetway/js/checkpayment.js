token = "";


function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }

}

var token = GetURLParameter('token');



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

const jwtDecoded = parseJwt(token);
if (jwtDecoded) {
  
    var status = jwtDecoded.status;
 

    if (status == "failed") {
		
				sendid();
        function sendid() {

            var paytoken = token;
            
            $.ajax({
                    "async": true,
                    "crossDomain": true,
				    "url": DomainAPI + "Home/CheckPayment?token=" + paytoken,
                    "method": "GET",
                }).done(function(response) {
                   
                })
                .fail(function(response) {

                  
                });

        }

        swal({
            title: "Bad!",
            text: "Error in Payment!",
            icon: "error",
            type: "error"
        }).then(function() {
            window.location = "./index.html";
        });

    } else {
		sendid();
        function sendid() {

            var paytoken = token;
            console.log(paytoken);
            $.ajax({
                    "async": true,
                    "crossDomain": true,
				    "url": DomainAPI + "Home/CheckPayment?token=" + paytoken,
                
                    "method": "GET",
                }).done(function(response) {
                    
                })
                .fail(function(response) {

                    
                });

        }

        swal({
            title: "Wow!",
            text: "Payment Success!",
            icon: "success",
            type: "Good job!"
        }).then(function() {
            window.location = "./index.html";
        });
    }
}
var DomainAPI = "https://uat.tasdid.net:85/v1/api/";


$.ajaxSetup({
  error: function(xhr, status, error) {
  $(".loading").fadeOut();
  }
});


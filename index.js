var rct = ".contents"; //right contents
var contents = ["#activities", "#projects", "#schedule"]


function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}


function getCurrentCont() {
    var url = window.location.href;
    var regex = new RegExp("#+[^#]{1,20}");
    var lst = url.match(regex);
    if (lst === null || lst === 0) {
        return -1};
    return lst[0];
}

$(document).ready(function() {
    $(rct).hide();
    var init = getCurrentCont();
    if (init === -1)
        init = contents[0]
    $(init).show();
    console.log("Fully loaded page");
});


function disp(num) {
    $(rct).hide();
    $(contents[num]).show();
};
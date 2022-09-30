var arr = [];
arr.push("s", "subid1", "subid_1", "sub_id1", "sub_id_1", "sub1", "sub_1", "data1", "aff_sub", "sub_id", "subid", "sub");
arr.push("w", "subid2", "subid_2", "sub_id2", "sub_id_2", "sub2", "sub_2", "data2", "aff_sub2");
arr.push("t", "subid3", "subid_3", "sub_id3", "sub_id_3", "sub3", "sub_3", "data3", "aff_sub3");
arr.push("p", "subid4", "subid_4", "sub_id4", "sub_id_4", "sub4", "sub_4", "data4", "aff_sub4");
arr.push("m", "subid5", "subid_5", "sub_id5", "sub_id_5", "sub5", "sub_5", "data5", "aff_sub5");
arr.push("utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content");

var params = '';

arr.forEach(function(item, i, arr) {
    if(getParameterByName(item)){
        params = params+item+'='+getParameterByName(item)+"&";
        var ths_len = (document.getElementsByTagName('form').length);
        for(a = 0; a < ths_len; a++){ document.getElementsByTagName('form')[a].innerHTML = '<input type="hidden" name="'+item+'" value="'+getParameterByName(item)+'">' + document.getElementsByTagName('form')[a].innerHTML;}
    }
});

console.log(params);
console.log('OK');

var hash = document.getElementById('wildo').getAttribute('hash');

function getParameterByName(name, url) {if (!url) url = window.location.href;name = name.replace(/[\[\]]/g, "\\$&");var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);if (!results) return null;if (!results[2]) return '';return decodeURIComponent(results[2].replace(/\+/g, " "));}
function getXmlHttp(){var t;try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(c){t=!1}}return t||"undefined"==typeof XMLHttpRequest||(t=new XMLHttpRequest),t}

var iframe = document.createElement('iframe');
iframe.style.display = "none";
iframe.style.width = "1px";
iframe.style.height = "1px";
iframe.src = "https://cpa78.info/visit/"+hash+"?"+params;
document.body.appendChild(iframe);

if(document.getElementById('aChangeLinks')){

    changeLinks = document.getElementById('aChangeLinks');

    if(changeLinks.getAttribute('url').indexOf('?') + 1) {
        str = changeLinks.getAttribute('url')+'&'+params;
    }else{
        str = changeLinks.getAttribute('url')+"?"+params;
    }

    console.log('need to replace urls');
    ahrefs = document.getElementsByTagName('a');
    for(i = 0; i < ahrefs.length; i++){
        ahrefs[i].href = str;
        ahrefs[i].removeAttribute('onclick');
    }

}

window.onload = function() {

   ahrefs = document.getElementsByTagName('a');
    for(i = 0; i < ahrefs.length; i++){
        if(ahrefs[i].href.split('#').length==2){
            var anchor = ahrefs[i].href.split('#')[1];
            if(document.getElementsByName(anchor)[0]){
                var elem = getCoords(document.getElementsByName(anchor)[0]);
                ahrefs[i].setAttribute('href', '');
                ahrefs[i].setAttribute('onclick', 'window.scrollTo(0, '+elem+'); return false;');
            }else if(document.getElementById(anchor)){
                var elem = getCoords(document.getElementById(anchor));
                ahrefs[i].setAttribute('href', '');
                ahrefs[i].setAttribute('onclick', 'window.scrollTo(0, '+elem+'); return false;');
            }else{
                ahrefs[i].setAttribute('href', '');
                ahrefs[i].setAttribute('onclick', 'return false;');
            }
        }
    }

    if(document.getElementById('aChangeLinks')){
        changeLinks = document.getElementById('aChangeLinks');

        if(changeLinks.getAttribute('url').indexOf('?') + 1) {
            str = changeLinks.getAttribute('url')+'&'+params;
        }else{
            str = changeLinks.getAttribute('url')+"?"+params;
        }

        console.log('need to replace urls');
        ahrefs = document.getElementsByTagName('a');
        for(i = 0; i < ahrefs.length; i++){
            ahrefs[i].href = str;
            ahrefs[i].removeAttribute('onclick');
        }
    }

    var cnt = document.forms.length;

    for(i = 0; i < cnt; i++){
        if( document.forms[i].hasAttribute('noArbalet')){
            console.log('ignore');
        }else{
            var result = [],
                elems = document.forms[i].getElementsByTagName( 'input' );
            for( var s =0, elem; elem = elems[ s++ ]; ) {
                if(elem.getAttribute('type', 2) == 'text' || elem.getAttribute('type', 2) == 'phone' || elem.getAttribute('type', 2) == 'tel'){
                    if ( elem.getAttribute( 'name', 2 ) == "phone" || elem.getAttribute( 'name', 2 ) == "mobile" || elem.getAttribute( 'name', 2 ) == "tel"  || elem.getAttribute( 'name', 2 ) == "telephone"  || elem.getAttribute( 'name', 2 ) == "client" || elem.getAttribute( 'name', 2 ) == "fio" ) {
                        if( document.getElementById('aThankYouPage') ){
                            document.forms[i].setAttribute('action', document.getElementById('aThankYouPage').getAttribute('url'));
                        }else{
                            document.forms[i].setAttribute('action', 'https://cpa78.info/lead/'+hash);
                        }
                    }
                }
            }
        }
    }

}


document.onsubmit = function(form){ 

    if( form.srcElement.hasAttribute('noArbalet')){
        console.log('ignore');
    }else if( form.srcElement.hasAttribute('validate')){

        if(
        (form.srcElement.querySelector('[name=phone]') && form.srcElement.querySelector('[name=phone]').value=='')
        ||
        (form.srcElement.querySelector('[name=tel]') && form.srcElement.querySelector('[name=tel]').value=='')
        ||
        (form.srcElement.querySelector('[name=telephone]') && form.srcElement.querySelector('[name=telephone]').value=='')
        ){
            alert('Пожалуйста, укажите Ваш номер телефона');
            return false;
        }
        
    }

};

document.onsubmit = function(){ 
    var cnt = document.forms.length;
    for(i = 0; i < cnt; i++){
        if( document.forms[i].hasAttribute('noArbalet')){
            console.log('ignore');
        }else{
            if( document.getElementById('aThankYouPage') ){
                document.forms[i].setAttribute('action', document.getElementById('aThankYouPage').getAttribute('url'));
            }else{
                document.forms[i].setAttribute('action', 'https://cpa78.info/lead/'+hash);
            }
        }
    }
};

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var docEl = document.documentElement;
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var top = box.top + scrollTop - clientTop;
  return top;
}
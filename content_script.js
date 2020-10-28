window.addEventListener ("load", myMain, false);

function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 111);

    function checkForJS_Finish () {
        if ( document.querySelector ("div.iframe-holder")) {
            clearInterval (jsInitChecktimer);
            	var element = document.querySelector('div.iframe-holder');
            	
            	var newParent = document.querySelector('div.b-delivery-footer');
            	
            	newParent.append(element);
        }
    }
}

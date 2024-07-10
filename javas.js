// BACK TO TOP BUTTON

let mybutton = document.getElementById("bttn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// CHANGE FROM LIGHT TO DARK AND VICE VERSA

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}

function changeMode() {
    var x = document.getElementById("mode");
    var cssLinkIndex=0;
    if (x.innerHTML === "(Go Light)") {
        var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", "light.css");
    
        document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
        x.innerHTML = "(Go Dark)";
    } else {
        var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", "dark.css");
    
        document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
        x.innerHTML = "(Go Light)";
    }
}
// Variable Identifier
const htmlCode = document.getElementById("htmlCode"),
cssCode = document.getElementById("cssCode"),
jsCode = document.getElementById("jsCode"),
output=document.getElementById("output")
;

htmlCode.onkeyup=() => run();
cssCode.onkeyup=() => run();
jsCode.onkeyup=() => run();

function run(){
    localStorage.setItem("htmlCode", htmlCode.value);
    localStorage.setItem("cssCode", cssCode.value);
    localStorage.setItem("jsCode", jsCode.value);

    output.contentDocument.body.innerHTML = 
    `<style>${cssCode.value}</style>` + htmlCode.value;
    output.contentWindow.eval(jsCode.value);
}

htmlCode.value = localStorage.htmlCode == undefined ? "" : localStorage.htmlCode; ;
cssCode.value = localStorage.cssCode == undefined ? "" : localStorage.cssCode;
jsCode.value = localStorage.jsCode == undefined ? "" : localStorage.jsCode;


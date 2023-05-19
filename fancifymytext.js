function callCustom() {
    document.getElementById("ftextarea").style.fontsize = "24pt";

}

function makeMoo() {
    textarea.style.textTransform="uppercase"
    let period = textarea.value.split(".");
    let str = period.join("-Moo");
    textarea.value=str;

}

document.getElementsByName("ftextarea")[0].addEventListener("change", function() {
    textarea.style.fontWeight="bold";
    textarea.style.color="blue";
    textarea.style.textDecoration="underline";
    alert("Styles added to text");

})

document.getElementsByName("ftextarea")[1].addEventListener("change", function() {
    textarea.style.fontWeight="normal";
    textarea.style.color="black";
    textarea.style.textDecoration="none";
    alert("Styles returned to normal");

})
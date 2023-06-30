/*var c=window.innerWidth;
if (c==500){
    document.getElementsByClassName("menu-box")[0].innerHTML=document.getElementsByClassName("header-top-right")[0].innerHTML;
    // document.getElementsByClassName("menu")[0].style.display="flex";
    document.getElementsByClassName("close")[0].style.display="none";
}*/
function openMenu() {
    document.getElementsByClassName("menu-box")[0].innerHTML=document.getElementsByClassName("header-top-right")[0].innerHTML;
    document.getElementsByClassName("menu-box")[0].style.display="flex";
    document.getElementsByClassName("menu")[0].style.display="none";
    document.getElementsByClassName("close")[0].style.display="flex";
    setTimeOutMenu(400,0);
    setTimeOutMenu(800,1);
    setTimeOutMenu(1200,2);
    setTimeOutMenu(1400,3);
    setTimeOutMenu(1600,4);
}
document.getElementsByClassName("menu")[0].addEventListener("click",openMenu);
function closeMenu() {
    document.getElementsByClassName("menu-box")[0].style.display="none";
    document.getElementsByClassName("menu")[0].style.display="flex";
    document.getElementsByClassName("close")[0].style.display="none";
}
document.getElementsByClassName("close")[0].addEventListener("click",closeMenu);


function openMenu2(x) {
    var op=document.getElementsByTagName("li")[x].getAttribute("data-op");
    var op=parseFloat(op)+0.05;
    document.getElementsByTagName("li")[x].setAttribute("data-op",op);
    document.getElementsByTagName("li")[x].style.opacity=op;
}
document.getElementsByTagName("menu")[0].addEventListener("click",function () {

});
function mn() {
}
function opacityMenu(x) {
    d=setInterval(openMenu2,100,x);
}
function setTimeOutMenu(u,x) {
    setTimeout(opacityMenu,u,x);
}
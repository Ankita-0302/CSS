let btn1=document.querySelector(".btn1");
btn1.addEventListener("click",nextPage);
function nextPage(){
    window.location.href="happy.html";
}

let btn2=document.querySelector(".btn2");
btn2.addEventListener("mouseover",mousemovement);
function mousemovement(){
  //  alert("hi");
    let x=Math.random()*(window.innerWidth-btn2.offsetWidth);
    let y=Math.random()*(window.innerHeight-btn2.offsetHeight);
    btn2.style.left=`${x}px`;
    btn2.style.top=`${y}px`;

}
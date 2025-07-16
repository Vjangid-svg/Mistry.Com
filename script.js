const bars = document.querySelector("#bar")
const nav = document.querySelector(".navbar")
const cross=document.querySelector("#cross")
const nav2 = document.querySelector(".navbartwo")
// const body = document.querySelector(".container1")
const over = document.querySelector(".overlay")

if(bars){
    bars.addEventListener("click",()=>{
        console.log("bar");
nav.classList.add("active");
cross.classList.add("appear");
bars.classList.add("remove");
over.classList.add("overlayclass");
    })

}
if(cross){
    cross.addEventListener("click",()=>{
        console.log("cross")
        nav.classList.remove("active");
        cross.classList.remove("appear");
bars.classList.remove("remove");
over.classList.remove("overlayclass");

    })
}
if(over){
over.addEventListener("click",()=>{
    console.log("over");
    nav.classList.remove("active");
    cross.classList.remove("appear");
bars.classList.remove("remove");
over.classList.remove("overlayclass");
})
}
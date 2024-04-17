let fastbtn=document.querySelector(".fastbtn")
let senbtn=document.querySelector(".secbtn")
let para=document.querySelector(".para")
let subrata="#000"
let roy="#fff"

let allcolor=()=>{
     let color="0123456789abcdef"
     let clr="#"
     for(let i=0;i<6;i++){
       clr=clr+color[Math.floor(Math.random()*16)];
     }
    return clr
}

fastbtn.addEventListener("click",()=>{
     subrata=allcolor()
     document.body.style.background=`linear-gradient(to right,${subrata},${roy})`
      para.innerHTML=`background:linear-gradient(to right,${subrata},${roy})`
     
})
senbtn.addEventListener("click",()=>{
     roy=allcolor()
     console.log(roy);
     document.body.style.background=`linear-gradient(to right,${subrata},${roy})`
      para.innerHTML=`background:linear-gradient(to right,${subrata},${roy})`
     
})

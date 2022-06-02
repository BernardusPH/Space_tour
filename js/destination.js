document.querySelectorAll(".planetNav").forEach((e,j)=>{
    
    e.addEventListener("click",()=>{
        let role=e.getAttribute("role");

        for(let i=0;i<4;i++){
            document.querySelectorAll(".planetNav")[i].setAttribute("aria-selected","false");
            document.querySelectorAll(".planetImg")[i].setAttribute("hidden",true)
            document.querySelectorAll("article")[i].setAttribute("hidden",true);
        }
        
        
        
       
        e.setAttribute("aria-selected","true");
        document.querySelectorAll(".planetImg")[j].removeAttribute("hidden");
        document.querySelectorAll("article")[j].removeAttribute("hidden");
    })
})
document.querySelectorAll(".tech_butn_nav").forEach((e,j)=>{
    
    e.addEventListener("click",()=>{
     

        for(let i=0;i<3;i++){
            document.querySelectorAll(".tech_butn_nav")[i].setAttribute("aria-selected","false");
            document.querySelectorAll(".landscape")[i].setAttribute("hidden",true);
            document.querySelectorAll(".portrait")[i].setAttribute("hidden",true);
            document.querySelectorAll("article")[i].setAttribute("hidden",true);
        }
        
       
        e.setAttribute("aria-selected","true");
        document.querySelectorAll(".landscape")[j].removeAttribute("hidden");
        document.querySelectorAll(".portrait")[j].removeAttribute("hidden");
       document.querySelectorAll("article")[j].removeAttribute("hidden");
    })
})
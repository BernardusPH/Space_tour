document.querySelectorAll(".crewSelector").forEach((e,j)=>{
    
    e.addEventListener("click",()=>{
     

        for(let i=0;i<4;i++){
            document.querySelectorAll(".crewSelector")[i].setAttribute("aria-selected","false");
            document.querySelectorAll(".crewImg")[i].setAttribute("hidden",true)
            document.querySelectorAll("article")[i].setAttribute("hidden",true);
        }
        
        
        
       
        e.setAttribute("aria-selected","true");
        document.querySelectorAll(".crewImg")[j].removeAttribute("hidden");
        document.querySelectorAll("article")[j].removeAttribute("hidden");
    })
})
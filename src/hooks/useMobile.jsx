import { useEffect, useState } from "react";


export function useMobile(){
 const [iseMobile, setIsMobile] = useState(false);
    useEffect(()=>{
       const resize = window.addEventListener("resize", ()=>{
          const windowWidth = window.innerWidth;
          if (windowWidth <= 600){
            setIsMobile(true)
          }else{
            setIsMobile(false)
          }
       });
       return function(){
          window.removeEventListener("resize", resize, true);
       }
            
        
    },[])
    return iseMobile;
}

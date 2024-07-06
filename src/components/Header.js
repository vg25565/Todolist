import { useEffect, useState } from "react"
import logo from "../assests/logo.png"
export const Header = () => {
  const [theme,setTheme]=useState (()=>{
    const savedTheme =localStorage.getItem("theme");
    return savedTheme? JSON.parse(savedTheme):"light";
  })
  useEffect (()=>{
    localStorage.setItem("theme",JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme)},
    [theme]
  );
  return (
   <header>
    <div className="logo">
      <img src={logo} alt="Todo-List" />
    </div>
    <div className="themeSelector">
      <span onClick={()=>setTheme("light")}className={theme==="light"?"light activeTheme":"light"}></span>
      <span onClick={()=>setTheme("medium")} className={theme==="medium"?"medium activeTheme":"medium"}></span>
      <span onClick={()=>setTheme("dark")} className={theme==="dark"?"dark activeTheme":"dark"}></span>
      <span onClick={()=>setTheme("gOne")} className={theme==="gOne"?"gOne activeTheme":"gOne"}></span>
      <span onClick={()=>setTheme("gTwo")}className={theme==="gTwo"?"gTwo activeTheme":"gTwo"}></span>
      <span onClick={()=>setTheme("gThree")} className={theme==="gThree"?"gThree activeTheme":"gThree"}></span>
    </div>
   </header>
  )
}

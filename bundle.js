(()=>{var e={dark:"light",light:"solar",solar:"dark"},t=localStorage.getItem("theme")||(tmp=Object.keys(e)[0],localStorage.setItem("theme",tmp),tmp),a=document.body.classList;a.add(t),document.getElementById("themeButton").onclick=function(){var t=localStorage.getItem("theme"),l=e[t];a.replace(t,l),localStorage.setItem("theme",l)}})();
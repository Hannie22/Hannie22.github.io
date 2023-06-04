

/* I applied the mode-change function that I learnt from assignment 2 */

let isDark = false;

let darkCol = "#000000";
let lightCol = "#e6dede";


if(window.matchMedia("(prefers-color-scheme: dark)").matches){
  isDark = true;
  document.documentElement.style.setProperty("--col-01", lightCol);
  document.documentElement.style.setProperty("--col-02", darkCol);
  document.getElementById("mode-button").innerHTML = "";
}

function switchModes(){
  
  if (isDark){
   
    isDark = false;
    document.documentElement.style.setProperty("--col-01", darkCol);
    document.documentElement.style.setProperty("--col-02", lightCol);
    document.getElementById("mode-button").innerHTML = "";
  } else {
    isDark = true;
    document.documentElement.style.setProperty("--col-01", lightCol);
    document.documentElement.style.setProperty("--col-02", darkCol);
    document.getElementById("mode-button").innerHTML = "";
  }
}
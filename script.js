const font =document.getElementById("selectfontsize");
const clr =document.getElementById("selectbg");
const mainele=document.querySelector(".main");
const btn=document.querySelector(".btn");
// valueset
const setvalues=(selectedfont,selectedbg)=>{
    font.value=selectedfont;
    clr.value=selectedbg;
    mainele.style.fontSize=selectedfont;
    mainele.style.backgroundColor=selectedbg;

}
// load local storage value
const initialsetup= ()=>{
    const selectedfont=localStorage.getItem("fontsize");
    const selectedbg=localStorage.getItem("bgclr");
    if (selectedfont && selectedbg){
        setvalues(selectedfont,selectedbg);
    }
    if(!selectedfont && !selectedbg){
        setvalues("16px","aliceblue");
    }
    if(!selectedfont && selectedbg){
        setvalues("16px",selectedbg);
    }
    if(selectedfont && !selectedbg){
        setvalues(selectedfont,"aliceblue");
    }

}
// functions
const chngfont = (event) =>{
  mainele.style.fontSize=event.target.value;
  localStorage.setItem("fontsize",event.target.value);
}
const chngclr = (event) =>{
    mainele.style.backgroundColor=event.target.value;
    localStorage.setItem("bgclr",event.target.value);
  }
const clearlocalstorage = (event) =>{
    localStorage.removeItem("fontsize");
    localStorage.removeItem("bgclr");
    setvalues("16px","aliceblue");

  }
// addEventListener
font.addEventListener("change",chngfont);
clr.addEventListener("change",chngclr);
btn.addEventListener("click",clearlocalstorage);

initialsetup();
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS); //
    // }  //
    // console.log("true or false ? check")
    title.classList.toggle(CLICKED_CLASS); //simple한 방법.remove의 기능을함.
}

function init() {
    title.addEventListener("click",handleClick);
    console.log("true or false ? check2")
}
init();
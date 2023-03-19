const title = document.querySelector("#title");

const BASE_COLOR = "red";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    // console.log('curr:'+currentColor);
    // console.log('base:'+BASE_COLOR);
    // console.log('equl:'+currentColor===BASE_COLOR);
                    //위의 문장이 참인지 , 거짓인지 확인을 하기위한 log를 찍어보는 습관을 들이기 위함.

    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
        console.log('changed_Color_checking');
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    // title.addEventListener("click", handleClick);
    title.addEventListener("mouseenter", handleClick)
}
init();

function handleOffline(){
    console.log("lalalala");
}

function handleOnline(){
    console.log("welcome back !");
}

window.addEventListener("offline", handleOffline);//와이파이 껏을때 lalala라는 텍스트가 적힘.
window.addEventListener("online",handleOnline); //와이파이가 켜졋을떄 로그를 윈도우에 출력.
const greetingContainer = document.querySelector(".greeting");
const greetingForm = greetingContainer.querySelector(".js-greeting");
const nameInput = greetingForm.querySelector("input");

const userName_LS = "userName";

function submitHandler(event){
    event.preventDefault(event);
    const userName = nameInput.value;
    console.log(userName);
    paintGreeting(userName);
    localStorage.setItem(userName_LS,userName);
}

function paintGreeting(text){
    greetingForm.classList.add("hide");
    greetingContainer.innerHTML = `반가워요, ${text}!`;
}

function loadGreeting(event){
    const name_LS = localStorage.getItem(userName_LS);

    if(name_LS===null){
        //LS에 저장된 이름이 없을때
        console.log("a");
        greetingForm.addEventListener("submit",submitHandler);
    }else{
        //LS에 저장된 이름이 있을때
        console.log(name_LS);
        paintGreeting(name_LS);  
    }
}

function init(){
    loadGreeting();
};
init();
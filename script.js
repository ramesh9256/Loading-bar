let number = document.querySelector(".number");
let bar = document.querySelector("#input");


window.addEventListener("load" , () =>{
    let index = 0;
    let timer = setInterval(() => {
        if (index > 100) {
            clearInterval(timer);
        }
        else{
            number.innerHTML = index + "%";
            bar.style.width = index + "%";
            index++;

        }
    }, 20);

})
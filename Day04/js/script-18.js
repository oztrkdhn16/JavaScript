

function sayHello(){
    const txtNameEl = document.querySelector("#txtName");
    const welcomeEL = document.querySelector("#welcome");

    welcomeEL.innerHTML = `Hello ${txtName.value}`;
}

// querySelector eslesen ilk elemani secer.
const headEl = document.querySelector("h1");
console.log(headEl);

const aboutUsEl = document.querySelector("#aboutUs");
console.log(aboutUsEl);

const spanEl = document.querySelector("#aboutUs span");
console.log(spanEl);

const menuEl = document.querySelector("ul.menu");
console.log(menuEl);

const menuItem3El = document.querySelector("ul.menu li:nth-child(3)");
console.log(menuItem3El);

headEl.innerText = "Hello JavaScript";

// querySelectorAll eslesen tum elemanlari getirir.
const spanEls = document.querySelectorAll("#aboutUs > span");
console.log(spanEls);

spanEls[0].innerText = "HELLO";

//Listenin ikinci elemanini alip, son elemanina ekleyen kod

const listItemText = document.querySelector(".menu li:nth-child(2)").innerText;
console.log(listItemText);
document.querySelector(".menu li:last-child").innerText += listItemText;

// listedeki 4.u elemanin yerine koyu sekilde Hello yazan kod

const listItem4El = document.querySelector(".menu li:nth-child(4)");
//listItem4El.innerText = "<b>Hello</b>";
listItem4El.innerHTML = "<b>Hello</b>";
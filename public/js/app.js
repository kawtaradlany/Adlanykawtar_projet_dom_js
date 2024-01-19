let myLogin = document.querySelector("#login")
console.log(myLogin);
let mySignup = document.querySelector("#signup")
console.log(mySignup);

let myLoginContent = document.querySelector("#logincontent")
console.log(myLoginContent);
let mySignupContent = document.querySelector("#signupcontent")
console.log(mySignupContent);
myLogin.addEventListener('click', () => {
    myLoginContent.classList.remove("d-none")
    mySignupContent.classList.add("d-none")
    console.log(myLoginContent);
})
mySignup.addEventListener('click', () => {
    mySignupContent.classList.remove("d-none")
    myLoginContent.classList.add("d-none")
    console.log(mySignupContent);
})
let mybuttonvideo=document.querySelector(".buttonvideo")
let myvideo=document.querySelector(".video")
mybuttonvideo.addEventListener('click', () => {
    myvideo.style.display="block"
})
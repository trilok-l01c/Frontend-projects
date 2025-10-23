const nameIpt = document.getElementById("user-name");
const btn = document.getElementById("btn");
const heroTtl = document.getElementById("hero-title");

btn.addEventListener("click", ()=>{
    // build the logic behind displaying the name within the hero title
    heroTtl.innerText += (nameIpt.value)? nameIpt.value: "World\n";
});

const list = Array.from(document.querySelectorAll(".content"));
console.log(list);
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const contents = document.querySelector(".slider");

next.addEventListener("click", ()=>{
    const currentSlide = document.querySelector(".initial");
    const nextSlide = currentSlide.nextElementSibling;
    const destination = getComputedStyle(nextSlide).left;
    contents.style.left = '-' + destination;
    currentSlide.classList.remove("initial");
    nextSlide.classList.add("initial");
    
})

prev.addEventListener("click", ()=>{
    const currentSlide = document.querySelector(".initial");
    console.log(currentSlide);
    const prevSlide = currentSlide.previousElementSibling;
    console.log("prev", prevSlide);
    const destination = getComputedStyle(prevSlide).left;
    console.log(destination);
    contents.style.left = '-' + destination;
    currentSlide.classList.remove("initial");

    prevSlide.classList.add("initial");
})
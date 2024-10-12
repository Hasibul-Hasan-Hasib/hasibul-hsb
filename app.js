
// Banner title animation

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const element = document.getElementById("banner-title-1")
const element2 = document.getElementById("banner-title-2")


const titleAnimation = (element) => {
    let iterations = 0;

    const interval = setInterval(() => {
        element.innerText = element.innerText.split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return element.dataset.value[index];
                }
                return chars[Math.floor(Math.random() * 25)]
            })
            .join("");

        if (iterations >= element.dataset.value.length) clearInterval(interval);

        iterations += 1 / 3;
    }, 30)
}


element.addEventListener("mousemove",()=>{
    titleAnimation(element)
});
element2.addEventListener("mousemove",()=>{
    titleAnimation(element2)
});

setInterval(()=>{titleAnimation(element)},9500)
setInterval(()=>{titleAnimation(element2)},10000)











// banner background text effect

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
    randomString = length => Array.from(Array(length)).map(randomChar).join("");
const card = document.querySelector(".card"),
    letters = card.querySelector(".card-letters");

const handleOnMove = e => {
    const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    letters.style.setProperty("--x", `${x}px`);
    letters.style.setProperty("--y", `${y}px`);

    letters.innerText = randomString(5000);
}

card.onmousemove = e => handleOnMove(e);

card.ontouchmove = e => handleOnMove(e.touches[0]);
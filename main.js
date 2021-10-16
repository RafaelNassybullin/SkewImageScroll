const section = document.querySelectorAll('.haha');

let currentPos = window.pageYOffset;
const updete = () =>{
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.23;
    for (const item of section) {
        item.style.transform = `skewY(${speed}deg)`;
    }

    currentPos = newPos;

    requestAnimationFrame(updete)

}


updete()



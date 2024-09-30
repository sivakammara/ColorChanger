let buttons = document.querySelectorAll("button")
let section = document.querySelector("section")
let h2 = document.querySelector("h2")
let p = document.querySelector("p")[0]


buttons.forEach((element) => {
    element.addEventListener('click', () => {
        section.style.background = element.innerText
    })

    element.addEventListener("mouseover", () => {
        h2.innerText = `Click the button to change the background color to ${element.innerText}`
        element.style.backgroundColor = element.innerText
    })

    element.addEventListener('mouseout', () => {
        h2.innerText = 'Click the button to change the background color'
        element.style.backgroundColor = "black"


    })

})


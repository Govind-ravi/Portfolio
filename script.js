var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-content")

function opentab(tabname) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwdIIIcrEmQUbUziA_yGe-oMjqwKaw7TNO_uDjlMcUmlqyJSnHu0uH75sN3g5kbnDMoIQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
const submit = document.getElementById("submit")
form.addEventListener('submit', e => {
    e.preventDefault()
    submit.disabled = true
    submit.style.backgroundColor = "#ff6a99"
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Sent Succsefully"
            setTimeout(() => {
                msg.innerHTML = ""
            }, 3000);
            submit.disabled = false
            submit.style.backgroundColor = "#ff004f"
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

var exitSidebar = document.getElementsByClassName("exit-sidebar")
var sidebar = document.getElementsByClassName("sidebar")
var menu = document.getElementsByClassName("menu");
var navLink = document.getElementsByClassName("nav-link")
menu[0].addEventListener("click", ()=>{
   menu[0].style.display = "none"
   sidebar[0].style.right = "0px"
   exitSidebar[0].style.display = "block"
})
var close = document.getElementsByClassName("close")
close[0].addEventListener("click", ()=>{
    menu[0].style.display = "block"
    sidebar[0].style.right = "-250px"
    exitSidebar[0].style.display = "none"
})
exitSidebar[0].addEventListener("click", ()=>{
    menu[0].style.display = "block"
    sidebar[0].style.right = "-250px"
    exitSidebar[0].style.display = "none"
})
for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", ()=>{
        menu[0].style.display = "block"
        sidebar[0].style.right = "-250px"
        exitSidebar[0].style.display = "none"
    })
}

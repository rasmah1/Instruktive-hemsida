const complete = document.getElementById("Cmplt");
const strtbtn = document.getElementById("Strtbtn");
const revbtn = document.getElementById("Revbtn");
const dnbutton = document.getElementById("Dnbutton");


const complete2 = document.getElementById("Cmplt2");
const strtbtn2 = document.getElementById("Strtbtn2");
const revbtn2 = document.getElementById("Revbtn2");
const dnbutton2 = document.getElementById("Dnbutton2");
const lockedbtn = document.getElementById("Lockedbtn")

const complete3 = document.getElementById("Cmplt3");
const strtbtn3 = document.getElementById("Strtbtn3");
const revbtn3 = document.getElementById("Revbtn3");
const dnbutton3 = document.getElementById("Dnbutton3");
const lockedbtn2 = document.getElementById("Lockedbtn2")

strtbtn.style.display = "block"
dnbutton.style.display = "block"

if (localStorage.getItem("Complete") === null) {
    localStorage.setItem("Complete", "false");
}

if (localStorage.getItem("Complete2") === null) {
    localStorage.setItem("Complete2", "false");
}

function Completecourse() {
    localStorage.setItem("Complete", "true");
    window.location.reload()
}


function Completecourse2() {
    localStorage.setItem("Complete2", "true");
    window.location.reload()
}

if (localStorage.getItem("Complete") === "true") {
    complete.style.display = "block";
    revbtn.style.display = "block"
    strtbtn.style.display = "none"
    dnbutton.style.display = "none"
    lockedbtn.style.display = "none"

    strtbtn2.style.display ="block"
    dnbutton2.style.display ="block"
}

if (localStorage.getItem("Complete2") === "true") {
    complete2.style.display = "block";
    revbtn2.style.display = "block"
    strtbtn2.style.display = "none"
    dnbutton2.style.display = "none"
    lockedbtn2.style.display = "none"
}

function Completecourse3() {
    localStorage.setItem("Complete3", "true");
    window.location.reload()
}


if (localStorage.getItem("Complete3") === "true") {
    complete3.style.display = "block";
    revbtn3.style.display = "block"
    strtbtn3.style.display = "none"
    dnbutton3.style.display = "none"
}
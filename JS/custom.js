function graph() {
    let left1 = document.querySelector(".features-left-1");
    let right1 = document.querySelector(".features-right-1");
    let left2 = document.querySelector(".features-left-2");
    let right2 = document.querySelector(".features-right-2");
    let left3 = document.querySelector(".features-left-3");
    let right3 = document.querySelector(".features-right-3");
    let left4 = document.querySelector(".features-left-4");
    let right4 = document.querySelector(".features-right-4");

    if (left1.style.display = "none") {
        left1.style.display = "block"
        left3.style.display = "none";
        left4.style.display = "none";
        left2.style.display = "none";
        if (right1.style.display = "none") {
            right1.style.display = "block"
            right3.style.display = "none";
            right4.style.display = "none";
            right2.style.display = "none";
        }
    }
}

function email() {
    let left1 = document.querySelector(".features-left-1");
    let right1 = document.querySelector(".features-right-1");
    let left2 = document.querySelector(".features-left-2");
    let right2 = document.querySelector(".features-right-2");
    let left3 = document.querySelector(".features-left-3");
    let right3 = document.querySelector(".features-right-3");
    let left4 = document.querySelector(".features-left-4");
    let right4 = document.querySelector(".features-right-4");

    if (left2.style.display = "none") {
        left2.style.display = "block"
        left3.style.display = "none";
        left4.style.display = "none";
        left1.style.display = "none";
        if (right2.style.display = "none") {
            right2.style.display = "block"
            right3.style.display = "none";
            right4.style.display = "none";
            right1.style.display = "none";
        }
    }
}

function study() {
    let left1 = document.querySelector(".features-left-1");
    let right1 = document.querySelector(".features-right-1");
    let left2 = document.querySelector(".features-left-2");
    let right2 = document.querySelector(".features-right-2");
    let left3 = document.querySelector(".features-left-3");
    let right3 = document.querySelector(".features-right-3");
    let left4 = document.querySelector(".features-left-4");
    let right4 = document.querySelector(".features-right-4");

    if (left3.style.display = "none") {
        left3.style.display = "block"
        left2.style.display = "none";
        left4.style.display = "none";
        left1.style.display = "none";
        if (right3.style.display = "none") {
            right3.style.display = "block"
            right2.style.display = "none";
            right4.style.display = "none";
            right1.style.display = "none";
        }
    }
}

function resume() {
    let left1 = document.querySelector(".features-left-1");
    let right1 = document.querySelector(".features-right-1");
    let left2 = document.querySelector(".features-left-2");
    let right2 = document.querySelector(".features-right-2");
    let left3 = document.querySelector(".features-left-3");
    let right3 = document.querySelector(".features-right-3");
    let left4 = document.querySelector(".features-left-4");
    let right4 = document.querySelector(".features-right-4");

    if (left4.style.display = "none") {
        left4.style.display = "block";
        left2.style.display = "none";
        left3.style.display = "none";
        left1.style.display = "none";
        if (right4.style.display = "none") {
            right4.style.display = "block"
            right2.style.display = "none";
            right3.style.display = "none";
            right1.style.display = "none";
        }
    }
}


function app() {
    let app = document.getElementById("appImage").classList.toggle("appImage");
}

let tab = document.querySelectorAll(".tab");
tab[0].checked = true;

tab.forEach((e) => {
    e.addEventListener('click', (event) => {
        tab.forEach((e) => {
            e.checked = false;
            e.parentElement.classList.remove("col-active");
        });
        event.target.checked = true;
        e.parentElement.classList.add('col-active');
    })
})
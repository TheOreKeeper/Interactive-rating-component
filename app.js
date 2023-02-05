const buttons = document.querySelectorAll(".button");
var selection;

function select(n) {
    buttons.forEach(button => {
        button.classList.remove('selected');
    })

    buttons.item(n).classList.add("selected");
    document.querySelector('.selection').innerHTML = "You selected " + (n+1) + " out of 5";
}

function submit() {
    const rating = document.querySelector(".rating-card");
    const thankYou = document.querySelector(".thankYou-card");

    
    rating.style.opacity = "0";
    setTimeout(function() {
        rating.style.display = "none";
        thankYou.style.display = "flex";
    }, 600);
    thankYou.style.opacity = "1";
}
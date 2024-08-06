let onDienstenPage = document.getElementById("diensten");
let restUnactive1 = document.getElementsByClassName("actieflink")[0];
let restUnactive2 = document.getElementsByClassName("actieflink")[1];

let dienstenlink1 = document.getElementsByClassName("dienstenlink")[0];
let dienstenlink2 = document.getElementsByClassName("dienstenlink")[1];

onDienstenPage.addEventListener("mouseover", dienstenActive);
onDienstenPage.addEventListener("mouseout", dienstenUnactive);

function dienstenActive() {
    restUnactive1.style.color="#fff";
    restUnactive2.style.color="#fff";
    dienstenlink1.style.color="#97BF10";
    dienstenlink2.style.color="#97BF10";
}

function dienstenUnactive() {
    restUnactive1.style.color="#97BF10";
    restUnactive2.style.color="#97BF10";
    dienstenlink1.style.color="#fff";
    dienstenlink2.style.color="#fff";
}

//popup
let popup = document.getElementById("popup");
document.getElementById("closepopup").addEventListener("click", closepopup);

function closepopup() {
    popup.style.display="none";
}


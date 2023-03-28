// function showMessage () {
//     console.log("Я учу JavaScript!");
// }

// showMessage();

const blockPhoto = document.getElementById("img"); 
    console.log(blockPhoto);

function showLeftPhoto() {
    blockPhoto.style.backgroundImage = `url(assets/images/02.jpg)`;
}

function showRightPhoto() {
    blockPhoto.style.backgroundImage = `url(assets/images/03.jpg)`;
}
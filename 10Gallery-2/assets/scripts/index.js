// function showMessage () {
//     console.log("Я учу JavaScript!");
// }

// showMessage();

const blockPhoto = document.getElementById('img');

const showLeftPhoto = () => {
    blockPhoto.src = `assets/images/02.jpg`;
    console.log(blockPhoto);
}

const showRightPhoto = () => {
    blockPhoto.setAttribute("src", `assets/images/03.jpg`);
    console.log(blockPhoto);
}

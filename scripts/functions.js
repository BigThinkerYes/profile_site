const colors = document.querySelectorAll(".color-box h2");
function generateColors() {
  colors.forEach((color) => {
    let hexCode = "#" + Math.random().toString(16).substring(2, 8);
    // console.log(hexCode);
    //color.getElementsByClassName.backgroundColor = hexCode;
    color.style.backgroundColor = hexCode;
  });
}
generateColors();

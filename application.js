var svgElement = 'http://www.w3.org/2000/svg';
function showContent(){
  hidden.setAttributeNS(null, "opacity", 0.85);
  console.log(hidden);
}
function bubbleOut(n){
  var changeColors = document.getElementById("Square" + n);
  changeColors.style.fill = "rgb(" +rgb()+ "," +rgb()+ "," +rgb()+ ")";
}
function rgb(){
  return Math.floor(Math.random() * 789);
}
// function changePictures(n){
//   var changePictures = document.getElementById("pic" + n);
//   changePictures.style.opacity = "0";
// }

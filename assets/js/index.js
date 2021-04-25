var circle = document.getElementById("circle")
var upBtn = document.getElementById("upBtn")
var downBtn = document.getElementById("downBtn")

var rotareValue = circle.style.transform
console.log("🚀 ~ file: index.js ~ line 5 ~ rotareValue", rotareValue)

var rotateSum;

upBtn.onclick = function () {
    rotateSum = rotareValue + "rotate(-90deg)"
    circle.style.transform = rotateSum
    rotareValue = rotateSum
}

downBtn.onclick = function () {
    rotateSum = rotareValue + "rotate(+90deg)"
    circle.style.transform = rotateSum
    rotareValue = rotateSum
}
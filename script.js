const btn = document.getElementById("help-button");

btn.addEventListener("click", function(){
    alert("Please click one of the links to be directed to either google or the GeoJSON code.");
})
let numyes = 0;
const btn = document.getElementById("yesbtn");
btn.addEventListener("click",function(){
    numyes += 1 ;
})
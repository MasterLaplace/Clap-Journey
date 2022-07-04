var colors = [["#ffffff", "#000000"], ["#ffffff", "#000000"]];
var index = 0;
 
function changecolor() {
    document.getElementById("randomcolor").style.color = '#' + colors[index];
    index = (index + 1) % colors.length;
    setTimeout(changecolor, 4000);
}
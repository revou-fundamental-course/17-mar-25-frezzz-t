alert("Kamu Hitam")
button 
document.addEventListener("DOMContentLoaded", function() {
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");

    button1.addEventListener("click", function() {
        window.location.href = "Assets/P.panjang.html"; // Arahkan ke page1.html
    });
    button2.addEventListener("click", function() {
        window.location.href = "Assets\P.panjang.html"; // Arahkan ke page2.html
    });
});
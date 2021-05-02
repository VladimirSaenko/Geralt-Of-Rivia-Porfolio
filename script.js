function switchToColor(color) {
    try {
        document.querySelectorAll(".page").forEach(function(page) {
            page.style.borderColor = color;
        });
        document.querySelectorAll(".avatar").forEach(function(avatar) {
            avatar.contentDocument.getElementById("circle").setAttribute("fill", color);
        });
    } catch (error) {}
}
document.getElementById("midnightblue").addEventListener("click", switchToColor.bind(this, "midnightblue"));
document.getElementById("red").addEventListener("click", switchToColor.bind(this, "red"));

document.getElementById("hourse").addEventListener("click", function() {
    this.childNodes[2].play();
});
document.getElementById("sword").addEventListener("click", function() {
    this.childNodes[2].play();
});
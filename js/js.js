/*
    ============================================================
            The All Important Coffin Dance Meme + Listeners
    ============================================================
*/
window.addEventListener('keydown', function(e) {
    if (e.key == '.') {
        document.getElementById("coffinDance").play();
    }
});
window.addEventListener('keyup', function(e) {
    if (e.key == '.') {
        document.getElementById("coffinDance").pause();
    }
});
window.addEventListener('touchstart', function(e) {
    document.getElementById("coffinDance").play();
});
window.addEventListener('touchend', function(e) {
    document.getElementById("coffinDance").pause();
});
document.getElementById("textArea").addEventListener("change", function(e) {
    updateDate();
});
document.getElementById("fileName").addEventListener("change", function(e) {
    updateDate();
});
/*
    ==============================================================
            End of Coffin Dance Meme + Listeners
    ==============================================================
*/
/*
    ==============================================================
                Exec Command Function
    ==============================================================
*/
function styleIt(style) {
    document.execCommand(style);
}
/*
    ==============================================================
                    End of Exec Command Function
    ==============================================================
*/

/*
    ==============================================================
                    Last Changed Function
    ==============================================================
*/
function updateDate() {
    const label = document.getElementById("timeChanged");
    let time = new Date();
    label.innerHTML = "Last changed on: " + time.toString();
}
/*
    ==============================================================
                    End of Last Changed Function
    ==============================================================
*/
/*
    ==============================================================

    ==============================================================
*/
/*
    ==============================================================

    ==============================================================
*/
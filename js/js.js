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
document.getElementById("textArea").addEventListener("input", function(e) {
    updateDate();
});
document.getElementById("fileName").addEventListener("input", function(e) {
    updateDate();
});
let button = document.querySelectorAll("button");
button.forEach(i => {
    i.addEventListener("click", function(e) {
        styleIt(i.id);
    });
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

//Partial personalized exec command
function wrapSelectedText(aStyle) {
    var selection = window.getSelection().getRangeAt(0);
    var selectedText = selection.extractContents();
    var span = document.createElement("span");
    switch (aStyle) {
        case "bold":
            span.style.fontWeight = "bold";
            break;
        case "italic":
            span.style.fontStyle = "italic";
            break;
        default:
            span.style = "none";
            return;
    }
    span.appendChild(selectedText);
    selection.insertNode(span);
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
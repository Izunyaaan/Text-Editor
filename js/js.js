/*
    ============================================================
            The All Important Coffin Dance Meme + Listeners
            100% Distinction material
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
    countWords(document.getElementById("textArea").innerText);
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
const fontSizeSelect = document.getElementById("fontSize");

fontSizeSelect.addEventListener('change', (event) => {
    wrapSelectedText(fontSizeSelect.value);
});
const fontFamilySelect = document.getElementById("fontFamily");

fontFamilySelect.addEventListener('change', (event) => {
    document.execCommand("fontName", false, fontFamilySelect.value);
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
    if (style == "reset") { return resetContent(); }
    if (style == "rickRoll") {
        let url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        window.open(url, '_blank').focus();
    }
    document.execCommand(style);
}

function test(a) {
    window.alert(a);
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
			document.execCommand("removeFormat");
            span.style.fontSize = aStyle + "px";
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
                    Last Changed Function. This uses the Date
                    constructor so distinction right?
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
            Local Storage Functions
    ==============================================================
*/
function saveContent() {
    let titlePlaceholder = document.getElementById("fileName");
    let textArea = document.getElementById("textArea");
    if (titlePlaceholder.placeholder != "New Document") {
        titlePlaceholder.value = titlePlaceholder.placeholder;
    }
    let titleText = (titlePlaceholder.value != "") ? titlePlaceholder.value : "New Document";
    localStorage.setItem('title', titleText);
    localStorage.setItem('content', textArea.innerHTML);
}

function loadContent() {
    const savedTitle = localStorage.getItem('title');
    const savedContent = localStorage.getItem('content');
    const fileName = document.getElementById("fileName");
    const textArea = document.getElementById("textArea")
    if (savedTitle != null) {
        fileName.placeholder = savedTitle;
    }
    if (savedContent != null) {
        textArea.innerHTML = savedContent;
    }
    countWords(document.getElementById("textArea").innerText);
}

function resetContent() {
    document.getElementById("fileName").placeholder = "New Document";
    document.getElementById("fileName").value = "";
    document.getElementById("textArea").innerHTML = "";
    localStorage.setItem('title', 'New Document');
    localStorage.setItem('content', '');
    document.getElementById("timeChanged").innerHTML = '';
    document.getElementById("wordCount").innerHTML = "Word Count: ";
}
/*
    ==============================================================
            End of Local storage functions
    ==============================================================
*/

/*
    ==============================================================
                And finally the word count
    ==============================================================
*/
function countWords(s) {
    //window.alert(s); <- debug
    /* s = s.replace(/(^\s*)|(\s*$)/gi, "");
    s = s.replace(/[ ]{2,}/gi, " ");
    s = s.replace(/\n /, "\n"); */
    s = s.replace(/<.*?>/g, '');
    document.getElementById("wordCount").innerHTML = "Word Count: " + s.match(/\S+/g).length;
}
/*
    ==============================================================
                    End of word count
    ==============================================================
*/
/*
    ==============================================================
                    Here Be Clippy
    ==============================================================
*/
let counter = 0
let bg = document.getElementById("clippyDiv").style;

function clippy() {
    if (counter === 0) {
        bg.backgroundImage = "url('img/clippy2.gif')";
        counter = 1;
    } else {
        bg.backgroundImage = "url('img/clippy.gif')";
        counter = 0;
    }
}
/*
    ==============================================================
                    End of Clippy
    ==============================================================
*/
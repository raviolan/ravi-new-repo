document.getElementById("ClickMeBitch").onclick
    = () => {
        alert("Clicked that bitch")
        //* Alert blir en sån ful liten lapp som fälls ut där uppe. Den är typ rätt tråkig. */
    }

function vibePrompt() {
    let result = window.prompt("what's the vibe", "vibe");
    let text;

    if (result === null) {
        text = "oki skit i d då"
    } else {
        text = "oki fett, " + result + ', bra vibe'
    }

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = text;
}
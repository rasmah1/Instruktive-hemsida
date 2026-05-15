function runCode() {
    const jsCode = document.querySelector("#js-box textarea").value;
    updatePreview(jsCode, true);
}

function updatePreview(code, shouldValidate) {
    const previewFrame = document.getElementById("preview");

    // This is now an exact replica of your provided HTML and CSS structure
 const htmlBase = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <style>
                /* ALL YOUR CSS STYLES */
                * { margin: 0; font-family: "Roboto Condensed", sans-serif; }
                body { background-color: #FF8D28; display: flex; flex-direction: column; align-items: center; padding: 20px; }
                
                h1 { font-size: 3em; color: white; text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.477); margin-bottom: 10px; text-align: center; }
                .description { font-size: 1.2em; color: black; text-align: center; max-width: 600px; margin-bottom: 20px; }
                
                .btnSnake { margin-bottom: 10px; border-radius: 10px; text-transform: uppercase; padding: .5em 1em; background-color: #ffffff; cursor: pointer; color: black; font-weight: 700; display: inline-block; }
                .btnRestart { background-color: #8247c2; color: white; display: none; }
                
                .score-header { color: white; font-weight: 600; font-size: 1.5em; margin-bottom: 10px; }
                
                td { width: 20px; height: 20px; border: none; border-radius: 5px; background: rgb(0, 0, 0); }
                .grid { margin: 0px auto; background: rgb(8, 8, 8); border: .25em solid #ffc08a; border-radius: 5px; }
            </style>
        </head>
        <body>
            <h1 id="greeting">Snake Game</h1>
            <p class='description' id="details">Write your JavaScript to bring this game to life!</p>

            <div onclick="startCountdown()" class="btnStart btnSnake" id="btnStart">Start</div>
            <div onclick="restart()" id="btnRestart" class="btnRestart btnSnake">Try Again</div>

            <div class="score-header">Score: <span id="score" class="score">0</span></div>
            <table id="grid" class="grid"></table>

            <script>
                // This is the ONLY script left. 
                // It acts as the "injector" for the student's work.
                try {
                    ${code}
                } catch(e) {
                    console.error("Syntax Error in Student Code: ", e.message);
                }
            <\/script>
        </body>
        </html>
    `;


    previewFrame.srcdoc = htmlBase;

    // Only run the validation script if we want to (not on first load)
    if (shouldValidate) {
        setTimeout(() => {
            const frameDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
            const greeting = frameDoc.getElementById("greeting")?.innerText || "";
            const details = frameDoc.getElementById("details")?.innerText || "";
            const combinedOutput = (greeting + " " + details).trim();
            
            checkAnswer(combinedOutput); 
        }, 100);
    }
}

// 3. ON PAGE LOAD: Just show the preview, don't validate!
window.onload = function() {
    const initialCode = document.querySelector("#js-box textarea").value;
    updatePreview(initialCode, false); // False = Don't trigger "Try Again" yet
};


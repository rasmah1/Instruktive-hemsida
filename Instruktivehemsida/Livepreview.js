// 1. The main function that runs when the user types or clicks "Run"
function runCode() {
    const jsCode = document.querySelector("#js-box textarea").value;
    updatePreview(jsCode, true); // True means "Yes, check the answer"
}

// 2. A helper function to handle the heavy lifting
function updatePreview(code, shouldValidate) {
    const previewFrame = document.getElementById("preview");

    // Your HTML template
    const htmlBase = `
        <!DOCTYPE html>
        <html>
        <body>
            <h1 id="greeting"></h1>
            <p id="details"></p>
            <script>
                try { ${code} } catch (err) {}
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
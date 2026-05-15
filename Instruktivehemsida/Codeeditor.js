function runCode() {
    const codeInput = document.querySelector("code-input");
    const code = codeInput.value;
    const outputElement = document.getElementById("output");
    
    outputElement.textContent = "";
    let capturedOutput = "";

    // 1. Hijack console.log
    const originalLog = console.log;
    console.log = function(...args) {
        const text = args.join(" ");
        capturedOutput += text; // Store for validation
        outputElement.textContent += text + "\n"; // Show to user
    };

    // 2. Execute user code
    try {
        eval(code); 
    } catch (error) {
        outputElement.textContent += "Error: " + error.message;
    }

    // 3. Restore console IMMEDIATELY
    console.log = originalLog;

    // 4. Validate the text (pass the string, not the element)
    checkAnswer(capturedOutput); 
}
function finalOutput() {
    let htmlCode = document.getElementById("html-input").value;
    let cssCode = document.getElementById("css-input").value;
    let jsCode = document.getElementById("js-input").value;
    let outputFrame = document.getElementById("codeExecutionOutput");

    let currentTheme = document.getElementById("themeSwitcher").getAttribute("data-bs-theme"); // Get current theme

    // Construct the complete HTML code with theme applied
    let fullCode = `
        <html data-bs-theme="${currentTheme}">
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
            <style>
                body {
                    background-color: ${currentTheme === "dark" ? "#212529" : "#ffffff"};
                    color: ${currentTheme === "dark" ? "#ffffff" : "#000000"};
                }
                * { transition: all 0.3s ease-in-out; }
            </style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `;

    // Write the full HTML into the iframe
    outputFrame.contentDocument.open();
    outputFrame.contentDocument.write(fullCode);
    outputFrame.contentDocument.close();
}

function themeChanger() {
    let checkBoxDocument = document.getElementById("flexSwitchBox"); // Checkbox reference
    let navSwitchText = document.getElementById("navSwitchText"); // Label for switch icon


    if (checkBoxDocument.checked) {
        // Dark Mode
        document.getElementById("themeSwitcher").setAttribute("data-bs-theme", "dark");
        document.getElementById("navThemeSwitcher").setAttribute("data-bs-theme", "dark");

        // Change switch icon to moon
        navSwitchText.innerHTML = `<i class="bi bi-moon-fill"></i>`;
        navSwitchText.style.color = "rgb(246, 248, 250)";
    } else {
        // Light Mode
        document.getElementById("themeSwitcher").setAttribute("data-bs-theme", "light");
        document.getElementById("navThemeSwitcher").setAttribute("data-bs-theme", "light");

        // Change switch icon to sun
        navSwitchText.innerHTML = `<i class="bi bi-sun-fill"></i>`;
        navSwitchText.style.color = "rgb(244, 226, 110)"; 
    }

    // Preserve theme while typing
    finalOutput();
}

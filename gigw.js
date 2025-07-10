
//console.log("✅ gigw.js loaded");

//// ------------------------------
//// 🔠 Font Size Adjustment Module
//// ------------------------------

//function toggleFontDropdown() {
//    const dropdown = document.getElementById("fontSizeSelect");
//    dropdown.style.display = dropdown.style.display === "none" ? "inline-block" : "none";
//}
//let currentFontSize = parseInt(localStorage.getItem("fontSizeValue")) || 100;

//function adjustFontSize(action) {
//    if (action === 'increase' && currentFontSize < 120) {
//        currentFontSize += 10;
//    } else if (action === 'decrease' && currentFontSize > 80) {
//        currentFontSize -= 10;
//    } else if (action === 'reset') {
//        currentFontSize = 100;
//    }
//    document.documentElement.style.fontSize = currentFontSize + '%';
//    localStorage.setItem("fontSizeValue", currentFontSize);
//}

//// --------------------------------
//// 🔤 Font Spacing Adjustment Module
//// --------------------------------
//function setFontSpacing(level) {
//    document.body.classList.remove("spacing-normal", "spacing-wide");
//    document.body.classList.add("spacing-" + level);
//    localStorage.setItem("fontSpacing", level);
//}

//// --------------------------------
//// ↕ Line Spacing Adjustment Module
//// --------------------------------
//function setLineSpacing(level) {
//    document.body.classList.remove("line-normal", "line-wide");
//    document.body.classList.add("line-" + level);
//    localStorage.setItem("lineSpacing", level);
//}

//// ---------------------------------
//// ↕ Vertical Spacing Toggle (Main)
//// ---------------------------------
//function toggleVerticalSpacing() {
//    const body = document.body;
//    const btn = document.getElementById("accessibilityToggleBtn");

//    const isWide = body.classList.contains("vspace-wide");

//    body.classList.remove("vspace-normal", "vspace-wide");

//    if (isWide) {
//        body.classList.add("vspace-normal");
//        localStorage.setItem("verticalSpacing", "normal");
//        btn?.classList.remove("active");
//    } else {
//        body.classList.add("vspace-wide");
//        localStorage.setItem("verticalSpacing", "wide");
//        btn?.classList.add("active");
//    }
//}

//// -----------------------------
//// 🎨 Theme Switcher Module
//// -----------------------------
//function setTheme(theme) {
//    const themes = ["default", "black", "gray"];
//    themes.forEach(t => document.body.classList.remove("theme-" + t));
//    document.body.classList.add("theme-" + theme);
//    localStorage.setItem("themeColor", theme);
//}

//// --------------------
//// 🔁 Reset All Settings
//// --------------------
//function resetAccessibility() {
//    currentFontSize = 100;
//    document.documentElement.style.fontSize = currentFontSize + '%';

//    document.body.classList.remove(
//        "spacing-normal", "spacing-wide",
//        "line-normal", "line-wide",
//        "vspace-normal", "vspace-wide",
//        "theme-default", "theme-black", "theme-gray"
//    );

//    document.getElementById("accessibilityToggleBtn")?.classList.remove("active");

//    localStorage.removeItem("fontSizeValue");
//    localStorage.removeItem("fontSpacing");
//    localStorage.removeItem("lineSpacing");
//    localStorage.removeItem("verticalSpacing");
//    localStorage.removeItem("themeColor");
//}

//// --------------------
//// 📦 Load Saved Settings
//// --------------------
//window.onload = function () {
//    if (localStorage.getItem("fontSizeValue")) {
//        currentFontSize = parseInt(localStorage.getItem("fontSizeValue"));
//        document.documentElement.style.fontSize = currentFontSize + '%';
//    }

//    if (localStorage.getItem("fontSpacing")) {
//        setFontSpacing(localStorage.getItem("fontSpacing"));
//    }

//    if (localStorage.getItem("lineSpacing")) {
//        setLineSpacing(localStorage.getItem("lineSpacing"));
//    }

//    if (localStorage.getItem("verticalSpacing")) {
//        const level = localStorage.getItem("verticalSpacing");
//        document.body.classList.add("vspace-" + level);

//        if (level === "wide") {
//            document.getElementById("accessibilityToggleBtn")?.classList.add("active");
//        }
//    }

//    if (localStorage.getItem("themeColor")) {
//        setTheme(localStorage.getItem("themeColor"));
//    }
//};





//document.addEventListener("DOMContentLoaded", function () {

//    // ⏩ Skip to Main Content
//    const skipLink = document.getElementById("skipLink");
//    skipLink?.addEventListener("click", function (e) {
//        e.preventDefault();
//        const target = document.getElementById("maincontent");
//        if (target) {
//            target.setAttribute("tabindex", "-1");
//            target.focus();
//            target.classList.add("focus-outline");
//            setTimeout(() => {
//                target.classList.remove("focus-outline");
//                target.removeAttribute("tabindex");
//            }, 2000);
//        }
//    });

//    // ✅ Font Size Dropdown Toggle
//    const fontIcon = document.querySelector("#fontSizeDropdown img");
//    const fontPopup = document.getElementById("fontSizePopup");

//    fontIcon?.addEventListener("click", function () {
//        if (fontPopup) {
//            fontPopup.style.display = fontPopup.style.display === "block" ? "none" : "block";
//        }
//    });

//    // ✅ Click outside to close font dropdown
//    document.addEventListener("click", function (e) {
//        const wrapper = document.getElementById("fontSizeDropdown");
//        if (wrapper && !wrapper.contains(e.target)) {
//            const popup = document.getElementById("fontSizePopup");
//            if (popup) popup.style.display = "none";
//        }
//    });


//    // 🌐 Language Switcher toggle
//    const langIcon = document.querySelector("#langSwitcher img");
//    const langPopup = document.getElementById("langPopup");

//    langIcon?.addEventListener("click", function () {
//        if (langPopup) {
//            langPopup.style.display = langPopup.style.display === "block" ? "none" : "block";
//        }
//    });

//    // 🌐 Click outside to close language dropdown
//    document.addEventListener("click", function (e) {
//        const wrapper = document.getElementById("langSwitcher");
//        if (wrapper && !wrapper.contains(e.target)) {
//            if (langPopup) langPopup.style.display = "none";
//        }
//    });


//    // ✅ Tooltip Support
//    const tooltipList = [].slice.call(document.querySelectorAll('[title]'));
//    tooltipList.forEach(function (el) {
//        new bootstrap.Tooltip(el);
//    });
//});


//    // 🟩 Vertical Spacing Toggle
//    document.getElementById("accessibilityToggleBtn")?.addEventListener("click", toggleVerticalSpacing);

//    // 🔠 Font Size
//    document.querySelectorAll(".font-increase").forEach(el =>
//        el.addEventListener("click", e => { e.preventDefault(); adjustFontSize('increase'); })
//    );
//    document.querySelectorAll(".font-decrease").forEach(el =>
//        el.addEventListener("click", e => { e.preventDefault(); adjustFontSize('decrease'); })
//    );
//    document.querySelectorAll(".font-reset").forEach(el =>
//        el.addEventListener("click", e => { e.preventDefault(); adjustFontSize('reset'); })
//    );

//    // 🔤 Font Spacing
//    document.querySelectorAll(".spacing-normal").forEach(el =>
//        el.addEventListener("click", e => { e.preventDefault(); setFontSpacing('normal'); })
//    );
//    document.querySelectorAll(".spacing-wide").forEach(el =>
//        el.addEventListener("click", e => { e.preventDefault(); setFontSpacing('wide'); })
//    );

//    // ↕ Line Spacing
//    document.querySelectorAll(".line-normal").forEach(el =>
//        el.addEventListener("click", e => { e.preventDefault(); setLineSpacing('normal'); })
//    );
//    document.querySelectorAll(".line-wide").forEach(el =>
//        el.addEventListener("click", e => { e.preventDefault(); setLineSpacing('wide'); })
//    );

//    // 🎨 Theme
//    document.querySelectorAll(".theme-default").forEach(el =>
//        el.addEventListener("click", e => { e.preventDefault(); setTheme('default'); })
//    );
//    document.querySelectorAll(".theme-black").forEach(el =>
//        el.addEventListener("click", e => { e.preventDefault(); setTheme('black'); })
//    );
//    document.querySelectorAll(".theme-gray").forEach(el =>
//        el.addEventListener("click", e => { e.preventDefault(); setTheme('gray'); })
//    );



console.log("✅ gigw.js loaded");

// ------------------------------
// 🔠 Font Size Adjustment Module
// ------------------------------
console.log("✅ gigw.js loaded");

// ------------------------------
// 🔠 Font Size Adjustment Module (GIGW % based)
// ------------------------------
let currentFontSize = parseInt(localStorage.getItem("fontSizeValue")) || 100;

function applyFontSizePercent(value) {
    document.documentElement.style.fontSize = value + '%';
    localStorage.setItem("fontSizeValue", value);
}

function adjustFontSize(action) {
    if (action === 'increase' && currentFontSize < 129) {
        currentFontSize += 14.2857; // 2px out of 14px = ~14.29%
    } else if (action === 'decrease' && currentFontSize > 71.4286) {
        currentFontSize -= 14.2857; // 2px step
    } else if (action === 'reset') {
        currentFontSize = 100;
    }
    applyFontSizePercent(currentFontSize);
}

function changeFontSize(value) {
    if (value === 'small') {
        adjustFontSize('decrease');
    } else if (value === 'large') {
        adjustFontSize('increase');
    } else {
        adjustFontSize('reset');
    }
}

// --------------------------------
// 🔤 Font Spacing Adjustment Module
// --------------------------------
function setFontSpacing(level) {
    document.body.classList.remove("spacing-normal", "spacing-wide");
    document.body.classList.add("spacing-" + level);
    localStorage.setItem("fontSpacing", level);
}

// --------------------------------
// ↕ Line Spacing Adjustment Module
// --------------------------------
function setLineSpacing(level) {
    document.body.classList.remove("line-normal", "line-wide");
    document.body.classList.add("line-" + level);
    localStorage.setItem("lineSpacing", level);
}

// ---------------------------------
// ↕ Vertical Spacing Toggle (Main)
// ---------------------------------
function toggleVerticalSpacing() {
    const body = document.body;
    const btn = document.getElementById("accessibilityToggleBtn");

    const isWide = body.classList.contains("vspace-wide");

    body.classList.remove("vspace-normal", "vspace-wide");

    if (isWide) {
        body.classList.add("vspace-normal");
        localStorage.setItem("verticalSpacing", "normal");
        btn?.classList.remove("active");
    } else {
        body.classList.add("vspace-wide");
        localStorage.setItem("verticalSpacing", "wide");
        btn?.classList.add("active");
    }
}

// -----------------------------
// 🎨 Theme Switcher Module
// -----------------------------
function setTheme(theme) {
    const themes = ["default", "black", "gray", "white"];
    themes.forEach(t => document.body.classList.remove("theme-" + t));
    document.body.classList.add("theme-" + theme);
    localStorage.setItem("themeColor", theme);
}

// --------------------
// 🔁 Reset All Settings
// --------------------
function resetAccessibility() {
    currentFontSize = 100;
    applyFontSizePercent(currentFontSize);

    document.body.classList.remove(
        "spacing-normal", "spacing-wide",
        "line-normal", "line-wide",
        "vspace-normal", "vspace-wide",
        "theme-default", "theme-black", "theme-gray", "theme-white"
    );

    document.getElementById("accessibilityToggleBtn")?.classList.remove("active");

    localStorage.removeItem("fontSizeValue");
    localStorage.removeItem("fontSpacing");
    localStorage.removeItem("lineSpacing");
    localStorage.removeItem("verticalSpacing");
    localStorage.removeItem("themeColor");
}

// --------------------
// 📦 Load Saved Settings
// --------------------
window.onload = function () {
    if (localStorage.getItem("fontSizeValue")) {
        currentFontSize = parseFloat(localStorage.getItem("fontSizeValue"));
        applyFontSizePercent(currentFontSize);
    }

    if (localStorage.getItem("fontSpacing")) {
        setFontSpacing(localStorage.getItem("fontSpacing"));
    }

    if (localStorage.getItem("lineSpacing")) {
        setLineSpacing(localStorage.getItem("lineSpacing"));
    }

    if (localStorage.getItem("verticalSpacing")) {
        const level = localStorage.getItem("verticalSpacing");
        document.body.classList.add("vspace-" + level);

        if (level === "wide") {
            document.getElementById("accessibilityToggleBtn")?.classList.add("active");
        }
    }

    if (localStorage.getItem("themeColor")) {
        setTheme(localStorage.getItem("themeColor"));
    }
};

//document.addEventListener("DOMContentLoaded", function () {

//    // ⏩ Skip to Main Content
//    const skipLink = document.getElementById("skipLink");
//    skipLink?.addEventListener("click", function (e) {
//        e.preventDefault();
//        const target = document.getElementById("maincontent");
//        if (target) {
//            target.setAttribute("tabindex", "-1");
//            target.focus();
//            target.classList.add("focus-outline");
//            setTimeout(() => {
//                target.classList.remove("focus-outline");
//                target.removeAttribute("tabindex");
//            }, 2000);
//        }
//    });

//    // ✅ Font Size Popup Toggle
//    const fontIcon = document.querySelector("#fontSizeDropdown img");
//    const fontPopup = document.getElementById("fontSizePopup");

//    fontIcon?.addEventListener("click", function (e) {
//        e.stopPropagation();
//        fontPopup.style.display = (fontPopup.style.display === "block") ? "none" : "block";
//    });

//    fontPopup?.addEventListener("click", function (e) {
//        e.stopPropagation();
//    });

//    document.addEventListener("click", function () {
//        fontPopup.style.display = "none";
//    });

//    // 🌐 Language Switcher toggle
//    const langIcon = document.querySelector("#langSwitcher img");
//    const langPopup = document.getElementById("langPopup");

//    langIcon?.addEventListener("click", function () {
//        langPopup.style.display = langPopup.style.display === "block" ? "none" : "block";
//    });

//    document.addEventListener("click", function (e) {
//        const wrapper = document.getElementById("langSwitcher");
//        if (wrapper && !wrapper.contains(e.target)) {
//            langPopup.style.display = "none";
//        }
//    });

//    // ✅ language click Support
//    document.querySelectorAll("#langPopup button").forEach(btn => {
//        btn.addEventListener("click", function () {
//            const lang = this.getAttribute("data-lang");
//            switchLanguage(lang); // 👈 Calls the controller
//            langPopup.style.display = "none";
//        });
//    });

//    document.addEventListener("click", function () {
//        langPopup.style.display = "none";
//    });

//    // ✅ Tooltip Support
//    const tooltipList = [].slice.call(document.querySelectorAll('[title]'));
//    tooltipList.forEach(function (el) {
//        new bootstrap.Tooltip(el);
//    });

//    // 🟩 Vertical Spacing Toggle
//    document.getElementById("accessibilityToggleBtn")?.addEventListener("click", toggleVerticalSpacing);
//});
document.addEventListener("DOMContentLoaded", function () {

    // ⏩ Skip to Main Content
    const skipLink = document.getElementById("skipLink");
    skipLink?.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.getElementById("maincontent");
        if (target) {
            target.setAttribute("tabindex", "-1");
            target.focus();
            target.classList.add("focus-outline");
            setTimeout(() => {
                target.classList.remove("focus-outline");
                target.removeAttribute("tabindex");
            }, 2000);
        }
    });

    // ✅ Font Size Popup Toggle
    const fontIcon = document.querySelector("#fontSizeDropdown img");
    const fontPopup = document.getElementById("fontSizePopup");

    fontIcon?.addEventListener("click", function (e) {
        e.stopPropagation();
        fontPopup.style.display = (fontPopup.style.display === "block") ? "none" : "block";
    });

    fontPopup?.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    // ✅ Click outside to close font popup
    document.addEventListener("click", function () {
        fontPopup.style.display = "none";
    });

    // 🌐 Language Switcher toggle
    const langIcon = document.querySelector("#langSwitcher img");
    const langPopup = document.getElementById("langPopup");

    langIcon?.addEventListener("click", function (e) {
        e.stopPropagation(); // ✅ Prevent closing immediately
        langPopup.style.display = (langPopup.style.display === "block") ? "none" : "block";
    });

    langPopup?.addEventListener("click", function (e) {
        e.stopPropagation(); // ✅ Prevent document click from firing
    });

    // ✅ Language button click
    document.querySelectorAll("#langPopup button").forEach(btn => {
        btn.addEventListener("click", function () {
            const lang = this.getAttribute("data-lang");
            switchLanguage(lang); // ✅ Calls controller
            langPopup.style.display = "none";
        });
    });

    // ✅ Click outside to close lang popup
    document.addEventListener("click", function (e) {
        const wrapper = document.getElementById("langSwitcher");
        if (wrapper && !wrapper.contains(e.target)) {
            langPopup.style.display = "none";
        }
    });

    // ✅ Tooltip Support
    const tooltipList = [].slice.call(document.querySelectorAll('[title]'));
    tooltipList.forEach(function (el) {
        new bootstrap.Tooltip(el);
    });

    // 🟩 Vertical Spacing Toggle
    document.getElementById("accessibilityToggleBtn")?.addEventListener("click", toggleVerticalSpacing);
});

function toggleLetterSpacing() {
    const current = document.body.classList.contains("spacing-wide");
    setFontSpacing(current ? "normal" : "wide");
}
function switchLanguage(langCode) {
    window.location.href = '/Language/SetLanguage?lang=' + langCode;
}
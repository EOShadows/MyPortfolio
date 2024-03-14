import themes from "/Data/color_themes.json" assert { type: "json"};

const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
let cur_theme = "darkest"

if (darkTheme.matches) {
    cur_theme = "darkest";
}
else {
    cur_theme = "lightest";
}

const theme = themes[cur_theme];

alert("Alert!");

document.getElementById("main_body").style = "background-color: " + theme.secondary;
document.getElementById("page_style").href = "css/page_styles_for_themes/style_" + cur_theme + ".css";

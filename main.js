
const svg_textarea = document.querySelector("#svg_textarea");
const css_textarea = document.querySelector("#css_textarea");

svg_textarea.addEventListener("input", () => {
    let svg = svg_textarea.value;
    console.log(svg);

    const svg_escaped = svg.replace(/"/g, "'")
        .replace(/#/g, "%23")
        .replace(/</g, "%3C")
        .replace(/>/g, "%3E")
        .replace(/\n/g, " ");

    css = `background-image: url(\"data:image/svg+xml,${svg_escaped}\");`

    css_textarea.value = css;
});


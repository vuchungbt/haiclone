const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) document.body.classList.toggle("light");
    else document.body.classList.toggle("dark");
})

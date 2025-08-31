// This ensure whenever user resize the window, the view stay the same
window.addEventListener("resize", (event) => {
    let hash = document.location.hash.split("#")[1];
    let sectionElement = document.getElementById(hash);
    sectionElement.scrollIntoView({ behavior: "instant", block: 'center' });
});

console.log("Página de músicos favoritos cargada correctamente 🎶");


document.querySelectorAll(".musico").forEach(m => {
    m.addEventListener("click", () => {
        alert("Estás viendo a: " + m.querySelector("h2").textContent);
    });
});
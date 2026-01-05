function headerHTML() {
    // Wenn wir in /pages/ sind, müssen Links relativ anders sein
    const inPages = window.location.pathname.includes("/pages/");
    const base = inPages ? "../" : "";

    return `
    <div class="topbar">
      <div class="container topbar-inner">
        <a class="brand" href="${base}index.html">KNowFit</a>
        <nav class="nav" aria-label="Hauptnavigation">
          <a href="${base}pages/pilates.html">Pilates</a>
          <a href="${base}pages/yoga.html">Yoga</a>
          <a href="${base}pages/krafttraining.html">Krafttraining</a>
          <a href="${base}pages/wellness.html">Wellness</a>
      <a href="${base}pages/ueber-uns.html">&Uuml;ber uns</a>
          <a href="${base}pages/kontakt.html">Kontakt</a>
        </nav>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("site-header");
    if (header) header.innerHTML = headerHTML();

    const y = document.querySelector("[data-year]");
    if (y) y.textContent = new Date().getFullYear();
});

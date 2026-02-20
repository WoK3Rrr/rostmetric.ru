async function includeHTML(selector, file) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(file, { cache: "no-cache" });
  const html = await res.text();
  el.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {
  await includeHTML("#site-header", "header.html");
  await includeHTML("#site-footer", "footer.html");
});
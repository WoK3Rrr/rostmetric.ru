async function includeHTML(selector, file) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(file, { cache: "no-cache" });
  if (!res.ok) return;
  el.innerHTML = await res.text();
}

document.addEventListener("DOMContentLoaded", async () => {
  await includeHTML("#site-header", "/header.html");
  await includeHTML("#site-footer", "/footer.html");
});

(() => {
  const params = new URLSearchParams(window.location.search);
  const targetId = params.get("capture");
  if (!targetId) return;

  const target = document.getElementById(targetId);
  if (!target) return;
  const sections = document.querySelectorAll("main > section");
  sections.forEach((section) => {
    if (section !== target) {
      section.hidden = true;
      section.style.setProperty("display", "none", "important");
    }
  });
  window.scrollTo(0, 0);
})();

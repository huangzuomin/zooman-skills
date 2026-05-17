const filterGroups = document.querySelectorAll(".sf-case-wall");

filterGroups.forEach((group) => {
  const buttons = Array.from(group.querySelectorAll("[data-case-filter]"));
  const cards = Array.from(group.querySelectorAll("[data-case-type]"));
  if (buttons.length === 0 || cards.length === 0) return;

  function setFilter(value) {
    buttons.forEach((button) => {
      const active = button.dataset.caseFilter === value;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    cards.forEach((card) => {
      const visible = value === "all" || card.dataset.caseType === value;
      card.hidden = !visible;
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.caseFilter));
  });

  setFilter("all");
});

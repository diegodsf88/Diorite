const cards = document.querySelectorAll(".rock-card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    card.textContent = "Diorite Detail " + (index + 1);
  });
});

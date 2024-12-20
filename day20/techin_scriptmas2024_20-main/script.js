document.addEventListener("DOMContentLoaded", () => {
  const gnomes = document.querySelectorAll(".gnome");
  const dropZone = document.getElementById("div1");

  gnomes.forEach((gnome) => {
    gnome.addEventListener("dragstart", dragStart);
    gnome.addEventListener("dragend", dragEnd);
  });

  dropZone.addEventListener("dragover", dragOver);
  dropZone.addEventListener("drop", dropGnome);

  let draggedGnome = null;

  function dragStart(e) {
    draggedGnome = e.target;
    setTimeout(() => (e.target.style.opacity = "0.5"), 0);
  }

  function dragEnd(e) {
    e.target.style.opacity = "1";
    draggedGnome = null;
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dropGnome(e) {
    e.preventDefault();
    if (draggedGnome) {
      dropZone.appendChild(draggedGnome);
    }
  }
});

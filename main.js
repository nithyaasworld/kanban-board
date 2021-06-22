const listElements = document.querySelectorAll(".drag-item");
const dragAreas = document.querySelectorAll(".drag-area");

console.log(listElements);
console.log(dragAreas);

listElements.forEach((listEl) => {
  listEl.addEventListener("dragstart", () => {
    console.log("Drag has started");
    listEl.classList.add("dragging");
  });
  listEl.addEventListener("dragend", () => {
    console.log("Drag ended");
    listEl.classList.remove("dragging");
  });
});

dragAreas.forEach((dragArea) => {
  dragArea.addEventListener("dragover", (e) => {
    console.log("dragged over");
    e.preventDefault();
    let currMovingItem = document.querySelector(".dragging");
    let allItems = dragArea.querySelectorAll("li:not(.dragging)");
    let closestElement;
    for (let i = 0; i < allItems.length; i++) {
      if (e.clientY < allItems[i].offsetTop) {
        closestElement = allItems[i];
        break;
      }
    }
    if (closestElement) {
      dragArea.querySelector("ul").insertBefore(currMovingItem, closestElement);
    } else {
      dragArea.querySelector("ul").appendChild(currMovingItem);
    }
  });
});
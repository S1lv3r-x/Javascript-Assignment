const rectangle = document.getElementById("rectangle");
const button = document.getElementById("moveBtn");

const corners = [
  { bottom: "20px", left: "20px" },   // Bottom Left
  { bottom: "20px", right: "20px" },  // Bottom Right
  { top: "20px", right: "20px" },     // Top Right
  { top: "20px", left: "20px" }       // Top Left
];

const colors = ["red", "blue", "green", "orange"];

let currentCorner = 0;

button.addEventListener("click", () => {
  // Reset all corner styles
  rectangle.style.top = "";
  rectangle.style.bottom = "";
  rectangle.style.left = "";
  rectangle.style.right = "";

  // Apply the new corner position
  const pos = corners[currentCorner];
  for (let key in pos) {
    rectangle.style[key] = pos[key];
  }

  // Change the color
  rectangle.style.backgroundColor = colors[currentCorner];

  // Go to next corner (cycle)
  currentCorner = (currentCorner + 1) % corners.length;
});

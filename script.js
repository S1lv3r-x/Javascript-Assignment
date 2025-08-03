const rectangle = document.getElementById("rectangle");
    const button = document.getElementById("moveBtn");

    const corners = [
      { bottom: "20px", left: "20px" },   // Bottom Left
      { bottom: "20px", right: "20px" },  // Bottom Right
      { top: "20px", right: "20px" },     // Top Right
      { top: "20px", left: "20px" }       // Top Left
    ];

    const colors = ["pink", "black", "white", "purple"];


    let currentCorner = 0;

    // Set initial position and color
    function setCorner(index) {
      rectangle.style.top = "";
      rectangle.style.bottom = "";
      rectangle.style.left = "";
      rectangle.style.right = "";

      const pos = corners[index];
      for (let key in pos) {
        rectangle.style[key] = pos[key];
      }

      rectangle.style.backgroundColor = colors[index];
    }

    // Set initial state
    setCorner(currentCorner);

    button.addEventListener("click", () => {
      currentCorner = (currentCorner + 1) % corners.length;
      setCorner(currentCorner);
    });

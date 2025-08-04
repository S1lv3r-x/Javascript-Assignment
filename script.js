    const rectangle = document.getElementById("rectangle");
    const button = document.getElementById("moveBtn");

    const corners = [
      { bottom: "20px", left: "20px" },
      { bottom: "20px", right: "20px" },
      { top: "20px", right: "20px" },
      { top: "20px", left: "20px" }
    ];

    const colors = ["red", "orange", "yellow", "pink"];
    let currentCorner = 0;

    function setCorner(index) {
      rectangle.style.top = "";
      rectangle.style.bottom = "";
      rectangle.style.left = "";
      rectangle.style.right = "";

      Object.assign(rectangle.style, corners[index]);
      rectangle.style.background = colors[index];
    }

    setCorner(currentCorner);
    button.onclick = () => {
      currentCorner = (currentCorner + 1) % corners.length;
      setCorner(currentCorner);
    };

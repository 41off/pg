let color = "black";
let strokeSize = 10;
function changeColorAndSize(data, width) {
  color = data;
  strokeSize = width;
}
window.addEventListener("load", () => {
  const canvas = document.querySelector("#video-canvas1");
  const ctx = canvas.getContext("2d");
  //resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  //variables
  let painting = false;
  //functions
  function startPosition(e) {
    painting = true;
    draw(e);
  }
  function endPosition() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!painting) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    ctx.lineWidth = strokeSize;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
  //event listeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("touchstart", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("touchend", endPosition);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("touchmove", function (e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY });
    draw(mouseEvent);
  }, false);
});


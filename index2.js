function calculateAndDisplay(input1Id, input2Id, displayId, operation) {
  const input1 = parseFloat(document.getElementById(input1Id).value);
  const input2 = parseFloat(document.getElementById(input2Id).value);

  const result = operation(input1, input2);

  document.getElementById(displayId).innerText = result;
  document.getElementById(input1Id).value = "";
  document.getElementById(input2Id).value = "";
}

function calculateTriangleArea(base, height) {
  return 0.5 * base * height;
}

function calculateRectangleArea(length, width) {
  return length * width;
}

const triangleBtn = document.getElementById("triangle-btn");
triangleBtn.addEventListener("click", function () {
  calculateAndDisplay(
    "triangle-input1",
    "triangle-input2",
    "triangle-display",
    calculateTriangleArea
  );
});

const rectangleBtn = document.getElementById("rectangle-btn");
rectangleBtn.addEventListener("click", function () {
  calculateAndDisplay(
    "rectangle-input1",
    "rectangle-input2",
    "rectangle-display",
    calculateRectangleArea
  );
});

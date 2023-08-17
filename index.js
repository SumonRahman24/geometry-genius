function convertCalculating1(tInput1, tInput2, displayId) {
  if (typeof tInput1 !== "number" || typeof tInput2 !== "number") {
    return alert("please give me number");
  }
  const triangleInput1 = parseFloat(document.getElementById(tInput1).value);
  const triangleInput2 = parseFloat(document.getElementById(tInput2).value);

  const result = 0.5 * triangleInput1 * triangleInput2;
  document.getElementById(displayId).innerText = result;
  document.getElementById(tInput1).value = "";
  document.getElementById(tInput2).value = "";
}

function convertCalculating2(tInput1, tInput2, displayId) {
  if (typeof tInput1 !== "number" || typeof tInput2 !== "number") {
    return alert("please give me number");
  }

  const triangleInput1 = parseFloat(document.getElementById(tInput1).value);
  const triangleInput2 = parseFloat(document.getElementById(tInput2).value);
  console.log(triangleInput1);
  const result = triangleInput1 * triangleInput2;
  document.getElementById(displayId).innerText = result;
  document.getElementById(tInput1).value = "";
  document.getElementById(tInput2).value = "";
}

const triangleBtn = document.getElementById("triangle-btn");
triangleBtn.addEventListener("click", function () {
  convertCalculating1("triangle-input1", "triangle-input2", "triangle-display");
});

function rectangleBtn() {
  convertCalculating2(
    "rectriangle-input1",
    "rectriangle-input2",
    "rectriangle-display"
  );
}

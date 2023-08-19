function getFloatValue(input) {
  return parseFloat(document.getElementById(input).value);
}

function getClearValue(inputId1, inputId2) {
  document.getElementById(inputId1).value = "";
  document.getElementById(inputId2).value = "";
}

function calculationOperation(num, inputId1, inputId2) {
  const input1 = getFloatValue(inputId1);
  const input2 = getFloatValue(inputId2);

  const result = num * input1 * input2;
  getClearValue(inputId1, inputId2);
  return result;
}

function displayArea(name, result) {
  const areaContainer = document.getElementById("area-container");
  let count = areaContainer.childElementCount;

  const newPara = document.createElement("div");
  newPara.innerHTML = `${
    count + 1
  }. ${name} ${result} cm<sup>2</sup> <button class="bg-[#1090D8] text-white font-semibold  rounded-md">convert to m<sup>2</sup></button>`;
  areaContainer.appendChild(newPara);
}

function triangleBtn() {
  const result = calculationOperation(
    0.5,
    "triangle-input1",
    "triangle-input2"
  );
  displayArea("Triangle", result);
}

function rectangleBtn() {
  const result = calculationOperation(
    1,
    "rectangle-input1",
    "rectangle-input2"
  );
  displayArea("rectangle", result);
}

function parallelogramBtn() {
  console.log("btn");
  const result = calculationOperation(
    0.5,
    "parallelogram-input1",
    "parallelogram-input2"
  );
  displayArea("parallelogram", result);
}

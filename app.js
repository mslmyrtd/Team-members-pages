var button = document.getElementById("flexSwitchCheckChecked");
var body = document.getElementById("body");

button.addEventListener("click", () => {
  let color = body.style.backgroundColor;
  if (color === "black") {
    body.style.backgroundColor = "#f2f2f2";
    body.style.color = "black";
    button.style.backgroundColor = "blue";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    button.style.backgroundColor = "green";
  }
});

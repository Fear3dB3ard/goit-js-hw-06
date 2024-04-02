document.getElementById("name-input").addEventListener("input", function () {
  var input = document.getElementById("name-input").value;
  var output = document.getElementById("name-output");

  if (input.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = input;
  }
});

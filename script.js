document.addEventListener("DOMContentLoaded", function () {
  var display = document.querySelector('input[name="display"]');
  var buttons = document.querySelectorAll('input[type="button"]');

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      handleButtonClick(button.value);
    });
  });

  function handleButtonClick(value) {
    switch (value) {
      case "=":
        try {
          // Use try-catch to handle potential evaluation errors
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
        break;
      case "AC":
        display.value = "";
        break;
      case "DE":
        display.value = display.value.slice(0, -1);
        break;
      default:
        display.value += value;
    }
  }
});

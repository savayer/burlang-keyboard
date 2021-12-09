import BuryatKeyboard from "./index.js";

let keyboard = new BuryatKeyboard('app', {
  onChange (input) {
    document.querySelector(".input").value = input;
    console.log("Input changed", input);
  },
  onKeyPress (button) {
    if (button === "{shift}" || button === "{lock}") handleShift();
  }
})

document.querySelector(".input").addEventListener("input", event => {
  keyboard.setInput(event.target.value);
})

function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}
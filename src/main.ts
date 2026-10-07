/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */
// deno-lint-ignore-file prefer-const

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Multiply me!</button>
  <button id="decrement">Divide me!</button>
`;

// Add click handler
const increaseButton = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;
const decreaseButton = document.getElementById("decrement")!;

increaseButton.addEventListener("click", () => {
  if (!counter) {
    counter++;
  } else {
    counter *= 2;
  }
  counterElement.textContent = `${counter}`;
  let r = Math.random() * 256;
  let g = Math.random() * 256;
  let b = Math.random() * 256;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

decreaseButton.addEventListener("click", () => {
  if (!counter) {
    return;
  } else {
    counter /= 2;
  }
  counterElement.textContent = `${counter}`;
  let r = Math.random() * 256;
  let g = Math.random() * 256;
  let b = Math.random() * 256;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

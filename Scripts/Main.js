// Import App first
import App from "./App.js"

// Font loader
import FontLoader from "./FontLoader.js";

// Private
(() => {
  // Initialize app first
  App.Init();

  // Load font(s)
  FontLoader.Load("Major Mono Display");
  FontLoader.Load("Noto Sans Georgian", '*');

  // Set font color as white
  document.body.style.color = "#fff";

  // Set font
  FontLoader.Set("Major Mono Display");

  // document.App.Backdrop.setOptions({ chaos: .4 });
})();

window.addEventListener("TransitionStart", () => {
  App.Pulse(.045);
});

// Wait for rendering/painting for visual features
document.addEventListener("DOMContentLoaded", () => {
  // Start pulse
  // setTimeout(() => {
  //   App.Pulse();
  // }, 2500);

  // When DOM is loaded, build them then
  App.BuildSlides();
});

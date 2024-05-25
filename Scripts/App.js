let Initialized = false;

// Core of WebApp
const App = {
  Init: () => {
    // Check if already running
    if (Initialized) {
      console.warn("Can't initialize app twice.");
      return;
    }

    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll('a').forEach(Link => {
        Link.style.color = "#59a9d7";
        Link.style.textDecoration = "none";

        Link.addEventListener("mouseenter", () => {
          Link.style.textDecoration = "underline";
        });

        Link.addEventListener("mouseout", () => {
          Link.style.textDecoration = "none";
        });

        Link.style.pointerEvents = "all";
      });
    });

    // Set as initialized
    Initialized = true;

    // Set default settings and adjust app element
    document.body.style.margin = 0;
    document.body.style.height = "100vh";
    document.App = document.getElementById("App");
    document.App.style.width = "100%";
    document.App.style.height = "100vh";
    document.App.style.position = "absolute";

    // Define backdrop animation
    const Background = document.createElement("div");
    document.App.Backdrop = VANTA.TRUNK({
      el: Background,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      color: 0xa24f68,
      scaleMobile: 1.00
    });

    // Intro
    (() => {
      const Intro = document.createElement("div");

      Intro.style.position = "fixed";
      Intro.style.width = "100%";
      Intro.style.height = "100vh";
      Intro.style.zIndex = 1111;
      Intro.style.background = "#222426";
      Intro.style.display = "flex";
      Intro.style.flexDirection = "column";
      Intro.style.alignItems = "center";
      Intro.style.justifyContent = "center";
      Intro.style.userSelect = "none";
      Intro.style.webkitUserSelect = "none";
      Intro.style.transition = "opacity 2.19s";

      // Title
      const Title = document.createElement("h1");
      Title.style.height = "fit-content";
      Title.style.width = "fit-content";
      Title.textContent = "Nutcracker";
      Title.style.opacity = 0;
      Title.style.transition = "opacity 2.33s";

      let OriginalDelay = 1500;

      setTimeout(() => {
        Title.style.opacity = 1;
      }, OriginalDelay);

      Intro.appendChild(Title);

      // By whose...
      const ByWho = document.createElement("span");
      ByWho.textContent = "M. Zvambaia";
      ByWho.style.position = "absolute";
      ByWho.style.bottom = "2.5rem";
      ByWho.style.opacity = 0;
      ByWho.style.transition = "opacity .83s";

      setTimeout(() => {
        ByWho.style.opacity = .75;
      }, OriginalDelay + 750);

      Intro.appendChild(ByWho);

      document.body.appendChild(Intro);

      Intro.addEventListener("click", () => {
        const A = new Audio("LiveAudio.mp3");

        A.play();
        A.loop = true;
        Intro.style.opacity = 0;
        Intro.style.pointerEvents = "none";
      });

      // setTimeout(() => {
      //   Intro.style.opacity = 0;
      //   Intro.style.pointerEvents = "none";
      // }, OriginalDelay + 5000);
    })();

    // Append
    document.body.appendChild(Background);

    // Adjust its size
    Background.style.position = "fixed";
    Background.style.width = "100%";
    Background.style.height = "100vh";
    Background.style.top = 0;
    Background.style.left = 0;
    Background.style.zIndex = -2;

    // Resize on window size changes
    window.addEventListener("resize", () => {
      document.App.Backdrop.resize();
    });
  },
  Pulse: (Timeout, Steps = 15, SamplingSteps = 1500) => {
    // Pre-define important fields
    const TotalTime = Steps * 1000;

    // Set timeout
    let Delay = 0;

    for (let i = 0; i < Steps; i++) {
      setTimeout(() => {
        document.App.Backdrop.setOptions({ chaos: i });
      }, Delay);

      Delay += TotalTime / SamplingSteps;
    }

    // Set timeout
    setTimeout(() => {
      let Delay = 0;

      for (let i = Steps; i > 0; i--) {
        setTimeout(() => {
          document.App.Backdrop.setOptions({ chaos: i });
        }, Delay);

        Delay += TotalTime / SamplingSteps;
      }

    }, (Timeout || 1) * 1000);
  },
  BuildSlides: () => {
    // Start building them
    const Slides = document.getElementsByClassName("Slides")[0];
    Slides.style.width = "100%";
    Slides.style.height = "100vh";

    // Apply some styles
    Slides.querySelectorAll("section").forEach((Section, i) => {
      const Padding = "2.5rem";

      Section.style.padding = Padding;
      Section.style.width = `calc(100% - 2 * ${Padding})`;
      Section.style.height = `calc(100vh - 2 * ${Padding})`;
      Section.style.position = "fixed";
      Section.style.left = 0;
      Section.style.top = 0;
      Section.style.display = "flex";
      Section.style.flexDirection = (i % 2 === 0 ? "row" : "row"/* + "-reverse" */);

      // Transition for each
      Section.style.transition = "opacity .33s, translate .33s";

      // Section.querySelectorAll("div")[1].style.flex = 1;
      Section.querySelectorAll("div")[1].style.width = "25vw";
      Section.querySelectorAll("div")[0].style.width = "25vw";
      Section.querySelectorAll("div")[1].style.display = "flex";
      Section.querySelectorAll("div")[0].style.display = "flex";
      Section.querySelectorAll("div")[1].style.flexDirection = "column";
      Section.querySelectorAll("div")[1].style.alignItems = "flex-end";
      Section.querySelectorAll("div")[0].style.flexDirection = "column";
      Section.querySelectorAll("div")[0].style.alignItems = "flex-start";
      if (Section.querySelectorAll("div")[1].querySelector("h1")) {
        Section.querySelectorAll("div")[1].querySelector("h1").style.textAlign = "end";
        Section.querySelectorAll("div")[1].querySelector("h1").style.marginLeft = "auto";
      } else if (Section.querySelectorAll("div")[1].querySelector("h2")) {
        Section.querySelectorAll("div")[1].querySelector("h2").style.textAlign = "end";
        Section.querySelectorAll("div")[1].querySelector("h2").style.marginLeft = "auto";
      }
      Section.querySelectorAll("div")[1].style.justifyContent = "center";
      Section.querySelectorAll("div")[0].style.justifyContent = "center";
      Section.style.justifyContent = "space-between";

      Section.querySelectorAll('*').forEach(Component => {
        // Set all components margin to zero
        Component.style.margin = 0;

        // If it's paragraph add its indent
        if (Component.tagName.toLowerCase() == 'p') {
          Component.style.textIndent = "2.5rem";
          Component.style.lineHeight = 1.25;
          Component.style.width = "100%";
          Component.style.wordBreak = "break-all";

          // Set Georgian font too;
          Component.style.fontFamily = "Noto Sans Georgian";
          Component.style.fontWeight = "light";
          Component.style.FontOpticalSizing = "auto";
          Component.style.fontVariationSettings = "\"wdth\" 100";
        } else if (Component.tagName.toLowerCase() == "h2" || Component.tagName.toLowerCase() == "h1") { // Elif, header text (h1 is for accecsiblity, but it's also header title)
          Component.style.fontSize = "250%";

          // Make text readable with some margins
          Component.style.marginBottom = "1.5rem";
        } else if (Component.tagName.toLowerCase() == "img") { // For images
          Component.style.borderRadius = "6px";
          Component.style.marginTop = "3.5rem";

          Component.style.opacity = .5;
          Component.style.pointerEvents = "none";

          Component.style.marginLeft = "auto";
          Component.style.marginRight = 0;

          // Component.style.position = "absolute";
          // Component.style.bottom = Padding;
          // if (i % 2 == 1) {
          //   Component.style.left = Padding;
          // } else {
          //   Component.style.right = Padding;
          // }

          Component.style.width = "100%";
        }

        // if (Component.tagName.toLowerCase() !== "img") {
        //   // Component.style.maxWidth = "55%";

        //   // If it have odd index reverse its flexbox
        //   if (i % 2 == 1)
        //     Component.style.marginLeft = "aut";
        // }
      });

      // Make only first vissible
      if (i) {
        Section.style.opacity = 0;
        Section.style.pointerEvents = "none";
      }
    });

    // Make comminication between slides
    (() => {
      // Define index
      let Index = 0;
      const DistanceOnTransition = "5.5";
      const TransitionEvent = new CustomEvent("TransitionStart");
      let Already = false;

      // Analyze keys and make actions
      function Analyze(Which) {
        switch (Which) {
          case "Right":
          case "Down":
            // Get current
            if (Index < Slides.querySelectorAll("section").length - 1) {
              // Translate
              Slides.querySelectorAll("section")[Index].style.translate = `0 -${DistanceOnTransition}rem`;

              setTimeout(() => {
                // Translate
                Slides.querySelectorAll("section")[Index - 1].style.translate = "0 0";
              }, 330);

              // Dispatch event of transition
              dispatchEvent(TransitionEvent);

              // Opacity
              Slides.querySelectorAll("section")[Index].style.opacity = 0;
              Slides.querySelectorAll("section")[Index + 1].style.opacity = 1;
              Slides.querySelectorAll("section")[Index + 1].style.translate = 0;

              // Ptr events too
              Slides.querySelectorAll("section")[Index].style.pointerEvents = "none";
              Slides.querySelectorAll("section")[++Index].style.pointerEvents = "unset";
            }
            console.log("Right.");
            break;

          case "Left":
          case "Up":
            if (Index > 0) {
              // Translate
              Slides.querySelectorAll("section")[Index].style.translate = `0 ${DistanceOnTransition}rem`;

              setTimeout(() => {
                // Translate
                Slides.querySelectorAll("section")[Index + 1].style.translate = "0 0";
              }, 330);

              // Dispatch event of transition
              dispatchEvent(TransitionEvent);

              // Opacity
              Slides.querySelectorAll("section")[Index].style.opacity = 0;
              Slides.querySelectorAll("section")[Index - 1].style.opacity = 1;
              Slides.querySelectorAll("section")[Index - 1].style.translate = 0;

              // Ptr events too
              Slides.querySelectorAll("section")[Index].style.pointerEvents = "none";
              Slides.querySelectorAll("section")[--Index].style.pointerEvents = "unset";
            }
            console.log("Left.");
            break;

          default:
            break;
        }
      }

      // Capture keys
      window.addEventListener("keydown", (Ev) => {
        // setTimeout(() => {
        //   Already = false;
        // }, 330);

        // Capture arrow keys
        if (Ev.key.includes("Arrow") && !Already) {
          Analyze(Ev.key.split("Arrow")[1]);
          // Already = true;
        }
      });
    })();

    // Informatical
    console.info("Presentation successfully built.")

    return {
      Then: () => {
        // ... Comming soon (maybe)
      }
    };
  },
  Intro: () => {
    // Check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Check if the user prefers light mode
    const prefersLightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    // Check if the user prefers no specific color scheme
    const prefersNoPreference = window.matchMedia && window.matchMedia('(prefers-color-scheme: no-preference)').matches;

    // Log the result
    if (prefersDarkMode) {
      console.log("User prefers dark mode.");
    } else if (prefersLightMode) {
      console.log("User prefers light mode.");
    } else if (prefersNoPreference) {
      console.log("User has no specific color scheme preference.");
    } else {
      console.log("Unable to detect user's color scheme preference.");
    }
  }
};

// Export as module
export default App;
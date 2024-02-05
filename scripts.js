  
//   LENIS SMOOTH SCROLL
const lenis = new Lenis({
    autoinit: true,
    duration: 1,
    orientation: "vertical",
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 1.5,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -15 * t)),
    useOverscroll: true,
    useControls: true,
    useAnchor: true,
    useRaf: true,
    infinite: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  
// STORY PAGE SCRIPTS
  const image2URL = 'https://uploads-ssl.webflow.com/655a5e3e34bc8a89769ff74e/6583f8350811f7701cc61e05_space.webp';
  let animationStarted = false;

  function isInViewport(element) {
      if (element) {
          const rect = element.getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.3
          );
      }
      return false;
  }

  function imageTransition(newImageUrl) {
      const currentImage = document.querySelector('.frame-image');
      if (currentImage) {
          currentImage.srcset = newImageUrl;
      }
  }

  window.addEventListener('scroll', () => {
      const triggerElement = document.getElementById('scrolly-text-3');
      if (isInViewport(triggerElement) && !animationStarted) {
          imageTransition(image2URL);
          animationStarted = true;
      }
  });
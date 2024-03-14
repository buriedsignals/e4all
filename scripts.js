function init() {
  setTimeout(() => {
    let triggers = ScrollTrigger.getAll();
    triggers.forEach(function (trigger) {
      trigger.kill();
    })
    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.refresh();
      
    const buttons = document.querySelectorAll('.card-button');

    function onMouseEnter(e) {
      const el = e.target.parentNode.parentNode;
      // const location = el.querySelector('.card-location');
      // const name = el.querySelector('.card-name');
      // const description = el.querySelector('.card-description');
      const image = el.querySelector('img');
      const buttonHover = el.querySelector('.card-button_hover');
      const buttonTextHover = el.querySelector('.card-button_text_hover');
      const timeline = gsap.timeline();
      // if (location) {
        // timeline.to(location, {
        //   duration: 0.6,
        //   position: "relative",
        //   left: "50%",
        //   x: "-50%",
        //   ease: "power4.inOut"
        // });
      // }
      // if (name) {
        // timeline.to(name, {
        //   duration: 0.6,
        //   position: "relative",
        //   left: "50%",
        //   x: "-50%",
        //   ease: "power4.inOut"
        // }, "<");
      // }
      // if (description) {
      //   timeline.to(description, {
      //     duration: 0.6,
      //     opacity: 0,
      //     y: "100px",
      //     ease: "power4.inOut"
      //   }, "<");
      // }
      timeline.to(image, {
        duration: 0.6,
        scale: 1.025,
        ease: "power4.inOut"
      }, "<");
      timeline.to(buttonHover, {
        duration: 0.6,
        x: "0%"
      }, "<");
      timeline.to(buttonTextHover, {
        duration: 0.6,
        x: "-0%"
      }, "<");
    }

    function onMouseLeave(e) {
      const el = e.target.parentNode.parentNode;
      // const location = el.querySelector('.card-location');
      // const name = el.querySelector('.card-name');
      // const description = el.querySelector('.card-description');
      const image = el.querySelector('img');
      const buttonHover = el.querySelector('.card-button_hover');
      const buttonTextHover = el.querySelector('.card-button_text_hover');
      const timeline = gsap.timeline();
      // timeline.to(location, {
      //   duration: 0.6,
      //   position: "relative",
      //   left: "0%",
      //   x: "0%",
      //   ease: "power4.inOut"
      // });
      // timeline.to(name, {
      //   duration: 0.6,
      //   position: "relative",
      //   left: "0%",
      //   x: "0%",
      //   ease: "power4.inOut"
      // }, "<");
      // timeline.to(description, {
      //   duration: 0.6,
      //   opacity: 1,
      //   y: "0px",
      //   ease: "power4.inOut"
      // }, "<");
      timeline.to(image, {
        duration: 0.6,
        scale: 1,
        ease: "power4.inOut"
      }, "<");
      timeline.to(buttonHover, {
        duration: 0.6,
        x: "100%"
      }, "<");
      timeline.to(buttonTextHover, {
        duration: 0.6,
        x: "-100%"
      }, "<");
    }

    function onMouseClick(e) {
      if (e.target.parentNode.parentNode.classList.contains('story-card')) {
        e.target.removeEventListener('mouseenter', onMouseEnter);
        e.target.removeEventListener('mouseleave', onMouseLeave);
      }
    }
    buttons.forEach(button => {
      button.addEventListener('mouseenter', onMouseEnter);
      button.addEventListener('mouseleave', onMouseLeave);
      button.addEventListener('click', onMouseClick);
    });
      
    if (document.querySelector('.page-wrapper').dataset.barbaNamespace != 'story') return

    /* --- TOM CODE --- */

    const currentImageTLTL = document.querySelector('#tltl-image');
    const currentImageGL = document.querySelector('#gl-image');
      // Selecting TLTL text elements
      const storyDateTLTL = document.querySelector('#story-date-tltl');
      const storyAgeTLTL = document.querySelector('#story-age-tltl');
      const sceneSettingTLTL = document.querySelector('#scene-setting-tltl');
      // Selecting GL text elements
      const storyDateGL = document.querySelector('#story-date-gl');
      const storyAgeGL = document.querySelector('#story-age-gl');
      const sceneSettingGL = document.querySelector('#scene-setting-gl');

      // Store the original srcsets and text content for TLTL and GL elements
      const originalImageTLTL = currentImageTLTL.srcset;
      const originalImageGL = currentImageGL.srcset;
      const originalDateTLTL = storyDateTLTL.textContent;
      const originalAgeTLTL = storyAgeTLTL.textContent;
      const originalSceneSettingTLTL = sceneSettingTLTL.textContent;
      const originalDateGL = storyDateGL.textContent;
      const originalAgeGL = storyAgeGL.textContent;
      const originalSceneSettingGL = sceneSettingGL.textContent;

    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    function imageTransition(urls, sectionId, triggerIndex) {
      let currentImage = sectionId === "TLTL" ? currentImageTLTL : currentImageGL;
      let srcsetToUse = triggerIndex >= 0 ? urls[triggerIndex] : (sectionId === "TLTL" ? originalImageTLTL : originalImageGL);

      currentImage.style.opacity = 0;
      setTimeout(() => {
        currentImage.srcset = srcsetToUse;
        setTimeout(() => {
          currentImage.style.opacity = 1;
        }, 10); // Short delay for fade-in effect
      }, 1000); // CSS transition duration
    }

    window.addEventListener('scroll', () => {
      const girlDiv = document.querySelector('div[id^="story-"]');
      if (girlDiv) {
        const girlName = girlDiv.id.substring(6);
        let st = window.scrollY || document.documentElement.scrollTop;
        let direction = st > lastScrollTop ? 'down' : 'up';

        let imagesTLTL = [], imagesGL = [], sceneSettingsTLTL = {}, sceneSettingsGL = {};
        // Populate imagesTLTL and imagesGL based on girlName
        switch (girlName) {
          case 'ayotola':
            imagesTLTL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f34ab414391d66eeb200_ayotola_tltl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f349595807266e8de4f2_ayotola_tltl_3.webp']; // Replace with actual URLs
            imagesGL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f34a7505cd1896f6c899_ayotola_gl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f34a4eadbe338452aa7f_ayotola_gl_3.webp'];
            sceneSettingsTLTL = {
              original: originalSceneSettingTLTL,
              updates: ['By the age of 30 Ayotola has four children, three girls and one boy.', 'With deadly floods becoming more frequent, Ayotola and her husband abandoned their house to the rising waters.']
            };
            sceneSettingsGL = {
              original: originalSceneSettingTLTL, // Assuming you meant to have an originalSceneSettingGL
              updates: ['Thanks to a government relocation program and her UBD, Ayotola and her parents have moved away from Lagos, threatened by the  rising waters. ', 'Aged 60, Ayotola retires but continues to serve on the advisory board of the multitrillion Nigeria Citizens Fund part time.']
            };
            break;
          case 'carla':
            imagesTLTL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f35543dc56d9428dea74_carla_tltl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f355e3e50611260717a3_carla_tltl_3.webp']; // Replace with actual URLs
            imagesGL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f356ccc4cb9c461e1697_carla_gl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f35543ec5cef0aaa410a_carla_gl_3.webp'];
            sceneSettingsTLTL = {
              original: originalSceneSettingTLTL,
              updates: ['Carla works in a successful architecture business. She moves north to escape the extreme heat, but she feels it follows her no matter where she goes.', 'Carla still works long hours. Her sedentary lifestyle and processed food diet make her vulnerable to health conditions. She dies of diabetes at age 65.']
            };
            sceneSettingsGL = {
              original: originalSceneSettingTLTL, // Assuming you meant to have an originalSceneSettingGL
              updates: ['In Seattle, Carla has trained as an architect and designs passive homes for community housing, while her partner is a corruption analyst. ', 'Aged 60, Carla is able to retire. She lives in a passive home that she designed herself and still gets the UBD from the Citizen’s Fund.']
            };
            break;
            case 'samiha':
            imagesTLTL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f37c8f26f56121a2268a_samiha_tltl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f37c520cbe484ca10f75_samiha_tltl_3.webp']; // Replace with actual URLs
            imagesGL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f37c3ab226220894f482_samiha_gl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f37cfc8b90e05abdc3a4_samiha_gl_3.webp'];
            sceneSettingsTLTL = {
              original: originalSceneSettingTLTL,
              updates: ['Samiha has three children but lost her job in a clothes factory as Dhaka is progressively abandoned to the flash floods. ', 'Samiha lives in a settlement camp just outside of Dinajpur.']
            };
            sceneSettingsGL = {
              original: originalSceneSettingTLTL, // Assuming you meant to have an originalSceneSettingGL
              updates: ['Samiha is now a food engineer, developing saltwater-resistant grains to increase yields.', 'Samiha’s retirement is financed through the national pensions scheme and UBD, and she is writing a history of Bangladeshi women’s rights.']
            };
            break;
            case 'shu':
            imagesTLTL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f3649878795361febe6b_shu_tltl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f364acd492563da6fdef_shu_tltl_3.webp']; // Replace with actual URLs
            imagesGL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f3642acb33427e4d4df3_shu_gl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f365ea46f8e32a736a9b_shu_gl_3.webp'];
            sceneSettingsTLTL = {
              original: originalSceneSettingTLTL,
              updates: ['Shu is now a hydrology engineer. Frequent floods and droughts threaten the food and economic security of hundreds of millions of people.', 'Shu, by now a legend among hydrologists due to her flood-management skills, occasionally still teaches Chinese students as professor emeritus.']
            };
            sceneSettingsGL = {
              original: originalSceneSettingTLTL, // Assuming you meant to have an originalSceneSettingGL
              updates: ['Shu has chosen not to have kids. She spends her free time managing a huge fleet of shared electric carpools.', 'Shu reflects on how they solved their river pollution challenges in China and is still amazed that river dolphins thrive in the waters of her city.']
            };
            break;
          // Add more cases as needed
        }

      function textTransition(section, triggerIndex) {
          const dates = [originalDateTLTL, '2050', '2080'];
          const ages = [originalAgeTLTL, '50', '80'];
          let settingsUpdates, originalDate, originalAge, originalSetting, storyDate, storyAge, sceneSetting;

          // Select the correct scene settings based on section
          if (section === 'TLTL') {
              settingsUpdates = sceneSettingsTLTL.updates;
              originalDate = originalDateTLTL;
              originalAge = originalAgeTLTL;
              originalSetting = originalSceneSettingTLTL;
              storyDate = storyDateTLTL;
              storyAge = storyAgeTLTL;
              sceneSetting = sceneSettingTLTL;
          } else {
              settingsUpdates = sceneSettingsGL.updates;
              originalDate = originalDateGL;
              originalAge = originalAgeGL;
              originalSetting = originalSceneSettingGL;
              storyDate = storyDateGL;
              storyAge = storyAgeGL;
              sceneSetting = sceneSettingGL;
          }

          // Apply the updates if triggerIndex is valid, otherwise revert to original
          storyDate.textContent = triggerIndex >= 0 ? dates[triggerIndex + 1] : originalDate;
          storyAge.textContent = triggerIndex >= 0 ? ages[triggerIndex + 1] : originalAge;
          sceneSetting.textContent = triggerIndex >= 0 ? settingsUpdates[triggerIndex] : originalSetting;
      }

    ['TLTL', 'GL'].forEach((section) => {
          let images = section === 'TLTL' ? imagesTLTL : imagesGL;
          // Adjusted to check only for the defined trigger points
          for (let i = 4; i >= 2; i -= 2) {
            let triggerElementId = `${girlName}-${section.toLowerCase()}-${i}`;
            let triggerElement = document.getElementById(triggerElementId);

            if (triggerElement && isInViewport(triggerElement)) {
              let index = (i / 2) - 1; // Calculate index based on trigger element

              if (direction === 'up') {
                if (i === 2) {
                  // If at the first trigger, revert to the original image
                  imageTransition([], section, -1);
                  textTransition(section, -1);
                } else {
                  // If not at the first trigger but scrolling up, show the first image in the array
                  imageTransition(images, section, 0);
                  textTransition(section, 0);
                }
              } else {
                // Logic for scrolling down: change the image based on the current index
                imageTransition(images, section, index);
                textTransition(section, index);
              }

              break; // Break after finding the first visible trigger
            }
          }
      });

        lastScrollTop = st <= 0 ? 0 : st; // Update lastScrollTop for the next scroll event
      }
    }, false);

    /* ---------------- */
      
    gsap.registerPlugin(ScrollTrigger);

    const elDate = document.querySelector('.transition_date');
    const dateStart = parseInt(elDate.dataset.start);
    const dateEnd = parseInt(elDate.dataset.end);
    let html = "";
    for (let i = 0; i < (dateEnd - dateStart) + 1; i++) {
      html += `<span>${ dateEnd - i }</span>`
    }
    elDate.innerHTML = html;

    ScrollTrigger.defaults({
      markers: false
    });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-story-transition",
        start: "top top",
        end: `+=300% bottom`,
        scrub: true,
        pin: true,
        pinSpacing: true
      }
    });
    tl.set(".transition_date span", {
      y: "50vh",
      opacity: 0,
      ease: "none"
    });
    tl.set(".diagram-arrows_flex", {
      opacity: 0,
      ease: "none"
    });
    tl.to(".transition_date span", {
      y: () => `-${ (((document.querySelectorAll(".transition_date span").length) * document.querySelectorAll(".transition_date span")[0].offsetHeight)-(window.innerHeight/4)) }px`,
      ease: "none"
    });
    tl.to(".transition_date span", {
      opacity: 1,
      stagger: 0.001,
      ease: "none"
    }, "<");
    tl.to(".diagram-arrows_flex", {
      opacity: 1,
      ease: "none"
    });
    tl.to(".story-transition-background", {
      x: "0%",
      ease: "none"
    }, ">");
  }, 0);
}
function barbaInit() {
  function leaving(el) {
    const img = el.querySelector('img');
    const content = el.querySelector('.card-content');
    const timeline = gsap.timeline();
    timeline.fromTo(el, {
      position: "fixed",
      top: el.getBoundingClientRect().top + "px",
      left: el.getBoundingClientRect().left + "px",
      width: el.getBoundingClientRect().width + "px",
      zIndex: 999
    }, {
      duration: 0.8,
      top: "0px",
      left: "0px",
      width: "100vw",
      height: "100vh",
      ease: "power4.inOut"
    });
    timeline.to(img, {
      scale: 1,
      ease: "none"
    }, 0.1, "-=0.8");
    timeline.to(img, {
      borderRadius: 0,
      ease: "power4.inOut"
    }, 0.5, "-=0.8");
    timeline.to(content, {
      opacity: 0,
      ease: "power4.inOut"
    }, 0.05, "-=0.8");
    return timeline
  }

  function entering(el) {
    return gsap.fromTo(el.querySelector('.girl-hero'), {
      opacity: 0,
      y: "100px"
    }, {
      opacity: 1,
      y: "0px",
      ease: "power1.out"
    });
  }
  barba.hooks.before(() => {
    document.querySelector('html').classList.add('is-transitioning');
    barba.wrapper.classList.add('is-animating');
  });
  barba.hooks.after(() => {
    document.querySelector('html').classList.remove('is-transitioning');
    barba.wrapper.classList.remove('is-animating');
  });
  barba.hooks.enter(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require( 'ix2' ).init();
    document.dispatchEvent( new Event( 'readystatechange' ) );
    window.scrollTo(0, 0);
    init();
  });
  barba.init({
    transitions: [{
      async leave(e) {
        if (e.trigger.parentNode == undefined) return
        const el = e.trigger.parentNode.parentNode
        if (el.classList.contains('story-card')) {
          await leaving(el);
        } else {
          return true
        }
      },
      enter(e) {
        if (e.trigger.parentNode == undefined) return
        const el = e.trigger.parentNode.parentNode
        if (el.classList.contains('story-card')) {
          entering(e.next.container);
        } else {
          return true
        }
      }
    }]
  })

}
window.addEventListener('load', function() {
  barbaInit();
  init();
});
window.addEventListener('DOMContentLoaded', () => {
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
            updates: ['Lorem ipsum dolor sit TLTL Ayotola 1', 'Dolor sit amet TLTL Ayotola 2']
          };
          sceneSettingsGL = {
            original: originalSceneSettingTLTL, // Assuming you meant to have an originalSceneSettingGL
            updates: ['Lorem ipsum dolor sit GL Ayotola 1', 'Dolor sit amet GL Ayotola 2']
          };
          break;
        case 'carla':
          imagesTLTL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f35543dc56d9428dea74_carla_tltl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f355e3e50611260717a3_carla_tltl_3.webp']; // Replace with actual URLs
          imagesGL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f356ccc4cb9c461e1697_carla_gl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f35543ec5cef0aaa410a_carla_gl_3.webp'];
          sceneSettingsTLTL = {
            original: originalSceneSettingTLTL,
            updates: ['Lorem ipsum dolor sit TLTL Ayotola 1', 'Dolor sit amet TLTL Ayotola 2']
          };
          sceneSettingsGL = {
            original: originalSceneSettingTLTL, // Assuming you meant to have an originalSceneSettingGL
            updates: ['Lorem ipsum dolor sit GL Ayotola 1', 'Dolor sit amet GL Ayotola 2']
          };
          break;
          case 'samiha':
          imagesTLTL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f37c8f26f56121a2268a_samiha_tltl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f37c520cbe484ca10f75_samiha_tltl_3.webp']; // Replace with actual URLs
          imagesGL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f37c3ab226220894f482_samiha_gl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f37cfc8b90e05abdc3a4_samiha_gl_3.webp'];
          sceneSettingsTLTL = {
            original: originalSceneSettingTLTL,
            updates: ['Lorem ipsum dolor sit TLTL Ayotola 1', 'Dolor sit amet TLTL Ayotola 2']
          };
          sceneSettingsGL = {
            original: originalSceneSettingTLTL, // Assuming you meant to have an originalSceneSettingGL
            updates: ['Lorem ipsum dolor sit GL Ayotola 1', 'Dolor sit amet GL Ayotola 2']
          };
          break;
          case 'shu':
          imagesTLTL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f3649878795361febe6b_shu_tltl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f364acd492563da6fdef_shu_tltl_3.webp']; // Replace with actual URLs
          imagesGL = ['https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f3642acb33427e4d4df3_shu_gl_2.webp', 'https://uploads-ssl.webflow.com/65c0a1dcf54093fc5e3ac910/65c0f365ea46f8e32a736a9b_shu_gl_3.webp'];
          sceneSettingsTLTL = {
            original: originalSceneSettingTLTL,
            updates: ['Lorem ipsum dolor sit TLTL Ayotola 1', 'Dolor sit amet TLTL Ayotola 2']
          };
          sceneSettingsGL = {
            original: originalSceneSettingTLTL, // Assuming you meant to have an originalSceneSettingGL
            updates: ['Lorem ipsum dolor sit GL Ayotola 1', 'Dolor sit amet GL Ayotola 2']
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
});

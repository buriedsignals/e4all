window.addEventListener('DOMContentLoaded', () => {
const currentImage1 = document.querySelector('.frame-image');
const currentImage2 = document.querySelector('.frame-image-2');
const originalImage1 = currentImage1.srcset;
    const originalImage2 = currentImage2.srcset;

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

function imageTransition(url, scrollyId) {
let currentImage;

if (scrollyId === "scrolly-1") {
    currentImage = currentImage1;
} else if (scrollyId === "scrolly-2") {
    currentImage = currentImage2;
}

if (currentImage) {
    // Fade out the current image
    currentImage.style.opacity = 0;

    // Change the image srcset after a short delay
    setTimeout(() => {
    currentImage.srcset = url;

    // Fade the image back in
    setTimeout(() => {
        currentImage.style.opacity = 1;
    }, 100); // Delay for the srcset to take effect
    }, 1000); // Matches the CSS transition duration
}
}

window.addEventListener('scroll', () => {
    const chapterDiv = document.querySelector('div[id^="chapter-"]');
    if (chapterDiv) {
    const chapterId = chapterDiv.id;
    const chapterNumber = chapterId.split('-')[1];
    const triggerElement1Id = `chapter${chapterNumber}-scrolly1-text3`;
    const triggerElement2Id = `chapter${chapterNumber}-scrolly2-text3`;
    const triggerElement1 = document.getElementById(triggerElement1Id);
    const triggerElement2 = document.getElementById(triggerElement2Id);
    let st = window.pageYOffset || document.documentElement.scrollTop;

    // Define image variables for each chapter
    let imageScrolly1, imageScrolly2;
    switch (chapterId) {
        case 'chapter-1':
        imageScrolly1 = 'https://uploads-ssl.webflow.com/655a5e3e34bc8a89769ff74e/6583f8350811f7701cc61e05_space.webp'; 
        imageScrolly2 = 'https://uploads-ssl.webflow.com/655a5e3e34bc8a89769ff74e/65b226a16c462911f79830ce_bedroom.webp';
        break;
        case 'chapter-2':
        imageScrolly1 = 'https://uploads-ssl.webflow.com/655a5e3e34bc8a89769ff74e/65b226a261547626a7a3e9dd_beaming.webp';
        imageScrolly2 = 'https://uploads-ssl.webflow.com/655a5e3e34bc8a89769ff74e/65b228b5ef2fd984b62ebb5c_London.webp'; // URL 
        break;
        // Add more cases as needed
    }

    if (isInViewport(triggerElement1)) {
        if (st > lastScrollTop) {
        // Scrolling down in triggerElement1's viewport
        imageTransition(imageScrolly1, "scrolly-1");
        } else {
        // Scrolling up in triggerElement1's viewport
        imageTransition(originalImage1, "scrolly-1");
        }
        } else if (isInViewport(triggerElement2)) {
        if (st > lastScrollTop) {
        imageTransition(imageScrolly2, "scrolly-2");
        } else {
        imageTransition(originalImage2, "scrolly-2");
        }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }
}, false);
});
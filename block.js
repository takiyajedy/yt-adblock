// Hide banner ads
setInterval(() => {
    const bannerAds = document.querySelectorAll('.ytp-ad-image-overlay, .ytp-ad-overlay-container, .ytp-ad-overlay-slot');
    bannerAds.forEach(ad => ad.style.display = "none");

    // Skip video ads
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) skipButton.click();

    // Mute ad audio when playing ads
    const adBadge = document.querySelector('.ad-showing');
    if (adBadge) {
        const video = document.querySelector('video');
        if (video) video.playbackRate = 16; // lajukan iklan 16x
    }
}, 200);

function hideAds() {
    const adSelectors = [
        '.ytp-ad-overlay-container',
        '.ytp-ad-overlay-image',
        '.ytp-ad-overlay-slot',
        '.ytp-ad-image-overlay',
        '.ytp-ad-text-overlay',
        '.video-ads',
        '.ytp-ad-module'
    ];

    adSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            el.style.display = "none";
        });
    });
}

function skipAds() {
    // Auto Skip Button
    const skipBtn = document.querySelector('.ytp-ad-skip-button');
    if (skipBtn) skipBtn.click();

    // Auto Close Overlay Ads
    const closeBtn = document.querySelector('.ytp-ad-overlay-close-button');
    if (closeBtn) closeBtn.click();

    // Lajukan iklan
    const adShowing = document.querySelector('.ad-showing');
    if (adShowing) {
        const video = document.querySelector('video');
        if (video) {
            video.playbackRate = 16;
            video.muted = true;
        }
    }
}

function cleanHomeAds() {
    document.querySelectorAll('ytd-rich-item-renderer').forEach(item => {
        const adBadge = item.querySelector('#ad-badge');
        if (adBadge) item.remove();
    });
}

setInterval(() => {
    hideAds();
    skipAds();
    cleanHomeAds();
}, 200);

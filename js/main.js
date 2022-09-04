// ==========MOBILE NAV============================================================================
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNavWrapper = document.querySelector('.mobile-nav_wrapper');

mobileNavButton.addEventListener('click', function () {
    mobileNavIcon.classList.toggle('active');
    mobileNavWrapper.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});
// ==========MOBILE NAV============================================================================

// ==========VIDEO NAV============================================================================

const videoButton = document.querySelector('#video-story-button');
const videoButtonIcon = document.querySelector('#video-story-button-icon');
const videoOverlay = document.querySelector('.story_video-overlay');
const videoFile = document.querySelector('#video-story');

videoButton.addEventListener('click', function () {
    function toggleOverlay(event) {
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden');
        } else {
            videoOverlay.classList.remove('hidden');
        }
    }
    if (videoFile.paused) {
        videoFile.play();
        videoButtonIcon.src = './img/SVG/pause-button-icon.svg';
        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;
    } else {
        videoFile.pause();
        videoButtonIcon.src = './img/SVG/play-button-icon.svg';
        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;
    }
});

// ==========VIDEO NAV============================================================================

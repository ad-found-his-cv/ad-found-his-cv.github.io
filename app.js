document.addEventListener('DOMContentLoaded', function() {
    const newspaper = document.getElementById('newspaper');
    const turnSound = document.getElementById('page-turn-audio');

    // Initialize the PageFlip instance with proportions matching the Canva design
    const pageFlip = new St.PageFlip(newspaper, {
        width: 420, // Base width (aspect ratio 1:1.414)
        height: 594, // Base height
        size: "stretch", // Allows the flipbook to be responsive
        minWidth: 315,
        maxWidth: 800,
        minHeight: 420,
        maxHeight: 1131,
        maxShadowOpacity: 0.4,
        showCover: true,
        mobileScrollSupport: false,
        usePortrait: true // Automatically switches to 1-page view on mobile screens
    });

    // Load pages from the DOM components
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    // Hook up the audio to the flip event
    pageFlip.on('flip', (e) => {
        if (turnSound) {
            turnSound.currentTime = 0; 
            turnSound.play().catch(err => {
                console.log("Browser prevented audio play until user interaction.");
            });
        }
    });
});
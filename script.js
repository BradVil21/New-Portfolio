window.addEventListener("load",function(){
    this.setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block"
        }
        , 800
    )
});

// selecting the close button within html
document.querySelector(".close").addEventListener
("click", function() {
    document.querySelector(".popup").style.display ="none";
});

/* Toggle Menu */
const menuToggle = document.querySelector('.menu-toggle');
const navSection = document.querySelector('.nav-section');

menuToggle.addEventListener('click', () => {
    navSection.classList.toggle('active');
});

// Video

// Get all video elements and hover text elements
const videos = document.querySelectorAll(".video-container video");
const hoverTexts = document.querySelectorAll(".video-container .hover-text");

// Loop through each video element
videos.forEach((video, index) => {
    // Add event listeners for mouse enter and leave events
    video.addEventListener("mouseenter", () => {
        video.play();
        hoverTexts[index].classList.remove("active");
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        hoverTexts[index].classList.add("active");
    });
});

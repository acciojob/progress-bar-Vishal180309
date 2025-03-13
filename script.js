//your JS code here. If required.
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentStep = 1;

nextBtn.addEventListener("click", () => {
    currentStep++;

    if (currentStep > circles.length) {
        currentStep = circles.length;
    }

    update();
});

prevBtn.addEventListener("click", () => {
    currentStep--;

    if (currentStep < 1) {
        currentStep = 1;
    }

    update();
});

function update() {
    // Update active circles
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    // Update progress bar width
    const progressWidth = ((currentStep - 1) / (circles.length - 1)) * 100;
    progress.style.width = `${progressWidth}%`;

    // Enable or disable buttons based on progress
    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === circles.length;
}


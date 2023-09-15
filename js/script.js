const followingImage = document.getElementById("following-image");

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate the distance between the mouse cursor and the image
    const rect = followingImage.getBoundingClientRect();
    const imageCenterX = rect.left + rect.width / 2;
    const imageCenterY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
        Math.pow(mouseX - imageCenterX, 2) + Math.pow(mouseY - imageCenterY, 2)
    );

    // Calculate the new image size based on the distance
    const maxSize = 20; // Adjust the maximum size as needed
    const minSize = 50;  // Adjust the minimum size as needed
    const newSize = Math.min(maxSize, Math.max(minSize, maxSize - distance));

    // Update the image size and position
    followingImage.style.transform = `translate(-50%, -50%) scale(${newSize / 100})`;
    followingImage.style.left = mouseX + "px";
    followingImage.style.top = mouseY + "px";
});

// Function to update image and text
function upDate(previewPic) {
  // Get the image and text elements
  var image = document.getElementById("image");
  var text = document.getElementById("imageText");

  // Change the text
  text.innerHTML = previewPic.alt;

  // Change the background image
  image.style.backgroundImage = "url('" + previewPic.src + "')";

  // Log information for debugging
  console.log("Alt: " + previewPic.alt);
  console.log("Source: " + previewPic.src);
}

// Function to undo changes
function undo() {
  // Get the image and text elements
  var image = document.getElementById("image");
  var text = document.getElementById("imageText");

  // Reset the background image
  image.style.backgroundImage = "url('')";

  // Reset the text
  text.innerHTML = "Hover over an image below to display here.";
}

// Add event listeners to your HTML elements
document.getElementById("preview1").addEventListener("mouseover", function () {
  upDate(this);
});

document.getElementById("preview2").addEventListener("mouseover", function () {
  upDate(this);
});

// Add event listener for undo
document.getElementById("image").addEventListener("mouseout", function () {
  undo();
});

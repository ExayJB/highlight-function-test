/*function handleImageHover(event) {
    const hoveredImage = event.target;
  
    // Get all the images within the container
    const images = document.querySelectorAll("#image-container img");
  
    images.forEach((image) => {
      // Change the image source based on the hover event
      if (image === hoveredImage) {
        image.src = image.src.replace("-blue.png", "-gray.png");
      } else {
        image.src = image.src.replace("-gray.png", "-blue.png");
      }
    });
  }
  
  // Attach the hover event to the image container
  const imageContainer = document.getElementById("image-container");
  imageContainer.addEventListener("mouseover", handleImageHover);
  imageContainer.addEventListener("mouseout", () => {
    const images = document.querySelectorAll("#image-container img");
    images.forEach((image) => {
      image.src = image.src.replace("-gray.png", "-blue.png");
    });
  });
  *//*

  function handleImageHover(event) {
    const hoveredImage = event.target;
  
    // Get all the images within the container
    const images = document.querySelectorAll("#image-container img");
  
    images.forEach((image) => {
      if (image === hoveredImage) {
        image.classList.add("gray");
      } else {
        image.classList.remove("gray");
      }
    });
  }
  
  // Attach the hover event to the image container
  const imageContainer = document.getElementById("image-container");
  imageContainer.addEventListener("mouseover", handleImageHover);
  imageContainer.addEventListener("mouseout", () => {
    const images = document.querySelectorAll("#image-container img");
    images.forEach((image) => {
      image.classList.remove("gray");
    });
  });

  
  *//*

  var originalImages = {};

  function changeImage(img) {
    if (!originalImages[img.alt]) {
      originalImages[img.alt] = img.src;
      img.src = "new_image.jpg"; // Replace with the path to the new image
    }
  }
  
  function restoreImage(img) {
    if (originalImages[img.alt]) {
      img.src = originalImages[img.alt];
      delete originalImages[img.alt];
    }
  }
  
  document.addEventListener("click", function(event) {
    var images = document.getElementsByClassName("image");
    for (var i = 0; i < images.length; i++) {
      restoreImage(images[i]);
    }
  });*//*

  document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('#imageContainer img');
  
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('mouseover', function() {
        var imageName = this.src.split('-')[0];
        this.src = imageName + '-gray.png';
        changeOtherImages(imageName, '-gray.png');
      });
  
      images[i].addEventListener('mouseout', function() {
        var imageName = this.src.split('-')[0];
        this.src = imageName + '-blue.png';
        changeOtherImages(imageName, '-blue.png');
      });
    }
  
    document.addEventListener('click', function(event) {
      if (!event.target.matches('#imageContainer img')) {
        resetImages();
      }
    });
  
    function changeOtherImages(imageName, color) {
      for (var i = 0; i < images.length; i++) {
        var currentName = images[i].src.split('-')[0];
        if (currentName !== imageName) {
          images[i].src = currentName + color;
        }
      }
    }
  
    function resetImages() {
      for (var i = 0; i < images.length; i++) {
        var imageName = images[i].src.split('-')[0];
        images[i].src = imageName + '-blue.png';
      }
    }
  });*//*

  document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('#imageContainer img');
  
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('mouseover', function() {
        var imageName = this.src.split('-')[0];
        changeOtherImages(imageName, '-gray.png');
      });
  
      images[i].addEventListener('mouseout', function() {
        var imageName = this.src.split('-')[0];
        changeOtherImages(imageName, '-blue.png');
      });
  
      images[i].addEventListener('click', function() {
        var imageName = this.src.split('-')[0];
        this.src = imageName + '-blue.png';
        changeOtherImages(imageName, '-gray.png');
      });
    }
  
    document.addEventListener('click', function(event) {
      if (!event.target.matches('#imageContainer img')) {
        resetImages();
      }
    });
  
    function changeOtherImages(imageName, suffix) {
      for (var i = 0; i < images.length; i++) {
        var currentName = images[i].src.split('-')[0];
        if (currentName !== imageName) {
          images[i].src = currentName + suffix;
        }
      }
    }
  
    function resetImages() {
      for (var i = 0; i < images.length; i++) {
        var imageName = images[i].src.split('-')[0];
        images[i].src = imageName + '-blue.png';
      }
    }
  });
  *//*

  document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('#imageContainer img');
  
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('mouseover', function() {
        changeOtherImages(this, '-gray.png');
      });
  
      images[i].addEventListener('mouseout', function() {
        changeOtherImages(this, '-blue.png');
      });
  
      images[i].addEventListener('click', function() {
        resetImages();
        this.src = this.src.split('-')[0] + '-gray.png';
      });
    }
  
    document.addEventListener('click', function(event) {
      if (!event.target.matches('#imageContainer img')) {
        resetImages();
      }
    });
  
    function changeOtherImages(selectedImage, suffix) {
      for (var i = 0; i < images.length; i++) {
        if (images[i] !== selectedImage) {
          images[i].src = images[i].src.split('-')[0] + suffix;
        }
      }
    }
  
    function resetImages() {
      for (var i = 0; i < images.length; i++) {
        images[i].src = images[i].src.split('-')[0] + '-blue.png';
      }
    }
  });*/

  document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('#imageContainer img');
    var clickedImage = null;
  
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('mouseover', function() {
        if (clickedImage !== this) {
          changeOtherImages(this, '-gray.png');
        }
      });
  
      images[i].addEventListener('mouseout', function() {
        if (clickedImage !== this) {
          changeOtherImages(this, '-blue.png');
        }
      });
  
      images[i].addEventListener('click', function() {
        if (clickedImage !== null) {
          clickedImage.src = clickedImage.src.split('-')[0] + '-gray.png';
        }
  
        clickedImage = this;
        clickedImage.src = clickedImage.src.split('-')[0] + '-blue.png';
      });
    }
  
    document.addEventListener('click', function(event) {
      if (!event.target.matches('#imageContainer img')) {
        resetImages();
      }
    });
  
    function changeOtherImages(selectedImage, suffix) {
      for (var i = 0; i < images.length; i++) {
        if (images[i] !== selectedImage) {
          images[i].src = images[i].src.split('-')[0] + suffix;
        }
      }
    }
  
    function resetImages() {
      for (var i = 0; i < images.length; i++) {
        images[i].src = images[i].src.split('-')[0] + '-blue.png';
      }
  
      clickedImage = null;
    }
  });
  
  
  
  
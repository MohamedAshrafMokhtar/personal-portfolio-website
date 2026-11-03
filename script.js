document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const modalGallery = document.getElementById("modal-gallery");
    const modalVideo = document.getElementById("modal-video");
    const closeBtn = document.querySelector(".close");
  
    // Function to show modal with multiple images
    function showModal(title, text, imgArray = [], videoSrc = null) {
      modalTitle.textContent = title;
      modalText.textContent = text;
  
      // Clear old images
      modalGallery.innerHTML = "";
  
      // Add new images if provided
      if (imgArray.length > 0) {
        imgArray.forEach(src => {
          const img = document.createElement("img");
          img.src = src;
          modalGallery.appendChild(img);
        });
      }
  
      // Handle video
      if (videoSrc) {
        modalVideo.querySelector("source").src = videoSrc;
        modalVideo.load();
        modalVideo.style.display = "block";
      } else {
        modalVideo.style.display = "none";
      }
  
      modal.style.display = "block";
    }
  
    // Button events
    document.querySelector(".B1").addEventListener("click", () => {
      showModal(
        "Robotic Maze Solver",
        "I developed an autonomous robotic car capable of self-navigation through complex mazes using sensor feedback and control algorithms. The system is designed to detect and locate a missing object within the maze, approach it with precision, and retrieve it using a custom magnetic mechanism. Once secured, the car successfully returns the object to the maze exit without human intervention, demonstrating problem-solving, robotics integration, and intelligent motion planning.",
        ["images/roboticPhoto.JPG"] // multiple images
      );
    });
  
    document.querySelector(".B2").addEventListener("click", () => {
      showModal(
        "Student Management System",
        "A full-stack task manager app with Spring Boot & MySQL.",
        [],
        "Student Mang/Student System with menu.mov"
      );
    });
  
    document.querySelector(".B3").addEventListener("click", () => {
      showModal(
        "Windows-Based Grading System Application",
        "I developed a **Windows desktop application** using C++ and the Windows API to create a user-friendly grading system. This project highlights my skills in GUI development, algorithms, and object-oriented design. ",
        ["images/Screenshot 2025-08-24 at 11.50.34 AM.png"]
      );
    });
  
    // Close modal
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close when clicking outside
    window.addEventListener("click", (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    });
  });
  
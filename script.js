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
      ["type images/roboticPhoto.JPG"] // multiple images
    );
  });

  document.querySelector(".B2").addEventListener("click", () => {
    showModal(
      "Student Management System",
      "A full-stack task manager app with Spring Boot & MySQL.",
      [],
      "Student System with menu.mp4"
    );
  });

  document.querySelector(".B3").addEventListener("click", () => {
    showModal(
      "Windows-Based Grading System Application",
      "I developed a **Windows desktop application** using C++ and the Windows API to create a user-friendly grading system. This project highlights my skills in GUI development, algorithms, and object-oriented design. ",
      ["type images/gradingsys.png"]
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

  // Mouse Glow effect for both cards
  const cards = document.querySelectorAll(".glow-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });

    // Tap / touch effect for mobile devices
    card.addEventListener("click", () => {
      card.style.transform = "scale(0.98)";
      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 150);
    });
  });
});


    // Interactive hover/tap effect for Availability Bar
    const bar = document.querySelector(".availability-bar");
    if (bar) {
      bar.addEventListener("mouseenter", () => {
        bar.style.transform = "translateY(-4px) scale(1.02)";
        bar.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
        bar.style.boxShadow = "0 15px 30px rgba(255, 120, 73, 0.25)";
      });

      bar.addEventListener("mouseleave", () => {
        bar.style.transform = "translateY(0) scale(1)";
        bar.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.15)";
      });
    }

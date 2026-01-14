function addCustomCloseButton() {
  // Check if custom close button already exists
  if (document.getElementsByClassName("custom-modal-close")) {
    console.log("Custom close button already exists");
    return;
  }

  // Find the modal
  const modal = document.getElementById("close");
  if (!modal) {
    console.log("Modal not found");
    return;
  }

  console.log("Adding custom close button");

  // Create custom close button
  const closeBtn = document.createElement("button");
  closeBtn.id = "custom-modal-close";
  closeBtn.innerHTML = "✕";
  closeBtn.title = "Close";
  closeBtn.style.cssText = `
    position: fixed !important;
    top: 20px !important;
    right: 20px !important;
    width: 50px !important;
    height: 50px !important;
    background-color: #0000 !important;
    color: white !important;
    border: 3px solid white !important;
    border-radius: 50% !important;
    font-size: 28px !important;
    font-weight: bold !important;
    cursor: pointer !important;
    z-index: 999999 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: all 0.3s ease !important;
    box-shadow: 0 4px 8px rgba(0,0,0,0.5) !important;
  `;

  closeBtn.onmouseover = () => {
    closeBtn.style.backgroundColor = "#0000!important";
    closeBtn.style.transform = "scale(1.2) !important";
  };

  closeBtn.onmouseout = () => {
    closeBtn.style.backgroundColor = "#00000 !important";
    closeBtn.style.transform = "scale(1) !important";
  };

  closeBtn.onclick = () => {
    console.log("Close button clicked");
    // Try to find and click the original close button
    const originalClose = document.querySelector(".close") as HTMLElement;
    if (originalClose) {
      console.log("Clicking original close button");
      originalClose.click();
    }
    // Hide the modal
    modal.style.display = "none";
    // Remove custom button
    closeBtn.remove();
  };

  document.body.appendChild(closeBtn);
  console.log("Custom close button added");
}

export function openWebinarJam() {
  // Click the WebinarJam embed register button
  const webinarButton = document.getElementById("js-reg-btn") as HTMLElement;

  if (webinarButton) {
    webinarButton.click();

    // Wait for modal to appear and add custom close button
    const checkModal = setInterval(() => {
      const modal = document.getElementById("registration-modal");
      if (modal && modal.offsetParent !== null) {
        clearInterval(checkModal);
        addCustomCloseButton();
      }
    }, 100);

    // Stop checking after 5 seconds
    setTimeout(() => clearInterval(checkModal), 5000);
  } else {
    // Fallback: open in new tab if button not found
    window.open(
      "https://event.webinarjam.com/register/ykznk5ty",
      "_blank",
      "noopener,noreferrer"
    );
  }
}

function toggleImportantNotice() {
  const content = document.getElementById("toggleContent");
  const icon = document.getElementById("toggleIcon");
  const isVisible = content.style.display === "block";

  content.style.display = isVisible ? "none" : "block";
  icon.textContent = isVisible ? "+" : "−";
}

// Show button when page is scrolled down
window.onscroll = function() {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top when button clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
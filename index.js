// Sticky Navbar
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// navbar dropdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("dropdownNavbarLink");
  const dropdownMenu = document.getElementById("dropdownNavbar");

  dropdownToggle.addEventListener("click", function () {
    dropdownMenu.classList.toggle("hidden");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navbarDropdown = document.getElementById("navbar-dropdown");

  menuToggle.addEventListener("click", function () {
    // Toggle the 'hidden' class on the menu
    navbarDropdown.classList.toggle("hidden");
  });
});

// Cursor
function loadCursorScript() {
  var script = $("<script>").attr("src", "./cursor.js");
  $("body").append(script);
}
function checkScreenSizeAndLoadScript() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    loadCursorScript();
  } else {
    $('script[src="./cursor.js"]').remove();
  }
}
checkScreenSizeAndLoadScript();
$(window).resize(checkScreenSizeAndLoadScript);

// Right click disabler
$("img").on("contextmenu", function (e) {
  e.preventDefault();
});

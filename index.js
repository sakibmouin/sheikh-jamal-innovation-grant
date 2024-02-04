// Sticky Navbar
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// navbar dropdown

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

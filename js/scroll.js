let prevScrollPosition = window.pageYOffset;

window.onscroll = function () {

  let currentScrollPosition = window.pageYOffset;

  if (prevScrollPosition > currentScrollPosition) {

    document.querySelector("header").style.display = "none";
  } else {
    document.querySelector("header").style.display = "block";
  }
  prevScrollPosition = currentScrollPosition;
}
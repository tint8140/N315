/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");

  // MODEL.getMyVariable(pageID);

  if (pageID) {
    navToPage("home");
  } else {
    navToPage(pageID);
  }
}
function navToPage(pageName) {
  $.get(`pages/${pageName}.html`, function (data) {
    console.log(data);
    $("#app").html(data);
  });
}
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }
function initListeners() {
  $(window).on("hashchange", route);
  route();
  
}

$document.ready(function () {
  initListeners();
  // navToPage("home");
});












// function route() {
//   let hashTag = window.location.hash;
//   let pageID = hashTag.replace("#/", "");

//   if (!pageID) {
//     MODEL.getPageData("home");
//   } else {
//     MODEL.getPageData(pageID);
//   }
// }

// function initListeners() {
//   $(window).on("hashchange", route);
//   route();

//   $(".hamburger").click(function (e) {
//     $(".mobile-nav").css("display", "flex");
//   });

//   $(".click").click(function (e) {
//     $(".mobile-nav").css("display", "none");
//   });

//   $(".mobile-nav-link").click(function (e) {
//     $(".mobile-nav").css("display", "none");
//   });
// }

// $(document).ready(function () {
//   initListeners("#/home");
// });
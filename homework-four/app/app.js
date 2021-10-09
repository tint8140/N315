function addModalListener() {
  $(".bg-click").click(function (e) {
    gsap.to($(".modal"), { scale: 0, duration: 1 });
  });
}

function initListener() {
  $("#submit").click(function (e) {
    e.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();
    gsap.to($(".modal"), {
      onComplete: showAlert,
    });
  });

  $("#showModal").click(function (e) {
    gsap.to($(".modal"), { scale: 1, duration: 2 });
    addModalListener();
  });
}

function showAlert(username, password) {
  alert("You've logged in!");
}

$(document).ready(function () {
  initListener();
  gsap.set($(".modal"), { scale: 0 });
});

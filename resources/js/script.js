$(document).ready(function() {
  // Mobile navegation
  $(".js--nav-icon").click(() => {
    const nav = $(".js--main-nav");
    nav.slideToggle(200);

    const icon = $(".js--nav-icon ion-icon");

    console.log(icon[0].name);

    if (icon[0].name === "menu") {
      icon[0].name = "close";
    } else {
      icon[0].name = "menu";
    }
  });
  
});

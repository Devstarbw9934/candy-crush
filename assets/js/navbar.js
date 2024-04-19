function showMenu () {
  $(document).ready(function(){
    $(".menu-button").click(function(){
      $(".nav-bar").toggle();
    });
  });
}

showMenu()
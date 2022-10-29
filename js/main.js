$(window).on("load", function(){
	$('.loader_wrapper').fadeOut("slow" , function (){
		$( '.loader_wrapper' ).remove();
	});
  })

function toggleSide() {
    let navSide = document.getElementById("navBar");
    navSide.classList.toggle("open");
    let toggleSide = document.getElementById("toggle_side");
    toggleSide.classList.toggle("open");
    let navLayer = document.getElementById("nav_layer");
    navLayer.classList.toggle("open");
 }

 
 $(".navBar li a").on("click" , function(){
    $(this).parents(".navBar").removeClass("open");
    $("#nav_layer").removeClass("open");
    $("#nav_layer").removeClass("open");
 })

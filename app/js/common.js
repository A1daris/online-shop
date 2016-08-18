$(function() {
//---Toggle dropdown menu
$( ".dropdown_toggle_btn" ).click(function() {
  $(".eurousd_dropdown_menu").toggleClass("hidden")
});
//---Toggle main dropdown menu (delivery)
$( ".main_dropdown_toggle_btn" ).mouseenter(function() {
  $(".main_delivery_menu").toggleClass("show")
});
$( ".main_dropdown_toggle_btn" ).mouseleave(function() {
  $(".main_delivery_menu").toggleClass("show")
});

$(".main_delivery_menu").mouseover(function() {
  $(this).addClass("show")
});




window.onclick = function(event) {
  if (!event.target.matches('.dropdown_toggle_btn')) {

    var dropdowns = document.getElementsByClassName("eurousd_dropdown_menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}







//Carousel---------------------------------------------------------
var numSlides = 4; // total number of slides
var curr = 0; //слайд который показываем current slide
var slideList = document.querySelector("#s-list"); //all slides (UL)

//remove class = active
function rmvActive(num) {
	for( var i = 0; i < numSlides; i++ ) {
		var rmva = '#point-' + i;
     if (num !== i ) { $(rmva).removeClass("active");}
	}
}
//начну с клика на точки
function pointMove(pointid) {
	var mew = '#' + pointid.id;
  $(mew).addClass("active");
  var mew2 = +pointid.id.slice(6);
  rmvActive(mew2);
	tab(mew2);
};
//тупо крутит влево
function rollLeft() {
  slideList.insertBefore(document.getElementById("s-list").lastChild, slideList.firstChild)
}
//тупо крутит right
function rollRight() {
  slideList.appendChild(document.getElementById("s-list").firstChild)
}
//choose your slide
function tab(num) {
  var id = slideList.firstChild.id.slice(6);
  
  if (id > num) {
    var tmp3 = id-num;
    while (tmp3 > 0) {
      rollLeft();
      --tmp3;
    }
  } else if(id < num) {
    var tmp4 = id-num;
    while (tmp4 < numSlides) {
      rollRight();
      ++tmp4;
    }
  }
}
//Carousel---------------------------------------------------------







//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

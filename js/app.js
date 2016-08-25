
document.addEventListener("DOMContentLoaded", function(){
	var nextBut = document.querySelector(".bracketRight")
	var prevBut = document.querySelector(".bracketLeft")
	var list = document.querySelectorAll(".aboutLeft ul li")
	var index = 0;
	
	console.log(nextBut)
	console.log(prevBut)
	console.log(list)
	console.log(index)


	list[index] = list[index] + "visible";

	nextBut.addEventListener("click", function(e){
		list[index].remove("visible")
		if (index === list.length-1) index = -1;
		list[++index].className += "visible"
		})


	prevBut.addEventListener('click', function(e){
		list[index].remove("visible")
		if (index === 0) index = list.length;
		list[--index].className += "visible";

		});
	//LISTA ROZWIJANA
	//ZNIKAJĄCY NAPIS 
$(".x").mouseover(function(){
    $('.y').show();
});
$(".x").mouseout(function(){
    $('.y').hide();
});

$(".x").mouseover(function(){
    $('.triangle').show();
});
$(".x").mouseout(function(){
    $('.triangle').hide();
});


$(".photosLeft").mouseover(function(){
    $('.Clair').hide();
});

$(".photosLeft").mouseout(function(){
    $('.Clair').show();
});
$(".photosLeft").mouseover(function(){
    $('.square').hide();
});

$(".photosLeft").mouseout(function(){
    $('.square').show();
});


$(".photosCenter").mouseover(function(){
    $('.Margarita').hide();
});

$(".photosCenter").mouseout(function(){
    $('.Margarita').show();
});
$(".photosCenter").mouseover(function(){
    $('.square1').hide();
});

$(".photosCenter").mouseout(function(){
    $('.square1').show();
});

$(document).ready(function(){
    $(".form .drop_down_list .list_arrow").click(function(){
        $(".form .list_panel").toggle();
    });
});
$(document).ready(function(){
    $(".form .drop_down_list .list_arrow2").click(function(){
        $(".form .list_panel2").toggle();
    });
});
$(document).ready(function(){
    $(".form .drop_down_list .list_arrow3").click(function(){
        $(".form .list_panel3").toggle();
    });
});

// list arrow to jest lista 
// div class="form">
//                 <div class="drop_down_list">
//                     <span class="list_label">Wybierz rodzaj</span>
//                     <span class="list_arrow"></span>
//  <ul class="list_panel">
//                         <li>Clair</li>
//                         <li>Margarita</li>
//                         <li>Selena</li>
//                     </ul>
//.form > .drop_down_list
//.form + 
// $(".list_arrow").click(function(){
// 	$(".list_panel").hide();
// });
});
// document.addEventListener("DOMContentLoaded", function(){
	var slideIndex = 1;
	showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("aboutLeftChair");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    x[slideIndex - 1].className += ' fade-in one';
}
	//LISTA ROZWIJANA
	//ZNIKAJĄCY NAPIS 
	function calculatePrice(myform){
		var listPanel = document.getElementsByClassName("list_panel")
		var listPanel2 = document.getElementsByClassName("list_panel2")
		var listPanel3 = document.getElementsByClassName("list_panel3")

	};


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

document.addEventListener("DOMContentLoaded", function(){

var arrowFirst = document.querySelector(".list_arrow");
var listPanel = document.querySelector(".list_panel");
var listChild = listPanel.children;
var title = document.querySelector(".title");
var price = document.querySelector("h4.value");
var amount = document.querySelector(".sum");
var sum = 0;

arrowFirst.addEventListener("click", function(){
	listPanel.classList.toggle('visible');
})

for (var i = 0; i < listChild.length;i++){ // dopóki i jest krótsze od długości listy
	listChild[i].addEventListener("click", function(){ //na klik w ten element

		title.innerText = this.innerText; //
		price.innerText = this.dataset.price; // weź wartośc dataset ze zmiennej price
		listPanel.classList.toggle("visible");
		sum = sum + parseFloat(this.dataset.price); // suma się równa suma + atrybut z price
		amount.innerText = sum + "zł";  // suma to jest sum + zł
	});
}

//kolor

var arrowSecond = document.querySelector(".list_arrow2");
var listPanel2 = document.querySelector(".list_panel2");
var listChild2 = listPanel2.children;
var color = document.querySelector(".panel_right span.color");
var color2 = document.querySelector(".panel_left span.color");
var price = document.querySelector("h4.value");
var amount = document.querySelector(".sum");
var sum = 0;

	arrowSecond.addEventListener("click", function(){
		listPanel2.classList.toggle("visible");
	});

for(var i = 0; i < listChild2.length; i++){
	listChild2[i].addEventListener("click", function(){

		color2.innerText = this.innerText;
		color.innerText = this.dataset.price;
		listChild2.classList.toggle("visible");
		sum = sum + parseFloat(this.dataset.price);
		amount.innerText = sum + "zł"
	});
}


//materiał

var arrowThird = document.querySelector(".list_arrow3");
var listPanel3 = document.querySelector(".list_panel3");
var listChild3 = listPanel3.children;
var pattern = document.querySelector(".panel_left span.pattern") 
var pattern2 = document.querySelector(".panel_right span.pattern") 
var price = document.querySelector("h4.value");
var amount = document.querySelector(".sum");
var sum = 0;

console.log(color, pattern, pattern2)
	arrowThird.addEventListener("click", function(){
		listPanel3.classList.toggle("visible");
	});
for (var i = 0; i < listChild3.length; i++){
	listChild3[i].addEventListener("click", function(){
	pattern.innerText = this.innerText;
	pattern2.innerText = this.dataset.price;
	listPanel3.classList.toggle("visible");
	sum = sum + parseFloat(this.dataset.price);
	amount.innerText = sum + "zł";
	});
}

var transport = document.getElementById("transport");
var trans1 = document.querySelector(".panel_left span.transport");
var trans2 = document.querySelector(".panel_right span.transport");
 
 transport.addEventListener("click", function(){
 	
 	if (transport.checked){
 		trans1.innerText = "transport";
 		trans2.innerText = this.dataset.transportprice;
 		sum = sum + parseFloat(this.dataset.transportprice);
        amount.innerText = sum +"zł";
 	}else{
 		trans1.innerText = "";
 		trans2.innerText ="";
 		sum = sum - parseFloat(this.dataset.transportprice);
        amount.innerText = sum +"zł";
 	}
 })


})
;
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
// });
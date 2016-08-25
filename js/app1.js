
document.addEventListener("DOMContentLoaded", function(){
	var nextBut = document.getElementById("nextPicture")
	var prevBut = document.getElementById("prevPicture")
	var list = document.querySelectorAll("li")
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
});
// your code here
documet.getElementById("button").addEventListener("click",function (event) {
	event.preventDefault();
	var name = document.getElementById("name").value;
	var year = document.getElementById("year").value;
	document.getElementById("url").innerHTML =
	 "https://localhost:8080/?name=" + name + "&year=" + year;
	
});

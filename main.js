

function win() {
	var parsed = JSON.parse(this.responseText);
	tester(parsed);
}

function lose() {
	alert("YOU GET NOTHING, YOU LOSE, GOOD DAY SIR");
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", win);
myRequest.addEventListener("error", lose);


myRequest.open("GET", "main.json");
myRequest.send();


function tester(data) {
	var dogz = data.dog_brands;
	var inHTML = document.getElementById("brandType")
    for (var i = 0; i < dogz.length; i++) {

        console.log(dogz[i]);
        var brandNamez = dogz[i].name;
		inHTML.innerHTML += "<th>" + brandNamez; + "</th>";

        for (var j = 0; j < dogz[i].types.length; j++) {
            // console.log(dogBz[i].types[j]);
            var typeNamez = dogz[i].types[j].type;
            inHTML.innerHTML += "<td>" + typeNamez + "</td>";

            for (var x = 0; x < dogz[i].types[j].volumes.length; x++) {
                // console.log(dogBz[i].types[j].volumes[x]);
                var sizeNamez = dogz[i].types[j].volumes[x].name;
                var priceNamez = dogz[i].types[j].volumes[x].price;
                inHTML.innerHTML += "<td>" + "name:" + " " +  '"' + sizeNamez
                 + '"' +',' + " " + "price:" + " " + priceNamez + " "; + "</td>";

            }
        }
    }
}
//  function testr(data) {
//  	var dogBz = data.dog_brands;
//  	for (var i = 0; i < dogBz.length; i++) {
//     	for (var j = 0; j < dogBz[i].types.length; j++) {
//     		console.log(dogBz[i].types[j]);
//     		var tNamez = dogBz[i].types[j].type;
//     		var intuHTML = document.getElementById("foodType")
//     		intuHTML.innerHTML += " " + '"' + tNamez + '"'  + " ";
//     	}
//     }
// }


// function test(data) {
// 	var dogBz = data.dog_brands;

//     for (var i = 0; i < dogBz.length; i++) {
//     	for (var j = 0; j < dogBz[i].types.length; j++) {
//     		for (var x = 0; x < dogBz[i].types[j].volumes.length; x++) {
//     			// console.log(dogBz[i].types[j].volumes[x]);
//     			var Namez = dogBz[i].types[j].volumes[x].name;
//     			var pNamez = dogBz[i].types[j].volumes[x].price;
//     			var intoHTML = document.getElementById("namePrice");
//     			intoHTML.innerHTML += "name:" + " " +  '"' + Namez + '"' +',' + " " + "price:" + " " + pNamez + " ";

// 			}
// 		}
// 	}
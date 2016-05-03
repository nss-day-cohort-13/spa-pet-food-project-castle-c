
function wins() {
	var parsed = JSON.parse(this.responseText);
	test(parsed);
}

function loses() {
	alert("YOU GET NOTHING, YOU LOSE, GOOD DAY SIR");
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", wins);
myRequest.addEventListener("error", loses);


myRequest.open("GET", "kitties.json");
myRequest.send();


function test(data) {
	var kittiez = data.kitty_brands;
	var inHTML = document.getElementById("kittyType")
    for (var i = 0; i < kittiez.length; i++) {
        var brandNamez =  kittiez[i].name;
		    inHTML.innerHTML += "<th>" + brandNamez; + "</th>";

        for (var z = 0; z < kittiez[i].breeds.length; z++) {
            // console.log(kittiez.breeds);
            var breedNamez = kittiez[i].breeds[z];
            inHTML.innerHTML +=" " + breedNamez + ", ";
          }

            for (var j = 0; j < kittiez[i].types.length; j++) {
            // console.log(kittiez[i].types[j]);
            var typeNamez = kittiez[i].types[j].type;
            inHTML.innerHTML += "<td>" + typeNamez + "</td>";

                for (var x = 0; x < kittiez[i].types[j].volumes.length; x++) {
                    // console.log(kittiez[i].types[j].volumes[x]);
                    var sizeNamez = kittiez[i].types[j].volumes[x].name;
                    var priceNamez = kittiez[i].types[j].volumes[x].price;
                    inHTML.innerHTML += "<td>" + "name:" + " " +  '"' + sizeNamez
                     + '"' +',' + " " + "price:" + " " + priceNamez + " " + "</td>";
        }
     }
  }
}

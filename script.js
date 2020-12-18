var css  = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("grad");
var btn = document.getElementById("colorChange");

// var colr = random(0,256);
// var colg = random(0,256);
// var colb = random(0,256);
function randomNumberGenerator(start,range){
	var randomNumber = Math.floor((Math.random()*range)+start);
	// while (randomNumber>range){
	// 	Math.floor((Math.random()*range)+start);
	// }
	return randomNumber;


}
var r1 = randomNumberGenerator(1,10);
var g1 = randomNumberGenerator(1,10);
var b1 =randomNumberGenerator(1,10);

console.log(r1);
console.log(g1);
console.log(b1);

// setGradient ();



css.textContent = "linear-gradient(to right ,"
     + color1.value
      + "," + color2.value
       + ")" + ";";
  body.style.background = "linear-gradient(to right ,"
     + color1.value
      + "," + color2.value
       + ")";      

function setGradient ()  {
   
    body.style.background = "linear-gradient(to right ,"
     + color1.value
      + "," + color2.value
       + ")";
         css.textContent = body.style.background + ";" ;
}


color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

btn.addEventListener("click",function(){

	color1.value = "rgb("+"r1,"+"g1,"+"b1)";
	color2.value = "rgb("+"r1,"+"g1,"+"b1)";
	setGradient();

})




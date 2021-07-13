// let time = 51;
// function updateCounter(){
// 	time = time-1;
// 	if(time < 0){return;}
// 	document.getElementById("countdown").innerHTML = time;
// }
// setInterval(updateCounter, 100);

let increment = document.querySelector("#up");
let decrement = document.querySelector("#down");
let counterValue = document.querySelector("#value");

let counter = 0;

increment.addEventListener("click" , ()=>{
	if(counter <= 49){counter++;}
	value.innerText = counter;
	
});
decrement.addEventListener("click" , ()=>{
	if(counter >= 1){counter--;}
	value.innerText = counter;
	
});
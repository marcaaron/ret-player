const background = document.querySelector('.background');
//
// function handleOrientation(event) {
//   var absolute = event.absolute;
//   var alpha    = event.alpha;
//   let beta     = event.beta;
//   var gamma    = event.gamma;
//
// 	if (beta<0){
// 		beta = 0;
// 	}
// 	beta*=0.1;
//
// 	background.style.transform = `rotateY(${alpha*0.2222}deg) rotateX(${(180-beta)}deg)`;
// }
// console.log('testing');
// window.addEventListener("deviceorientation", handleOrientation, true);

var gn = new GyroNorm();

gn.init().then(function(){
  gn.start(function(data){
    // data.do.alpha	( deviceorientation event alpha value )
    // data.do.beta		( deviceorientation event beta value )
    // data.do.gamma	( deviceorientation event gamma value )
    // data.do.absolute	( deviceorientation event absolute value )

	// background.style.transform = `rotateY(${data.do.gamma}deg)`;
	background.style.transform = `	rotateX(${beta}deg)`;


  });
}).catch(function(e){
	console.log(e);
});

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

// }
// console.log('testing');
// window.addEventListener("deviceorientation", handleOrientation, true);

var gn = new GyroNorm();

gn.init().then(function(){
  gn.start(function(data){

    const alpha = data.do.alpha;
    const beta = data.do.beta;

	background.style.transform = `rotateY(${alpha*0.2222}deg) rotateX(${(180-beta)}deg)`;

  });
}).catch(function(e){
	console.log(e);
});

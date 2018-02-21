const background = document.querySelector('.background');

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  let beta     = event.beta;
  var gamma    = event.gamma;

	if (beta<0){
		beta = 0;
	}
	beta*=0.1;

	background.style.transform = `rotateY(${alpha*0.2222}deg) rotateX(${(180-beta)}deg)`;
}

window.addEventListener("deviceorientation", handleOrientation, true);

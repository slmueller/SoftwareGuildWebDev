var isMouseTracking = false;

function updateMousePosition(){
		if(isMouseTracking){
			var positionX = document.getElementById("mousePositionX");
			positionX.innerText = event.clientX;	//get x-pos and set the HTML element value (innerText) to it
			
			var positionY = document.getElementById("mousePositionY");
			positionY.innerText = event.clientY;	
		}
}

function toggleTracking(){
	isMouseTracking = !isMouseTracking;
	if(isMouseTracking){
		document.getElementById("trackingStatus").innerText = "TRACKING";
	} else {
		document.getElementById("trackingStatus").innerText = "NOT TRACKING";
	}
}

// The methods are called via events in the HTML doc:
// <body onload="toggleTracking()" onclick="toggleTracking()" onmousemove="updateMousePosition();">
// loading the doc switches on tracking, clicking somewhere toggles it, if the mouse moves, it's position is updated
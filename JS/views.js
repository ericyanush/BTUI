/**
 * @author Eric Yanush
 */
//Views Controller Class
//Encapsulates all functions used to control the current state of the app ViewPort
views = function(){
	
	
	//Function to show BrewTroller Settings Window
	this.showBTSettings  = function() {
		
		//Get references to the elements for the window and the blanket
		var blanket = document.getElementById('windowBlanket');
		var settingsWindow = document.getElementById('btSettings');		
		
		var settingsWidth = String(document.defaultView.getComputedStyle(settingsWindow, null).getPropertyValue("width")); //these are explicity casted to Strings to ensure that we can extract the required data from them
		var settingsHeight = String(document.defaultView.getComputedStyle(settingsWindow, null).getPropertyValue("height"));
		
		//We need to remove the px tag from the strings, then we can cast them to numbers and do math with them
		settingsWidth = settingsWidth.replace("px", "");
		settingsWidth = Number(settingsWidth);
		settingsHeight = settingsHeight.replace("px", "");
		settingsHeight = Number(settingsHeight);
		
		//set the x-axis position of the window to ensure it is centered properly
		settingsWindow.style.left = (window.innerWidth /2) - (settingsWidth /2) + 'px';
		
		//set the visibility types for the window and the blanket to visible and change the z-index to bring to top
		settingsWindow.style.zIndex = 9001;
		blanket.style.zIndex = 9000;
		settingsWindow.style.visibility = "visible";
		blanket.style.visibility = "visible";
		
		//set the opacity for the blanket so we get a nice fade-in effect
		blanket.style.opacity =.85;
		
		//set the height position of the window so we get a nice slide down and in effect
		settingsWindow.style.top = (window.innerHeight / 2) - (settingsHeight / 2) + 'px';	
	};
	
	//Function to close (hide) BrewTroller Settings Window
	this.closeBTSettings = function() {
		
		//Get references to the elements for the window and the blanket
		var blanket = document.getElementById('windowBlanket');
		var settingsWindow = document.getElementById('btSettings');
		
		//remove the position we set for the window so we get a nice slide up and out effect
		settingsWindow.style.removeProperty('top');
		//remove the opacity we set for the blanket so it will fade back out
		blanket.style.removeProperty('opacity');
		
		//remove the blanket and window z-indexs and visibility attributes, so they fallback to the css rules we set
		settingsWindow.style.removeProperty('z-index');
		blanket.style.removeProperty('z-index');
		settingsWindow.style.removeProperty('visibility');
		blanket.style.removeProperty('visibility');		
	};
	
	this.saveBTSettings = function() {
		
		BrewTroller.saveSettings();
		
		this.closeBTSettings();
	};
	
	this.showVesselSettings = function() {
		
		//Get references to the elements for the window and the blanket
		var blanket = document.getElementById('windowBlanket');
		var settingsWindow = document.getElementById('vesselSettings');	
		
		var settingsWidth = String(document.defaultView.getComputedStyle(settingsWindow, null).getPropertyValue("width")); //these are explicity casted to Strings to ensure that we can extract the required data from them
		var settingsHeight = String(document.defaultView.getComputedStyle(settingsWindow, null).getPropertyValue("height"));
		
		//We need to remove the px tag from the strings, then we can cast them to numbers and do math with them
		settingsWidth = settingsWidth.replace("px", "");
		settingsWidth = Number(settingsWidth);
		settingsHeight = settingsHeight.replace("px", "");
		settingsHeight = Number(settingsHeight);
		
		//set the x-axis position of the window to ensure it is centered properly
		settingsWindow.style.left = (window.innerWidth /2) - (settingsWidth /2) + 'px';
		
		//set the visibility types for the window and the blanket to visible and change the z-index to bring to top
		settingsWindow.style.zIndex = 9001;
		blanket.style.zIndex = 9000;
		settingsWindow.style.visibility = "visible";
		blanket.style.visibility = "visible";
		
		//set the opacity for the blanket so we get a nice fade-in effect
		blanket.style.opacity =.85;
		
		//set the height position of the window so we get a nice slide down and in effect
		settingsWindow.style.top = (window.innerHeight / 2) - (settingsHeight / 2) + 'px';
	};

	//Method to hide the vessel settings window
	this.closeVesselSettings = function() {
		
		//Get references to the elements for the window and the blanket
		var blanket = document.getElementById('windowBlanket');
		var settingsWindow = document.getElementById('vesselSettings');
		
		//remove the position we set for the window so we get a nice slide up and out effect
		settingsWindow.style.removeProperty('top');
		//remove the opacity we set for the blanket so it will fade back out
		blanket.style.removeProperty('opacity');
		
		//remove the blanket and window z-indexs and visibility we set so it falls back to the css rules
		settingsWindow.style.removeProperty('z-index');
		blanket.style.removeProperty('z-index');
		settingsWindow.style.removeProperty('visibility');
		blanket.style.removeProperty('visibilty');	
	};
	
	//Method called when the vessel settings window save button is clicked
	//calls the appropriate vessel's saveSettings() method, then closeVesselSettings()
	this.saveVesselSettings = function() {
		
		//get the vessel index from the data-vessel-index attribute
		var vesselIndex = document.getElementById('vesselSettings').dataset.vesselIndex;
		
		//call the appropriate vessel's saveSettings()
		BrewTroller.Vessels[vesselIndex].saveSettings();
		
		//hide the settings window
		this.closeVesselSettings();
	};
	
	//Method to show the temp setpoint window
	this.showTempSetPoint = function() {
		
		//Get references to the elements for the window and the blanket
		var blanket = document.getElementById('windowBlanket');
		var settingsWindow = document.getElementById('tempSetPointEdit');	
		
		var settingsWidth = String(document.defaultView.getComputedStyle(settingsWindow, null).getPropertyValue("width")); //these are explicity casted to Strings to ensure that we can extract the required data from them
		var settingsHeight = String(document.defaultView.getComputedStyle(settingsWindow, null).getPropertyValue("height"));
		
		//We need to remove the px tag from the strings, then we can cast them to numbers and do math with them
		settingsWidth = settingsWidth.replace("px", "");
		settingsWidth = Number(settingsWidth);
		settingsHeight = settingsHeight.replace("px", "");
		settingsHeight = Number(settingsHeight);
		
		//set the x-axis position of the window to ensure it is centered properly
		settingsWindow.style.left = (window.innerWidth /2) - (settingsWidth /2) + 'px';
		
		//set the visibility types for the window and the blanket to visible and change the z-index to bring to top
		settingsWindow.style.zIndex = 9001;
		blanket.style.zIndex = 9000;
		settingsWindow.style.visibility = "visible";
		blanket.style.visibility = "visible";
		
		//set the opacity for the blanket so we get a nice fade-in effect
		blanket.style.opacity =.85;
		
		//set the height position of the window so we get a nice slide down and in effect
		settingsWindow.style.top = (window.innerHeight / 2) - (settingsHeight / 2) + 'px';
	};
	
	//Method to hide the temp setpoint window
	this.closeTempSetPoint = function() {
		
		//Get references to the elements for the window and the blanket
		var blanket = document.getElementById('windowBlanket');
		var settingsWindow = document.getElementById('tempSetPointEdit');
		
		//set the position for the window so we get a nice slide up and out effect
		settingsWindow.style.removeProperty('top');
		//set the opacity for the blanket so it will fade back out
		blanket.style.removeProperty('opacity');
		
		//set the blanket and window z-indexs and visibility back to the hidden state so they don't interfere with any other app functionality
		settingsWindow.style.removeProperty('z-index');
		blanket.style.removeProperty('z-index');
		settingsWindow.style.removeProperty('visibility');
		blanket.style.removeProperty('visibility');	
	};
	
	//method calls the appropriate vessel's setNewSetPoint() method and then the closeTempSetPoint()
	this.saveTempSetPoint = function() {
		
		//get values from the temp set point window
		var setPointValue = document.getElementById('tempSetPoint').value;
		var vesselIndex = document.getElementById('tempSetPointEdit').dataset.vesselIndex;
		//set the new set point
		BrewTroller.Vessels[vesselIndex].setNewSetPoint(setPointValue);
		//close the setPoint window
		this.closeTempSetPoint();		
	};
	
	//Method is called when a valve profile is right-clicked, it displays the profile config edit window
	this.editValveProfile = function(profileIndex) {
		
		alert('Come To the Darkside! We have exactly ' + profileIndex + ' Cookies!');
		return false;
	};	
	
	//Method called when the window.onload event fires, used to finish setting up the viewPort
	this.initSetup = function(){
		
		//Set the BrewTroller Settings window to be centered on the screen, this ensures that webkit browsers display the settings window the same way gecko ones do
		var settingsWindow = document.getElementById('btSettings');	
		var settingsWidth = String(document.defaultView.getComputedStyle(settingsWindow, null).getPropertyValue("width"));
		
		settingsWidth = settingsWidth.replace("px", "");
		settingsWidth = Number(settingsWidth);
		
		settingsWindow.style.left = (window.innerWidth /2) - (settingsWidth /2) + 'px';		
		
		//Set the vessel settings window to be centered on the screen, same reason as above
		var vesselSettingsWindow = document.getElementById('vesselSettings');	
		var vesselSettingsWidth = String(document.defaultView.getComputedStyle(settingsWindow, null).getPropertyValue("width"));
		
		vesselSettingsWidth = vesselSettingsWidth.replace("px", "");
		vesselSettingsWidth = Number(vesselSettingsWidth);
		
		vesselSettingsWindow.style.left = (window.innerWidth /2) - (vesselSettingsWidth /2) + 'px';
		
		//Set the temp setpoint window to be centered on the screen, same reason as above
		var tempSetWindow = document.getElementById('tempSetPointEdit');	
		var tempSetWidth = String(document.defaultView.getComputedStyle(settingsWindow, null).getPropertyValue("width"));
		
		tempSetWidth = tempSetWidth.replace("px", "");
		tempSetWidth = Number(tempSetWidth);
		
		tempSetWindow.style.left = (window.innerWidth /2) - (tempSetWidth /2) + 'px';
	};
};

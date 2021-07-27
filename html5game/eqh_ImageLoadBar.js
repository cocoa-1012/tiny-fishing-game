
var initialised = false;
var fbig_initialised = false;

function FBInstantGames_LoadingBar(_graphics, _width, _height, _total, _current, _loadingscreen)
{
	if(!initialised)
	{
		console.log("FB Instant Games attempting to initialise");
		FBInstant.initializeAsync()
		  .then(function() {        
			 // Start loading game assets here
			 console.log("FB Instant Games initialised");
			 fbig_initialised = true;
		  });
		initialised = true;
	}
	
	if(fbig_initialised)
	{
		//takes 0-100
		var progress = (_current/_total)*100;
		FBInstant.setLoadingProgress(progress);
		console.log("FB Instant Games setting load progress to "+ progress);
	}
	

	// Clear screen - just nuke to black as FB displays its loading spinner over the top
	_graphics.fillStyle = "rgba(0,0,0,255)";
	_graphics.fillRect(0, 0, _width, _height);

	
	
}
//Set to true if the project has a Mavo screen ($10);
var IsMavo=false;
// Please make sure your screen array is correct ! 

// I want to set the array only once (Array for the order of the screens)
if (sessionStorage.getItem("ScreenArray") === null)
{
    var ScreenArray = ["map_Canvas.html" , "$110_Canvas.html", "$120_Canvas.html","$130_Canvas.html","$210_Canvas.html","$220_Canvas.html","$230_Canvas.html","$240_Canvas.html","$250_Canvas.html","$260_Canvas.html","$300_Canvas.html"];
    sessionStorage.setItem("ScreenArray",JSON.stringify(ScreenArray));
}

var ScreenArray = JSON.parse(sessionStorage.getItem("ScreenArray")); // getting the array for general use

function ActiveButton(Root)
{
    Root.start_btn.addEventListener("click", ChangePage);
    window.addEventListener("keydown", keyboardHandle);
    //audioTag();
}

function ChangePage(e)
{
    // checking if there is a saved location 
    if (sessionStorage.getItem("bSwitchingToLocation") == "true")
    {
         //loading the page by getting the information from the sessionStorage (check addScorm.js HandleString function)
        window.location = ScreenArray[Number(sessionStorage.getItem("ScreenNum"))];
        console.log(sessionStorage.getItem("bSwitchingToLocation"));
    }
    else
    {
        if(IsMavo)
        {
             window.location = "$10_Canvas.html"; /*in case SCORM is not needed, the function needs this line only */
        }
        else 
        {
            window.location = "map_Canvas.html";/*in case SCORM is not needed, the function needs this line only */
            // posts message to the parent to show the side Bar after "התחל" is pressed 
            parent.postMessage("Show Bar", "*");
        }
        
       
    }
    
    
}




// creating the short cut , for the open screen
function keyboardHandle(event)
{
    /* ---------------------- programmer Daniel bar ----------------------
    shift + z - skip the openscreen*/
    if(event.shiftKey && event.keyCode == 90)
    {
        if(IsMavo)
        {
            window.location = "$10_Canvas.html"; /*in case SCORM is not needed, the function needs this line only */
        }
        else 
        {
             window.location = "map_Canvas.html";/*in case SCORM is not needed, the function needs this line only */
            // posts message to the parent to show the side Bar after "התחל" is pressed 
            parent.postMessage("Show Bar", "*");
        }
        
        window.removeEventListener("keydown", keyboardHandle);
    }
    
    
    
}

/*
function audioTag()
{
    var MusicTag = document.createElement('audio');
    
    var SourceTag = document.createElement('source');
    
    SourceTag.src = "sounds/OpenScreen_short.mp3";
    
    SourceTag.type = "audio/mpeg";
    MusicTag.autoplay = "autoplay";
    
    MusicTag.appendChild(SourceTag);
    
    document.getElementsByTagName("body")[0].appendChild(MusicTag);
}
*/
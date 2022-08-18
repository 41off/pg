
 
 function onloadL(){
            console.log("body loaded");
                      
            video_player = document.getElementsByTagName("video")[0];
            video_player.setAttribute("src", video_directory[video_index]);
            
            video_player.play();
            video.playbackRate = 0.5; 
            video_player.volume = 0.2;
            
         
    }
   

 function ClickStartL() {
    timer.stop();
    timer.mode(1);
    video_player.play();
    video.playbackRate = 1.0; 
   }
   
  function ClickPauseL(){
    timer.start(10);
    video_player.pause();
   }
  function onPauseL(){
    timer.stop();
    video_player.pause();
   }
  
  function on1XL(){
    timer.stop();
    video_player.pause();
    video.pause();
    clearInterval(rewind);
    video.playbackRate = 1.0;
   }
 
  function onFastFwdL(){
    video.playbackRate = 4.0;
    video_player.play();
   }
   
  function onSupFwdL(){
    video.playbackRate = 16.0;
    video_player.play();
   }
   
  function onSlowL(){
    video.playbackRate = 0.125;
    video_player.play();
   }
   
  function onSuperSlowL(){
    video.playbackRate = 0.0625;
    video_player.play();
   }
   
  function multiStopL() {
    timer.stop();
    timer.reset(0000);
    video_player.pause();
    clearInterval(rewind);
   }
 
 
  function multiStartL() {
      var btn = document.getElementById("L5");
      
   /*   var w = window.open('','','width=300,height=30')
      
      setTimeout(function() {w.close();}, 5000)
    */   
        if (btn.value == "Play Left") {
            /*w.document.write('Use this button before each click on rewind buttons ("-1/8X or -1X")');
              w.focus();  */
             btn.value = "Pause";
             btn.innerHTML = "Play";
             video_player.play();
             
                }
         else {
             btn.value = "Play Left";
             btn.innerHTML = "Pause";
             video_player.pause();
              }
              
     if(video_player.paused){
      
      timer.start(10);
      timer.mode(1);      
      video_player.play();
      video.playbackRate = 1.0;
     } 
       else {
            timer.stop();
            video_player.pause();
            clearInterval(rewind);
         }
 }
 
 
  function multiResetL() {
    timer.reset(0000)
   }
   
   function multiFwdL() {
    var btn = document.getElementById("L4x");
        if (btn.value == "+4X") {
             btn.value = "Pause";
             btn.innerHTML = "+4X";
             video_player.play();
                }
         else {
             btn.value = "+4X";
             btn.innerHTML = "Pause";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(2);
      timer.mode(1);
      video_player.play();
      video.playbackRate = 4.0;
      } 
       else {
            timer.stop();
            video_player.pause();
         }   
  }
   
   function multiSupFwdL() {
    var btn = document.getElementById("L16x");
        if (btn.value == "+16X") {
             btn.value = "Pause";
             btn.innerHTML = "+16X";
             video_player.play();
                }
         else {
             btn.value = "+16X";
             btn.innerHTML = "Pause";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(0.125);
      timer.mode(1);
      video_player.play();
      video.playbackRate = 16.0;
      } 
       else {
            timer.stop();
            video_player.pause();
         }   
   }
  
   function multiSlowL() {
      var btn = document.getElementById("L1_8");
        if (btn.value == "+1/8X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/8X";
             video_player.play();
                }
         else {
             btn.value = "+1/8X";
             btn.innerHTML = "Pause";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(80);
      timer.mode(1);
      video_player.play();
      video.playbackRate = .125;
      } 
       else {
            timer.stop();
            video_player.pause();
         }
 }
   function multiSuperSlowL() {
      var btn = document.getElementById("L1_16");
        if (btn.value == "+1/16X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/16X";
             video_player.play();
                }
         else {
             btn.value = "+1/16X";
             btn.innerHTML = "Pause";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(160);
      timer.mode(1);
      video_player.play();
      video.playbackRate = .0625;
      } 
       else {
            timer.stop();
            video_player.pause();
         }
 }
  
   function multiRevL() {
    timer.start(80);
    timer.mode(0);    
   }

  
        var video_directory = ['https://www.dropbox.com/s/x4sqygujfaw0qyg/PG-07-30-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/scpgpbywo92s4o6/08-07-2022.mp4?raw=1',                               
                               ];                      
 
  
        var video_index = 0;
        var video_player = null;
        var video = document.getElementById('video');  
       
                          
      
        
       function onvideoEndedL(){
            console.log("video ended");
            if(video_index < video_directory.length - 1){
                video_index++;
            }
            else{
                video_index = 1;
            }
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.stop();
        }
        
       function onvideoNextL(){
            console.log("video next");
            if(video_index < video_directory.length - 1){
                video_index++;
            }
            else{
                video_index = 1;
            }
            
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.play();
        }
        
       function onvideoBackL(){
            console.log("video back");
            if(video_index < video_directory.length - 1){
                video_index--;
            }
            else{
                video_index--;
            }
            video_player = document.getElementById("video");
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.play();
        }
        
   //rewind below  
$("#negativeL").click(function() { // button function for rewind
    video_player.pause();
     
     rewind = setInterval(function() {
               
       if (video_player.currentTime == 0) {
          clearInterval(rewind);
          video_player.pause();
          }
          
       else{
           timer.start(10);
           timer.mode(0);
           video_player.currentTime += -.3;
             }
                },300);
        
      setTimeout(function() {
        alert('20 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
        clearInterval(rewind);
        timer.stop();
        }, 20000);
});
$("#negative2L").click(function() { // button function for rewind
    video_player.pause();
      
     rewind = setInterval(function() {
              
       if (video_player.currentTime == 0) {
          clearInterval(rewind);
          video_player.pause();
          
          
          }
          
       else{
           timer.start(80);
           timer.mode(0);
           video_player.currentTime += -.05;
             }
                },400);
           
         
     setTimeout(function() {
               alert('2.5 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
               clearInterval(rewind);
               timer.stop();
               }, 20500);
});
$("#negative3L").click(function() { // button function for rewind
    video_player.pause();
      
    rewind = setInterval(function() {
               
       if (video_player.currentTime == 0) {
          clearInterval(rewind);
          video_player.pause();
          }
       else{
           timer.start(2.5);
           timer.mode(0);
           video_player.currentTime += -1;
             }
                },250);
           
      setTimeout(function() {
        alert('20 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
        clearInterval(rewind);
        timer.stop();
        }, 8000);
});


      function on0L(){
            console.log("0 ended");
            video_index = 0;
            video_player.setAttribute("src", video_directory[video_index]);
          
        }
          
            
       function on1L(){
            console.log("1 ended");
            video_index = 1;
            video_player.setAttribute("src", video_directory[video_index]);
        }
                                
      
        
        
          function on2L(){
            console.log("2 ended");
            video_index = 2;
            video_player.setAttribute("src", video_directory[video_index]);
        }
            
        
                      
          function on3L(){
            console.log("3 ended");
            video_index = 3;
            video_player.setAttribute("src", video_directory[video_index]);
            
        }
        
          function on4L(){
            console.log("4 ended");
            video_index = 4;
            video_player.setAttribute("src", video_directory[video_index]);
           
                        
           var btn = document.getElementById("modal");
      
            if (btn.value == "EB-52k-13m") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">EB-52k-13m</button>';
              multiResetB();
              }
            else {
              btn.value = "EB-52k-13m";
              btn.innerHTML = '<button id="modtext">EB-52k-13m&nbsp;&nbsp;&#129093;</button>';
              timer.stop();
              timerR.stop();
                           
              }
        }
           
         function on5L(){
            console.log("5 ended");
            video_index = 5;
            video_player.setAttribute("src", video_directory[video_index]);
        }
        
         function on6L(){
            console.log("6 ended");
            video_index = 6;
            video_player.setAttribute("src", video_directory[video_index]);
        }
         
          function on7L(){
            console.log("7 ended");
            video_index = 7;
            video_player.setAttribute("src", video_directory[video_index]);
         }
        
          function on8L(){
            console.log("8 ended");
            video_index = 8;
            video_player.setAttribute("src", video_directory[video_index]);
         }
        
          function on9L(){
           console.log("9 ended");
           video_index = 9;
           video_player.setAttribute("src", video_directory[video_index]);
         }
       
          function on10L(){
           console.log("10 ended");
           video_index = 10;
           video_player.setAttribute("src", video_directory[video_index]);
         }
       
          function on11L(){
           console.log("11 ended");
           video_index = 11;
           video_player.setAttribute("src", video_directory[video_index]);
         }
        
        
        function on12L(){
           console.log("12 ended");
           video_index = 12;
           video_player.setAttribute("src", video_directory[video_index]);
       }

        function on13L(){
           console.log("13 ended");
           video_index = 13;
           video_player.setAttribute("src", video_directory[video_index]);
       }
       
       function on14L(){
           console.log("14 ended");
           video_index = 14;
           video_player.setAttribute("src", video_directory[video_index]);
       }





/// all timer fx below //        

 function _timer(callback)
{
    var time = 0;     //  The default time of the timer
    var mode = 1;     //    Mode: count up or count down
    var status = 0;    //    Status: timer is running or stoped
    var timer_id;    //    This is used by setInterval function
    
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
    this.start = function(interval)
    {
        interval = (typeof(interval) !== 'undefined') ? interval : 0;
 
        if(status == 0)
        {
            status = 1;
            timer_id = setInterval(function()
            {
                switch(mode)
                {
                    default:
                    if(time)
                    {
                        time--;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                    
                    case 1:
                    if(time < 86400)
                    {
                        time++;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                }
            }, interval);
        }
    }
    
    //  Same as the name, this will stop or pause the timer ex. timer.stop()
    this.stop =  function()
    {
        if(status == 1)
        {
            status = 0;
            clearInterval(timer_id);
        }
    }
    
    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset =  function(sec)
    {
        sec = (typeof(sec) !== 'undefined') ? sec : 0;
        time = sec;
        generateTime(time);
    }
    
    // Change the mode of the timer, count-up (1) or countdown (0)
    this.mode = function(tmode)
    {
        mode = tmode;
    }
    
    // This methode return the current value of the timer
    this.getTime = function()
    {
        return time;
    }
    
    // This methode return the current mode of the timer count-up (1) or countdown (0)
    this.getMode = function()
    {
        return mode;
    }
    
    // This methode return the status of the timer running (1) or stopped (1)
    this.getStatus
    {
        return status;
    }
    
    // This methode will render the time variable to hour:minute:second format
    function generateTime()
    {
        var milli = time % 100;
        var second = Math.floor(time / 100) % 60;
        var minute = Math.floor(time / 6000) % 60;
        var hour = Math.floor(time / 360000) % 24;
        
        milli = (milli < 10) ? '0'+milli : milli;
        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '&nbsp;0'+minute : minute;
        hour = (hour < 10) ? '0'+hour : hour;
        
        $('div.timer span.milli').html(milli);
        $('div.timer span.second').html(second);
        $('div.timer span.minute').html(minute);
        $('div.timer span.hour').html(hour);
    }
}
 
// example use
var timer;
 
$(document).ready(function(e) 
{
    timer = new _timer
    (
        function(time)
        {
            if(time == null)
            {
                timer.stop();
                alert('Out The Gates!!!');
            }
        }
    );
    timer.reset(0);
    timer.mode(0);
});


function timeStop() {
    timer.reset(0);
}














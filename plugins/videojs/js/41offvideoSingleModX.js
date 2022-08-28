 function onloadL(){
            console.log("body loaded");
            video_player = document.getElementsByTagName("video")[0];
            video_player.setAttribute("src", video_directory[video_index]);
            
            video_player.play();
            video.playbackRate = 0.5;
            
            video_player.volume = 0.2;
            video_player.currentSrc();
            video_player.currentTime();
               
                      
      timer.start(40);
      timer.mode(1);
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
      
      timer.start(30);
      timer.mode(1);      
      video_player.play();
      video.playbackRate = 0.333;
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
      timer.start(2.5);
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
        if (btn.value == "+1X") {
             btn.value = "Pause";
             btn.innerHTML = "+1X";
             video_player.play();
                }
         else {
             btn.value = "+1X";
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

  
        var video_directory = ['https://www.dropbox.com/s/68i4wksoo09kr0t/XXB06-08-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/2soavzh7i5um74a/X06-08-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/m26iduv2rc4lzje/X06-02-2022-52-13.mp4?raw=1',
                               'https://www.dropbox.com/s/qxe65doomy1zm5q/XPG-05-20-2022-13_52c.mp4?raw=1',
                               'https://www.dropbox.com/s/1ae3mdk1m7os2tf/XPG-DM_52-13-compare-4k.mp4?raw=1',
                               'https://www.dropbox.com/s/bb9777r1jouruzj/07-04-2022_52-13.mp4?raw=1',
                               'https://www.dropbox.com/s/g8cjjabc317fnjt/07-06-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/owxnmimnnqatnl9/07-09-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/qzq5906upsxdei1/07-21-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/62lol65s37bkk1s/07-22-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/x4sqygujfaw0qyg/PG-07-30-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/scpgpbywo92s4o6/08-07-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/voxf8rbdsg0h3oc/PG-S1-08-18-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/elm0sn8vs5ej7vq/PG-S2-08-18-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/0h4rzmd82p1u1s0/PG-S3-08-18-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/v0r9mlrietfbr2m/PG-08-21-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/fb50fll3qbqnux3/PG-S2-08-22-2022-A%2B_A.mp4?raw=1',
                               'https://www.dropbox.com/s/eum0jrsfvwtrxqy/PG-S2-08-25-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/invxe130qo1xqrk/PG-S2-08-26-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/jdah1mlj734iuvi/PG-S2-08-27-2022.mp4?raw=1'
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
        

         function on0L(){
            console.log("0 ended");
            video_index = 0;
            video_player.setAttribute("src", video_directory[video_index]);
        }
            
         function on1L(){
            console.log("0 ended");
            video_index = 1;
            video_player.setAttribute("src", video_directory[video_index]);
            video.playbackRate = 0.25;
                                
        }
        
         function on2L(){
            console.log("1 ended");
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
           console.log("9 ended");
           video_index = 10;
           video_player.setAttribute("src", video_directory[video_index]);
          
       }
       
          function on11L(){
           console.log("10 ended");
           video_index = 11;
           video_player.setAttribute("src", video_directory[video_index]);
        
       }
        
        
        function on12L(){
           console.log("11 ended");
           video_index = 12;
           video_player.setAttribute("src", video_directory[video_index]);
       }

        function on13L(){
           console.log("12 ended");
           video_index = 13;
           video_player.setAttribute("src", video_directory[video_index]);
       }
       
       function on14L(){
           console.log("13 ended");
           video_index = 14;
           video_player.setAttribute("src", video_directory[video_index]);
       }


  function on15L(){
           console.log("14 ended");
           video_index = 15;
           video_player.setAttribute("src", video_directory[video_index]);
       }


  function on16L(){
           console.log("15 ended");
           video_index = 16;
           video_player.setAttribute("src", video_directory[video_index]);
       }


  function on17L(){
           console.log("16 ended");
           video_index = 17;
           video_player.setAttribute("src", video_directory[video_index]);
       }


  function on18L(){
           console.log("18 ended");
           video_index = 18;
           video_player.setAttribute("src", video_directory[video_index]);
       }

  function on20L(){
           console.log("20 ended");
           video_index = 20;
           video_player.setAttribute("src", video_directory[video_index]);
       }

  function on21L(){
           console.log("20 ended");
           video_index = 21;
           video_player.setAttribute("src", video_directory[video_index]);
       }


  function on22L(){
           console.log("21 ended");
           video_index = 22;
           video_player.setAttribute("src", video_directory[video_index]);
       }


  function on23L(){
           console.log("22 ended");
           video_index = 23;
           video_player.setAttribute("src", video_directory[video_index]);
       }


  function on24L(){
           console.log("23 ended");
           video_index = 24;
           video_player.setAttribute("src", video_directory[video_index]);
       }


  function on25L(){
           console.log("24 ended");
           video_index = 25;
           video_player.setAttribute("src", video_directory[video_index]);
       }


  function on26L(){
           console.log("25 ended");
           video_index = 26;
           video_player.setAttribute("src", video_directory[video_index]);
       }


  function on27L(){
           console.log("26 ended");
           video_index = 27;
           video_player.setAttribute("src", video_directory[video_index]);
       }


  function on28L(){
           console.log("27 ended");
           video_index = 28;
           video_player.setAttribute("src", video_directory[video_index]);
       }


  function on29L(){
           console.log("28 ended");
           video_index = 29;
           video_player.setAttribute("src", video_directory[video_index]);
       }

   function on19L(){
           console.log("18 ended");
           video_index = 19;
           video_player.setAttribute("src", video_directory[video_index]);
       }


        
          function on200L(){
            console.log("199 ended");
             if(video_index = 200){
                video_index++;
           }
            else{
                video_index = 0;
            }
            video_player = document.getElementById("video");
            video_player.setAttribute("src", video_directory[video_index]);
           
           
           var btn = document.getElementById("modal");
      
            if (btn.value == "V12.mp4") {
              btn.value = "Play";
              btn.innerHTML = '<button id="modtext">V12.mp4</button>';              
              timer.reset();
             
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V12.mp4";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              video_player.pause();
              }
        }



















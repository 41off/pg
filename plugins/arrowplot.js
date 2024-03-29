﻿//REPLACE 'cnv1' WITH THE ID OF CANVAS WHERE TO DRAW ARROWS
var cnv_id = 'video-canvas1';

//Only to draw some context in canvas
function drawInCnv(){
  var cnv = document.getElementById(cnv_id);  //canvas elm.
  var ctx = cnv.getContext('2d');  //canvas context
  ctx.font = 'bold 28px sans-serif';
  ctx.strokeText('CANVAS - Draw Arrows', 60, 50);  //Text
  ctx.strokeStyle = '#00f';;
  ctx.lineWidth =2;
  ctx.arc(200,135,50,0,Math.PI*2,true);  //Face
  ctx.moveTo(235,135);
  ctx.arc(200,135,35,0,Math.PI,false);  //Mouth
  ctx.moveTo(190,125);
  ctx.arc(185,125,4,0,Math.PI*2,true);  //Left eye
  ctx.moveTo(220,125);
  ctx.arc(215,125,4,0,Math.PI*2,true);  //Right eye
  ctx.stroke();
}
drawInCnv();

//Draw arrows in the canvas with id from #cnv_id, between two clicks
function drawArrowCnv(cnv_id){
 //From: https://coursesweb.net/javascript/
  //style: lw=line-width, lc=line-color, aw=arrow-width, al=arrow-length, ac=arrow-color
  var style = {lw:1, lc:'red', aw:12, al:18, ac:'red'};
  var allow_draw =-1;  //if 1 allow to draw the arrow

  var cnv = document.getElementById(cnv_id);  //canvas elm.
  var cnv0 = {};  //cloned canvas to store initial canvas image /content
  var ctx = cnv.getContext('2d');  //canvas context
  var x, y = 0;  // variables that will contain the coordinates
  var clicks =0;  //for pair of clicks on canvas; 0 /1
  var last_clk = [0, 0];  //x,y coords of last click
  var nra =0;  //number of line-markers

  //set value of allow_draw
  this.allowDraw = function(){ allow_draw *=-1; }

  //return value of allow_draw
  this.letDraw = function(){ return allow_draw; }

  //to clone /copy canvas image /content
  function cloneCanvas(cnv){
    cnv.insertAdjacentHTML('afterend', '<canvas id="cnv0_cnv" style="'+ cnv.getAttribute('style') +'" width="'+ cnv.width +'" height="'+ cnv.height +'"></canvas>');
    //create a new canvas
    var cnv0 = document.getElementById('cnv0_cnv');
    var cnt = cnv0.getContext('2d');

    //set dimensions, and hide it
    cnv0.width = cnv.width;
    cnv0.height = cnv.height;
    cnv0.style.display ='none';

    //apply the old canvas to the new one; return the new canvas
    cnt.drawImage(cnv, 0, 0);
    return cnv0;
  }

  //to get the initial canvas
  this.restoreCanvas = function(){
    cnv0.style.display ='block';  //show cloned canvas
    cnv.outerHTML ='';  //delete original canvas
    cnv0.id = cnv_id;  //set original id to cloned canvas
    drawAr = new drawArrowCnv(cnv_id);  //recreate the object to draw line-marker
    if(drawAr.letDraw() ==-1 && allow_draw ==1) drawAr.allowDraw();  //make allow_draw 1 if initialy is -1 and currently 1
  }

  // Get X and Y position of the elm
  function getXYpos(elm){
    x = elm.offsetLeft;  //set x to elm’s offsetLeft
    y = elm.offsetTop;  //set y to elm’s offsetTop

    elm = elm.offsetParent;  // set elm to its offsetParent

    //use while loop to check if elm is null, if not. add current elm’s offset to x/y
    //offsetTop to y and set elm to its offsetParent
    while(elm != null) {
      x = parseInt(x) + parseInt(elm.offsetLeft);
      y = parseInt(y) + parseInt(elm.offsetTop);
      elm = elm.offsetParent;
    }

    // returns an object with 'x' (Left), 'y' (Top) position
    return {'x':x, 'y':y};
  }

  //return array with click coords [x,y] in element $e
  function getCoords(e){
    var xy_pos = getXYpos(e.target);

    // if IE
    if(navigator.appVersion.indexOf('MSIE') !=-1) {
      //in some IE scrolling page affects mouse coordinates into an element
      //This gets the page element that will be used to add scrolling value to correct mouse coords
      var standardBody = (document.compatMode =='CSS1Compat') ? document.documentElement : document.body;

      x = event.clientX + standardBody.scrollLeft;
      y = event.clientY + standardBody.scrollTop;
    }
    else {
      x = e.pageX;
      y = e.pageY;
    }
    return [x - xy_pos['x'], y - xy_pos['y']];
  }

  //class to draw line with arrow head
  function Line(x1,y1,x2,y2){
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
  }
  //set arrow and add it with drawArrowhead, to the end of the line (x2/y2)
  Line.prototype.addArrowhead = function(ctx){
    // arbitrary styling
    ctx.strokeStyle = style.lc;
    ctx.fillStyle = style.ac;
    ctx.lineWidth = style.lw;

    // draw the line
    ctx.beginPath();
    ctx.moveTo(this.x1,this.y1);
    ctx.lineTo(this.x2,this.y2);
    ctx.stroke();

    // draw the ending arrowhead
    var endRadians = Math.atan((this.y2-this.y1)/(this.x2-this.x1));
    endRadians += ((this.x2>=this.x1)?90:-90)*Math.PI/180;
    this.drawArrowhead(ctx,this.x2,this.y2,endRadians);
  }
  //draw arrow to $x/$y coords
  Line.prototype.drawArrowhead = function(ctx,x,y,radians){
    ctx.save();
    ctx.beginPath();
    ctx.translate(x,y);
    ctx.rotate(radians);
    ctx.moveTo(0,0);
    ctx.lineTo(style.aw /2,style.al);
    ctx.lineTo(-style.aw /2,style.al);
    ctx.closePath();
    ctx.restore();
    ctx.fill();
  }

  //set object to draw the line-marker
  function drawArrow(e){
    //if $draw is 1, get x,y coords in element $e and draw arrow
    if(allow_draw ==1){
      var coords = getCoords(e);
      nra++;
      if(nra ==1) cnv0 = cloneCanvas(cnv);  //clone canvas when 1st arrow

      if (clicks != 1) clicks++;
      else {
        // create a new line object
        var line = new Line(last_clk[0],last_clk[1],coords[0],coords[1]);
        line.addArrowhead(ctx);  // draw the line and arrow

        clicks = 0;  //reset nr. clicks
      }

      last_clk = [coords[0],coords[1]];  //store last click coords
    }
  };

  //register click event to draw line-marker in canvas
  cnv.addEventListener('click', drawArrow, false);
}

// set object of drawArrowCnv class
var drawAr =0;
if(document.getElementById(cnv_id)) drawAr = new drawArrowCnv(cnv_id);

//register click on #btn_drawar to enable /disable drawing action
var btn_drawar = document.getElementById('btn_drawar');
if(btn_drawar) btn_drawar.addEventListener('click', function(e){
  if(drawAr ==0 && document.getElementById(cnv_id)) drawAr = new drawArrowCnv(cnv_id);
  drawAr.allowDraw();
  e.target.style.background = (drawAr.letDraw() ==1) ? '#f00' :'#dadafb';
  e.target.innerHTML = (drawAr.letDraw() ==1) ? 'Disable Drawing' :'Enable Drawing';
});

//register click on #btn_delar to delete arrows
var btn_delar = document.getElementById('btn_delar');
if(btn_delar) btn_delar.addEventListener('click', function(e){
  drawAr.restoreCanvas();
});

//register click on #btn_getimg to get canvas image
var btn_getimg = document.getElementById('btn_getimg');
btn_getimg.addEventListener('click', function() {
  this.href = document.getElementById(cnv_id).toDataURL();  //set link to canvas data
  this.download ='canvas_'+ cnv_id +'.jpg';  //return for download with an image name
});

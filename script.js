var c=document.getElementById("myCanvas");
		   var s=document.getElementById("scale");
		   var i=document.getElementById("inc");
		   var ctx=c.getContext("2d");
		   var count=1;//2
		   var current=0;//1
		   var done = [0];
		   var alt = 0
		   var alt2 = 1;
		   var scale = 1;
		   var inc = 1000;
		   
		   draw();
		   
		   function assignScale(){
		       scale = s.value/10.0;
		       draw();
		   }
		   
		   function q(){
		       alert("The hop along the number line starts at 1, and increments by 1 each time. The hop will move backwards that amount if it lands on a positive number that hasn't already been hopped to/from, otherwise it will hop forwards that amount. Blue represents hops forwards, orange represents hops backwards.");
		   }
		   
		   function assignInc(){
		       inc = i.value;
		       draw();
		   }
		   
		   function draw(){
		        ctx.clearRect(0, 0, c.width, c.height);
		        count=1;//2
		        current=0;//1
		        alt = 0
		        alt2 = 1;
		        done = [0];
    		   while(current < inc){
    		       if((current - count > 0) && !done.includes(current-count)){
    		           current-=count;
    		           count++
    		           ctx.beginPath();
    				   ctx.arc(scale*(done[done.length-1]+current)/2.0,300,scale*(done[done.length-1]-current)/2.0,alt*Math.PI,alt2*Math.PI);
    				   ctx.strokeStyle = "orange";
    				   ctx.closePath();
    			       ctx.stroke();
    			       done.push(current)
    		       } else {
    		           current+=count;
    		           count++;
    		           ctx.beginPath();
    				   ctx.arc(scale*(current+done[done.length-1])/2.0,300,scale*(current-done[done.length-1])/2.0,alt*Math.PI,alt2*Math.PI);
    				   ctx.strokeStyle = "blue";
    				   ctx.closePath();
    			       ctx.stroke();
    		           done.push(current);
    		       }
    		       alt ^= 1;
    		       alt2 ^= 1;
    		   }
		   }
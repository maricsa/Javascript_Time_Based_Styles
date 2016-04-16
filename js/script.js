$(document).ready(function(){
  console.log('Jquery is working!')
	var nextTick = setInterval(function(){

		var time = new Date();
		var hr = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var ms = time.getMilliseconds();

		$('#hr').text(hr);
		$('#min').text(min);
		$('#sec').text(sec);
		$('#ms').text(ms); 


//Change the background to a random color every 5 minutes.
   
    randomBackground = function(){
      var r1 = Math.floor(Math.random() * (256))    
      var g1 = Math.floor(Math.random() * (256))   
      var b1 = Math.floor(Math.random() * (256))   

    if (min % 5 === 0 && ms < 10 && sec == 0){
      $("body").css("background-color", "rgb("+r1+","+g1+","+b1+")")
     };
      
    };
     randomBackground();

  //Change the text color to white 
  //if it is an odd minute and another color if it is even minute.

    if (min % 2 === 0) {      
      $("#min").css("color", "blue");
    } 
    else {
      $("#min").css("color", "white"); 
    };
  
    // if (min == 0 && ms < 10 && sec == 0) {
     
    // };

//Change the text color of "What time is it?"
//to a different color every hour, selected 
//from an array of colors.

    var renCol = ["black","red","orange"];

    window.setInterval(function(){
      var renRand = Math.floor(Math.random() * renCol.length);
      $("h1").css({"color": renCol[renRand]})
    }, 3600000)
    

  }, 1000);

});

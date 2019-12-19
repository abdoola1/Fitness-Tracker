<template>
  <div>
     <div class="columns">
        <div class="column is-one-quarter">            
              <ul class="panel">              
                <p class="panel-heading">
                    How much you burned
                </p>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">

                <form id="Burnt"  method="get"> 
                 WEIGHT(LBS): <input  type="integer" name="LBS" id="LBS"><br/>
                  MINUTES: <input  type="integer" name="MIN" id="MIN"><br/>
                  EXERCISE: <span>
                  <select  name="burnt" form="Burnt">
                        <option>bicycling</option>
                        <option>fishing</option>
                        <option>housecleaning</option>
                        <option>meditating</option>
                        <option>sleeping</option>
                        <option>videogames(sitting)</option>
                  </select>
                  <br> 
                  {{burnt}}                 
                  </span>
                  CALORIES BURNT: <span id="CALORIES BURNT"></span><br/>
                  <input type="button" value="Submit" onClick="writeValues(form)">
                </form>       
                             
              </ul>
        </div>
    </div>
  </div>
  
</template>



<script>
window.writeValues = function(form) { 
    var LBS = form.LBS.value;
    var MIN = form.MIN.value;
    var TYPE =form.burnt.value;
    var met;
    if(TYPE=="bicycling"){
      met=7.5;
    }
    else if(TYPE=="fishing"){
      met=3.5;
    }
    else if(TYPE=="housecleaning"){
      met=3.3;
    }
    else if(TYPE=="sleeping"){
      met=.93;
    }
    else if(TYPE=="meditating"){
      met=1;
    }
    else if(TYPE=="videogames(sitting)"){
      met=1;
    }
    else{met=2;}



  document.getElementById("CALORIES BURNT").innerHTML =(((((LBS/2.2)*met)*MIN)/60));
}


 
</script>


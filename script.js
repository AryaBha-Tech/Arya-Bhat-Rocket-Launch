function doAction(){
  timer = createTimer(10)
  let launchTimer = setInterval(function(){
    count = timer()
    document.getElementById("countdowntimer").textContent = count;
    if(count === 0){
        clearInterval(launchTimer);
        launch()
    }
    },1000);
}

    

function createTimer(start){
  let timeleft = start + 1;
  return function(){
    timeleft--;
    return timeleft
  }
}

function launch(){
  $(document).ready(function(){
    $("div").animate({
      left: '2000px'
    });
  })
}
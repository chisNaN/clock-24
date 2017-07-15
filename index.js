function placeCircles() {

  const circleWidth = 50;
  let htmlOutput = '';
  const w = window.innerWidth;
  const height = window.innerHeight;
  let left = Math.round(w / 2) - circleWidth * 1.5;
  let top = 0;
  const d = new Date();
  const h = d.getHours();
  //if(h === 0) h = 24;
  const percent = Math.round((d.getMinutes() / 60) * 100);

  for(let i = -1; ++i<24;) {
    if(i >= 0 && i < 13) {
      top += circleWidth;
      if(i >= 0 && i < 7) {
        left += circleWidth;
        if(i === h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: red; top: '+top+'px; left: '+left+'px;"><h3>'+percent+' %</h3></div>';
        }else if(i < h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: cornflowerblue; top: '+top+'px; left: '+left+'px;"><h3>'+i+' h</h3></div>';
        }else if(i > h){
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: none; top: '+top+'px; left: '+left+'px;"><h3>'+i+' h</h3></div>';
        }
      }else {
        left -= circleWidth;
        if(i === h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: red; top: '+top+'px; left: '+left+'px;"><h3>'+percent+' %</h3></div>';
        }else if(i < h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: cornflowerblue; top: '+top+'px; left: '+left+'px;"><h3>'+i+' h</h3></div>';
        }else if(i > h){
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: none; top: '+top+'px; left: '+left+'px;"><h3>'+i+' h</h3></div>';
        }          }
    }else {
      top -= circleWidth;
      if(i > 12 && i < 19) {
        left -= circleWidth;
        if(i === h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: red; top: '+top+'px; left: '+left+'px;"><h3>'+percent+' %</h3></div>';
        }else if(i < h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: cornflowerblue; top: '+top+'px; left: '+left+'px;"><h3>'+i+' h</h3></div>';
        }else if(i > h){
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: none; top: '+top+'px; left: '+left+'px;"><h3>'+i+' h</h3></div>';
        }
      }else {
        left += circleWidth;
        if(i === h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: red; top: '+top+'px; left: '+left+'px;"><h3>'+percent+' %</h3></div>';
        }else if(i < h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: cornflowerblue; top: '+top+'px; left: '+left+'px;"><h3>'+i+' h</h3></div>';
        }else if(i > h){
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: none; top: '+top+'px; left: '+left+'px;"><h3>'+i+' h</h3></div>';
        }          }
    }
  }
  //console.log(htmlOutput);
  htmlOutput += '<div id="date" style="position: absolute; top: 300px; left: '+((w / 2) - circleWidth)+'px;"><h1>'+new Date().toJSON().substr(0, 10)+'</h1></div>';
  document.querySelector('#main').innerHTML = htmlOutput;

}

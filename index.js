function placeCircles() {

  let htmlOutput = '';
  const w = window.innerWidth;
  const height = window.innerHeight;
  let left = Math.round(w / 2);
  let top = 0;
  const d = new Date();
  let h = d.getHours();
  if(h === 0) h = 24;
  const minutesOpacity = Math.round10(d.getMinutes() / 60, -1) + 0.1;
  const percent = Math.round((d.getMinutes() / 60) * 100);

  for(let i = 0; ++i<25;) {
    if(i > 0 && i < 13) {
      top += 50;
      if(i > 0 && i < 7) {
        left += 50;
        if(i === h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="opacity: '+minutesOpacity+'; background-color: red; top: '+top+'px; left: '+left+'px;"><h3>'+percent+' %</h3></div>';
        }else if(i < h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: cornflowerblue; top: '+top+'px; left: '+left+'px;"><h3>'+i+'</h3></div>';
        }else if(i > h){
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: none; top: '+top+'px; left: '+left+'px;"><h3>'+i+'</h3></div>';
        }
      }else {
        left -= 50;
        if(i === h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="opacity: '+minutesOpacity+'; background-color: red; top: '+top+'px; left: '+left+'px;"><h3>'+percent+' %</h3></div>';
        }else if(i < h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: cornflowerblue; top: '+top+'px; left: '+left+'px;"><h3>'+i+'</h3></div>';
        }else if(i > h){
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: none; top: '+top+'px; left: '+left+'px;"><h3>'+i+'</h3></div>';
        }          }
    }else {
      top -= 50;
      if(i > 12 && i < 19) {
        left -= 50;
        if(i === h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="opacity: '+minutesOpacity+'; background-color: red; top: '+top+'px; left: '+left+'px;"><h3>'+percent+' %</h3></div>';
        }else if(i < h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: cornflowerblue; top: '+top+'px; left: '+left+'px;"><h3>'+i+'</h3></div>';
        }else if(i > h){
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: none; top: '+top+'px; left: '+left+'px;"><h3>'+i+'</h3></div>';
        }
      }else {
        left += 50;
        if(i === h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="opacity: '+minutesOpacity+'; background-color: red; top: '+top+'px; left: '+left+'px;"><h3>'+percent+' %</h3></div>';
        }else if(i < h) {
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: cornflowerblue; top: '+top+'px; left: '+left+'px;"><h3>'+i+'</h3></div>';
        }else if(i > h){
          htmlOutput += '<div class="circle" id="_'+i+'" style="background-color: none; top: '+top+'px; left: '+left+'px;"><h3>'+i+'</h3></div>';
        }          }
    }
  }
  //console.log(htmlOutput);
  document.querySelector('#main').innerHTML = htmlOutput;
}

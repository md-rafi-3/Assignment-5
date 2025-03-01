document.getElementById('theme-btn').addEventListener('click',function(){
    const firstValue = Math.random()*255;
    const convertedFirstValue = parseInt(firstValue);
    const secoundValue = Math.random()*255;
    const convertedSecoundValue = parseInt(secoundValue);
    const thirdValue = Math.random()*255;
    const convertedThirdValue = parseInt(thirdValue);

 
 
  const color = 'rgb'+'('+convertedFirstValue+','+convertedSecoundValue+','+convertedThirdValue+')';
 
  document.getElementById('body').style.backgroundColor = color;
  
})
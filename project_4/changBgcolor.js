
const randomcolor = function(){
    const hex = "123456789ABCDEF"
    let color = '#'
    for(let i= 0; i < 6; i++){
      color += hex[Math.floor(Math.random() * 16)]
    }
    return color
  } ;
  
  let intravalId;
  const startChangingColor = function(){
    if(!intravalId){
      intravalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor(){
      document.body.style.backgroundColor = randomcolor()
    };
  };
  const stopChangingColor = function(){
    clearInterval(intravalId)
    intravalId = null;
  };
  
  document.querySelector("#start").addEventListener('click', startChangingColor)
  document.querySelector("#stop").addEventListener('click', stopChangingColor)
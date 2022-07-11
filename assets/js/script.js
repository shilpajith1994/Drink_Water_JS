
var bottles = document.querySelectorAll("li"),
remainDisplay = document.querySelector(".remained > span"),
remained = document.querySelector(".remained"),
percentage = document.querySelector(".percentage");


bottles.forEach(function(element,index) {
element.addEventListener('click', function() {

        if (
           bottles[index].classList.contains("full") &&
          !bottles[index].nextElementSibling.classList.contains("full")
        ) 
        { index-- ; }
       
        bottles.forEach(function(cup, cupIdx) {
          if (cupIdx <= index) {
            cup.classList.add("full");
          } else {
            cup.classList.remove("full");
          }
        });

    
    var literValue = 2-((index+1)*.25);
    var remainedValue = (literValue*100)/2;
    var percentValue = 100-remainedValue;
        
        remainDisplay.innerHTML = literValue+"L";
        percentage.innerHTML = percentValue+"%";
        remained.style.height = remainedValue+"%";
        percentage.style.height = percentValue+"%";
   

        if(remainDisplay.textContent == "0L") {
            remained.classList.add('active');
            remainDisplay.classList.add('active');
        } else {
            remained.classList.remove('active');
            remainDisplay.classList.remove('active');
        }

    });
});














































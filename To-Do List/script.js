const input = document.querySelector('.inptblck');

function addfunction(e) {

  const inpVal = input.value;
  const todo = {
    text: inpVal,
    isCompleted: false,
  };
  if (input.value == '') {
    alert('Input daxil edin!')
  }
  else {
    let divv = document.getElementById('one');
    divv.style.display = 'block';

    const commonUl = document.getElementById('ilkul');

    const litag = document.createElement('li');
    litag.classList.add('ilkli');
    litag.textContent = todo.text;

    const silmek = document.createElement('span');
    silmek.classList.add('knopka');
    silmek.innerText = '';

    let knopka = document.querySelectorAll('.knopka');
    commonUl.appendChild(litag);
    litag.appendChild(silmek);

    input.value = ""
    commonUl.addEventListener("click", deleteItem)

    function deleteItem(e) {
      console.log(e.target.className);
      if (e.target.className === "knopka") {
        e.target.parentElement.remove();

        function a() {
          const commonUl = document.getElementById('ilkul');
          if (commonUl.children.length == 0) {
            divv.style.display = "none"
          }
        }
        a()
      }
      e.preventDefault();


    
      }
    }

  }

function sorting() {  
  let img = document.querySelector('.imgblck'); 
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;  
  list = document.getElementById("ilkul");  
  switching = true;  
  dir = "asc";   
  while (switching) {  
    switching = false;  
    b = list.getElementsByTagName("LI");  
    for (i = 0; i < (b.length - 1); i++) {  
      shouldSwitch = false;  
      if (dir == "asc") {   
        img.style.transform = 'rotate(180deg)'; 
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {  
          shouldSwitch = true;  
          break;  
           
        }  
      } else if (dir == "desc") { 
        img.style.transform = 'rotate(0deg)'; 
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {  
          shouldSwitch= true;  
          break;  
        }  
      }  
    }  
    if (shouldSwitch) {   
      b[i].parentNode.insertBefore(b[i + 1], b[i]);  
      switching = true;  
      switchcount ++;  
    } else {  
      if (switchcount == 0 && dir == "asc") {  
        dir = "desc";  
        switching = true;  
      }  
    }  
  }
}

input.addEventListener("keyup", (a)=> {
 if(a.keyCode == 13){
   addfunction()
 }
})
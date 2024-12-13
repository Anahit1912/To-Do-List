let content=document.getElementById('content');
//let value = document.getElementById("list").value ;
function myFunction() {
    let value = document.getElementById("list").value ;
    if(value===""){
        alert("Please enter list");
    }else{
        const newDiv = document.createElement("div");
        const newP = document.createElement("p");
        const newInput = document.createElement("input");
        content.appendChild(newDiv);
        newDiv.classList.add('vehicles');
        newDiv.appendChild(newP);
        newDiv.appendChild(newInput);
        newP.innerHTML=value;
        document.getElementById('list').value="";
        newP.classList.add("item_span");
        newInput.classList.add("item_button");
        newInput.type="button";
        newInput.value="x";
        newInput.classList.add('close');
        let close = document.getElementsByClassName("close");
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
          //this.parentNode.parentNode.removeChild(this.parentNode);
            this.parentNode.remove();
            }
        }
        let item_span=document.getElementsByClassName("item_span");
        for (let j = 0; j < item_span.length; j++) {
            item_span[j].onclick = function() {
                this.classList.toggle('check_line');
                close[j].classList.toggle('check');
            }
        }
    }
    
 }
  

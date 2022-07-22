

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

input1.addEventListener('click', function(){
  input1.value = 'checked';
  xhr.onload()
});

input2.addEventListener('click', function(){
  input2.value = 'checked';
  xhr.onload()
});



const xhr = new XMLHttpRequest();

xhr.open('GET', 'pg.json', true);

xhr.onload = function(){

    if(input1.value=='checked'){
    arr = JSON.parse(this.responseText);
    arr.sort(function(a,b){
      return a.Charges - b.Charges
    })
    input1.value='';
    
  }
  else if(input2.value=='checked'){
     arr = JSON.parse(this.responseText);
     arr.sort(function (a, b) {
       return b.Charges - a.Charges;
     });
     input2.value= '';
  }
  else{
    arr = JSON.parse(this.responseText);
  }
   
    let content = document.getElementById('content')
    let html = '';
    for(let i=0; i<arr.length; i++){
       html += ` <div class="card mx-3 my-3" style="width: 18rem;">
  <img src="https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/airtel-logo-white-text-vertical.jpg" class="card-img-top" alt="..." style="height: 15rem; width:17rem; margin-left: -5px;">
  <div class="card-body">
    <h5 class="card-title">${arr[i].Name}</h5>
   <ul>
    <li>${arr[i].Charges}</li>
    <li>${arr[i].distance} minutes away from kiet college</li>
    <li>24*7 electricity available</li>
   </ul>
   <button id="${arr[i].id}"onclick = "showNumber(this.id)" class="btn btn-primary">Show Mobile-number</button>
   <span id= "mob-${arr[i].id}"></span>
   <button onclick = "copyText(${arr[i].id})" id= "btn-${arr[i].id}" style="visibility: hidden;"></button>
  </div>
  </div>`;
  
}
content.innerHTML = html;
}

function showNumber(item){
  let copyBtn = document.getElementById(`btn-`+item);
  let btn = document.getElementById(item);
  let mob = document.getElementById('mob-'+item)
  btn.style.display = 'none';
  mob.innerHTML = arr[parseInt(item)].mobile;
  copyBtn.style.visibility = "visible";
  copyBtn.innerHTML = 'Copy'
}


function copyText(id){
 const cb = navigator.clipboard;
 cb.writeText(arr[parseInt(id)].mobile).then(() => alert("copied")); 
}





xhr.send();





console.log('This is collegewalla website');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'pg.json', true);

xhr.onload = function(){
    arr = JSON.parse(this.responseText);
    // console.log(arr.length)
    let content = document.getElementById('content')
    let html = '';
    for(let i=0; i<arr.length; i++){
//         html += `<div class="card my-3" style= "height: 14rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${arr[i].Name}</h5>
//     <p class="card-text">Charges are ${arr[i].Charges}</p>
//   </div>
// </div>`;
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




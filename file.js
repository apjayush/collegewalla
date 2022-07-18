console.log('This is collegewalla website');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'pg.json', true);

xhr.onload = function(){
    arr = JSON.parse(this.responseText);
    // console.log(arr.length)
    let content = document.getElementById('content')
    let html = '';
    for(let i=0; i<arr.length; i++){
        html += `<div class="card my-3" style= "height: 14rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${arr[i].Name}</h5>
    <p class="card-text">Charges are ${arr[i].Charges}</p>
  </div>
</div>`;
    }
    content.innerHTML = html;
}

xhr.send();
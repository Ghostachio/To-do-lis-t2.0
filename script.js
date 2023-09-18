let addList = document.querySelector('#addList');
let inputEntered = document.getElementById('inputList');
let ul = document.querySelector("ul");

function checkLength(){
  return inputEntered.value.length;
}

function addToList(){
  if (checkLength() > 0) {
    addTask();
  }
}

function addTask (){
    let li = document.createElement('li');
    let aDiv = document.createElement('div');
    let btn = document.createElement('button')
        aDiv.className = "wrapper";
        btn.className = 'dlt';
        li.className = 'uncheck';
              li.appendChild(document.createTextNode(inputEntered.value));
              btn.appendChild(document.createTextNode('RMV'))
              aDiv.appendChild(li);
              aDiv.appendChild(btn);
              ul.appendChild(aDiv);
              inputEntered.value = '';
  }

  function handleTaskAction(event) {
    if (event.target.className === 'dlt') {
      event.target.parentElement.remove();
    } else if (event.target.classList.contains('uncheck')) {
      event.target.classList.toggle('check');
    }
  }



  addList.addEventListener('click', addToList);
  document.addEventListener('click', handleTaskAction);



  //Getting Elements from the Dom
  const list = document.getElementById('list');
  const inputBox = document.getElementById('inputbox');
  const submitBtn = document.getElementById('submit');


  

  //Event Listener
  document.addEventListener('DOMContentLoaded', saveTodosLocal);
  submitBtn.addEventListener('click', saveTodosLocal);
  list.addEventListener('click', deleteTodo);

  //functions

   function saveTodosLocal(){
    const inpValueOne = inputBox.value;
    const inpValueTwo = inputBox.value;
    if(localStorage){
     if(inputBox.value && inputBox.value){
      localStorage.setItem(inpValueOne, inpValueTwo);
      location.reload();
      }
    }
  }

  for (var i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
       list.innerHTML += `<li class = 'list-group-item rounded-pill p-3 d-flex justify-content-between todo'>${value}
        <button class="btn btn-danger text-light delete">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style = "pointer-events: none;" class="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>
    </button>
      </li>`;
    }


  function deleteTodo(e){
    if(e.target.classList.contains('delete')){
      for (var i = 0; i < localStorage.length; i++) {
      let parent = e.target.parentElement;
      list.removeChild(parent);
      const key = localStorage.key(i);
      localStorage.removeItem(key);
      }
    }
  }

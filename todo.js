const todoList = JSON.parse(localStorage.getItem('todoList')) || [];


addList();
function addTodo(){
  const inputElement=  document.querySelector('.js-input');
  const dateElement = document.querySelector('.js-date');
  
  const name = inputElement.value;
  const dueDate = dateElement.value;
  if(name==='' && dueDate==''){
    alert('Please enter a valid Name and Date !') ;
}
  else if(name===''){
    alert('Please enter a valid Name !') ;

  }
  else if (dueDate==''){
    alert('Please enter a valid Date !')
  }
  else{
  todoList.push({
    name,
    dueDate
    
  });
  }
  localStorage.setItem('todoList', JSON.stringify(todoList));
  inputElement.value = '';
  dateElement.value='';
  addList();
}

function addList(){
  let todoListHTML = '';

  for(let i = 0; i<todoList.length;i++){
    const todoObject = todoList[i];
    const { name , dueDate } = todoObject;

    const html = `
    <div>${i+1}. ${name}</div>
    <div>${dueDate}</div> 
    <button onclick="
        todoList.splice(${i},1);
        addList();" class="delete-btn">
          Delete
        </button>`
    todoListHTML +=html;
    
  }
  document.querySelector('.container').innerHTML = todoListHTML;
  
}
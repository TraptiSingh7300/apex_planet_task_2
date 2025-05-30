function addTask(){
    const newTask=document.createElement('li')
    const taskList=document.getElementById('task-list')
    taskList.appendChild(newTask)
    newTask.textContent=document.getElementById('task-input').value
    document.getElementById('task-input').value=""
    deleteTask(newTask)
}

function deleteTask(newTask){
    const deletebtn=document.createElement('button')
    deletebtn.textContent="DELETE"
    newTask.appendChild(deletebtn)
    deletebtn.onclick=function(){
        newTask.remove()
    }
}



function clearContents(element) {
  element.value = '';
}

function done(){
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;

    let isValid=true;
    if (name === "" || /\d/.test(name)) {
        alert("Please enter your name!");
        isValid = false;
    }else if(email === "" || !email.includes("@") || !email.includes(".")){
        alert("Please enter a valid email!");
    }else if (isValid) {
        alert("Form submitted successfully!");
        return true;
    } else {
        return false; 
    }
    
}
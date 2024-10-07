const input = document.getElementById('input');
function add(){
    
    //getting input value

    //looking for empty value
    if (input.value.trim() === '') {
        alert('Please enter a valid item.');
        return;
    }
    
    //creating li 
    const li = document.createElement('li');
    li.className = "todoListItem";
    
    
    //creating label to save input value in it
    const label = document.createElement('label');
    label.textContent = input.value;
    label.className = "itemLabel";   
    //creating checkbox
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = "checkBox";

    //craeting a div and adding label and checkbox to it and adding div to li
    const container = document.createElement('div');
    container.className = "container";
    container.appendChild(checkBox);
    container.appendChild(label);
    li.appendChild(container);

    //creating edit button
    const editBtn = document.createElement('button');
    editBtn.className = "editBtn";
    editBtn.innerHTML = '<img src="./images/icons8-edit-material-sharp-32.png" alt="" >';
    
    // creating deletion button
    const removeBtn = document.createElement('button');
    removeBtn.className = "removeBtn";
    removeBtn.innerHTML = '<img src="./images/icons8-cross-16.png" alt="" >';

    // creating a div and adding both buttons to it
    const container2 = document.createElement('div');
    container2.className = 'container2';
    container2.appendChild(editBtn);
    container2.appendChild(removeBtn);
    li.appendChild(container2)

    // adding li to ul
    document.getElementById('todoList').appendChild(li);

    


    
    const todoList = document.getElementsByClassName('todoList');

        // function for removing
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        
        
    //edit function
    editBtn.addEventListener('click', function() {
        // Check if the button is in edit mode
        if (editBtn.innerHTML.includes('tick.png')) {
            // Save the input value back to the label
            const editInput = document.querySelector('.editInput');
            label.innerHTML = editInput.value;
            editInput.replaceWith(label);
            editBtn.innerHTML = '<img src="./images/icons8-edit-material-sharp-32.png" alt="">';
        } else {
            // Enter edit mode
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.className = 'editInput';
            editInput.value = label.innerHTML;
            label.replaceWith(editInput);
            editInput.focus();
            editBtn.innerHTML = '<img src="./images/tick.png" alt="">';
    
            // Save on pressing Enter
            editInput.addEventListener('keydown', function(event) {
                if (event.key === "Enter") {
                    label.innerHTML = editInput.value;
                    editInput.replaceWith(label);
                    editBtn.innerHTML = '<img src="./images/icons8-edit-material-sharp-32.png" alt="">';
                }
            });
        }
    });
    input.value = '';
    input.focus();


    
}

input.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        add();
    }
})
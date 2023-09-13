
function change(){
    // console.log("key pressed");
    // step1
    var xhttp = new XMLHttpRequest();

    // step4
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            let output= JSON.parse(this.responseText);
            let tbody = document.getElementById("tbody");
            tbody.innerHTML='';
            
          
        let completedCount = 0; 
        const checkboxes = [];

            for (let i = 0; i < output.length; i++) {
                let row = document.createElement("tr");
                     let cell1 = document.createElement("td");
                        cell1.textContent = output[i].id;
                        let cell2 = document.createElement("td");
                        cell2.textContent = output[i].title;
                        let cell3 = document.createElement("td");

                        // Create a checkbox input element
                        let checkbox = document.createElement("input");
                        checkbox.type = "checkbox";

                        // Set the checked state based on the 'completed' value
                        checkbox.checked = output[i].completed;
                 // Disable the checkbox for completed tasks (to make it appear checked)
                        if (output[i].completed) {
                            checkbox.disabled = true;
                        }
                        // Add a CSS class for styling the checked checkbox
                    if (output[i].completed) {
                        checkbox.classList.add("checked-checkbox");
                    }
                    checkbox.addEventListener("change", function () {
                        if (this.checked) {
                            completedCount++; // Increment the counter when a checkbox is checked
                            if (completedCount === 5) {
                                alert("Congrats. 5 Tasks have been Successfully Completed");
                            }
                        } else {
                            completedCount--; // Decrement the counter when a checkbox is unchecked
                        }
                    });
                
                    checkboxes.push(new Promise((resolve) => {
                        // Resolve the Promise when the checkbox is checked
                        checkbox.addEventListener("change", function () {
                            if (this.checked) {
                                resolve();
                            }
                        });
                    }));
                
                    // Append the checkbox to the third cell
                    cell3.appendChild(checkbox);
                
                    row.appendChild(cell1);
                    row.appendChild(cell2);
                    row.appendChild(cell3);
                
                    tbody.appendChild(row);
                
                   
                }
                
                // Wait for all checkbox Promises to resolve
                Promise.all(checkboxes).then(() => {
                    alert("Congrats. 5 Tasks have been Successfully Completed");
                });
            
               
        }
    }

    // step2
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);

    // step3
    xhttp.send();
}
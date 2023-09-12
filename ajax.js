
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
            
            for(let i=0;i<output.length;i++){
                let row=document.createElement("tr");
                let cell1=document.createElement("td")
                cell1.textContent=output[i].id;
                let cell2=document.createElement("td")
                cell2.textContent=output[i].title;
                let cell3=document.createElement("td")
                cell3.textContent=output[i].completed;

                row.appendChild(cell1);
                row.appendChild(cell2);
                row.appendChild(cell3);

                tbody.appendChild(row);

            }
            
        }
    }

    // step2
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);

    // step3
    xhttp.send();
}
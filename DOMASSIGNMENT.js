var arr = [
    {"FirstName": "Mayank", "LastName": "Omar", "Email": "mayankomar71@gmail.com", 
    "Id":123,"PhoneNumber":9554899814, "Designation":"Software Engineer", "DOB": "18-02-1998"
    },
    {"FirstName": "Sahib", "LastName": "Bhatia", "Email": "sahibbhatia11@gmail.com", 
    "Id":456,"PhoneNumber":9554899824, "Designation":"Tester", "DOB": "11-02-1998"
    },
    {"FirstName": "Prateek", "LastName": "jain", "Email": "prateekjain@gmail.com", 
    "Id":459,"PhoneNumber":9554899825, "Designation":"Software engineer", "DOB": "12-02-1999"
    },
    {"FirstName": "Harsh", "LastName": "gupta", "Email": "harshgupta@gmail.com", 
    "Id":459,"PhoneNumber":9554899856, "Designation":"Software engineer", "DOB": "15-02-1999"
    },
    {"FirstName": "Kamal", "LastName": "gupta", "Email": "kamalgupta@gmail.com", 
    "Id":956,"PhoneNumber":9554899889, "Designation":"Software engineer", "DOB": "15-02-1999"
    },
    {"FirstName": "Rocky", "LastName": "singh", "Email": "rockysingh@gmail.com", 
    "Id":900,"PhoneNumber":9554899789, "Designation":"Intern", "DOB": "19-02-1999"
    }

]
var headings;
var values;

function Generate(){

   head = Object.keys(arr[1])
    
    
    values =arr.map((element,index)=>{
        return Object.values(arr[index])
    
    })

    
    var table_data =[];
    var text_data =[];
    var table = document.createElement('table');
    table.border="1";
    var headings = document.createElement('thead');

    table.appendChild(headings);

    for(var i=0;i<head.length;i++){
    headings.appendChild(document.createElement("th")).
    appendChild(document.createTextNode(head[i]));
    }

    for (var i = 0; i < values.length; i++){
        var tr = document.createElement('tr');    
        for(let j=0;j<head.length;j++){
             table_data[j] =document.createElement('td');
             text_data[j] = document.createTextNode(values[i][j]);
             table_data[j].appendChild(text_data[j]);
             tr.appendChild(table_data[j])

        }
  

    table.appendChild(tr);
}
document.body.appendChild(table);
    


}


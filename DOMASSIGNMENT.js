//My json
var arr = [{
        "FirstName": "Mayank",
        "LastName": "Omar",
        "Email": "mayankomar71@gmail.com",
        "Id": 123,
        "PhoneNumber": 9554899814,
        "Designation": "Software Engineer",
        "DOB": 18021998
    },
    {
        "FirstName": "Sahib",
        "LastName": "Bhatia",
        "Email": "sahibbhatia11@gmail.com",
        "Id": 456,
        "PhoneNumber": 9554899824,
        "Designation": "Tester",
        "DOB": 11021998
    },
    {
        "FirstName": "Prateek",
        "LastName": "jain",
        "Email": "prateekjain@gmail.com",
        "Id": 459,
        "PhoneNumber": 9554899825,
        "Designation": "Software engineer",
        "DOB": 12021999
    },
    {
        "FirstName": "Harsh",
        "LastName": "gupta",
        "Email": "harshgupta@gmail.com",
        "Id": 459,
        "PhoneNumber": 9554899856,
        "Designation": "Software engineer",
        "DOB": 15021999
    },
    {
        "FirstName": "Kamal",
        "LastName": "gupta",
        "Email": "kamalgupta@gmail.com",
        "Id": 956,
        "PhoneNumber": 9554899889,
        "Designation": "Software engineer",
        "DOB": 15021999
    },
    {
        "FirstName": "Rocky",
        "LastName": "singh",
        "Email": "rockysingh@gmail.com",
        "Id": 900,
        "PhoneNumber": 9554899789,
        "Designation": "Intern",
        "DOB": 19021999
    }

]
//sorting my table according to column
function sort_table(head) {
    switch (head) {
        case 0:

            arr.sort(function (a, b) {
                if (a.FirstName < b.FirstName)
                    return -1;
                if (a.FirstName > b.FirstName)
                    return 1;
                return 0;
            });



            break;
        case 1:
            arr.sort(function (a, b) {
                if (a.LastName < b.LastName)
                    return -1;
                if (a.LastName > b.LastName)
                    return 1;
                return 0;
            });


            break;
        case 2:
            arr.sort(function (a, b) {
                if (a.Email < b.Email)
                    return -1;
                if (a.Email > b.Email)
                    return 1;
                return 0;
            });


            break;
        case 3:
            arr.sort(function (a, b) {
                return a.Id - b.Id;
            });

            break;
        case 4:
            arr.sort(function (a, b) {
                return a.PhoneNumber - b.PhoneNumber;
            });

            break;
        case 5:
            arr.sort(function (a, b) {
                if (a.Designation < b.Designation)
                    return -1;
                if (a.Designation > b.Designation)
                    return 1;
                return 0;
            });


            break;
        default:
            arr.sort(function (a, b) {
                return a.DOB - b.DOB;
            });

    }
    tabledata.remove();
    Generate();

}


var headings;
var values;

//Generating my Dynamic Table

function Generate() {

    head = Object.keys(arr[1])


    values = arr.map((element, index) => {
        return Object.values(arr[index])

    })


    var table_data = [];
    var text_data = [];
    var table = document.createElement('table');
    table.border = "1";
    table.setAttribute('id', 'tabledata');
    var headings = document.createElement('thead');

    table.appendChild(headings);
    var count = 0;

    for (var i = 0; i < head.length; i++) {
        var a = document.createElement("th")
        headings.appendChild(a).appendChild(document.createTextNode(head[i]));
        a.setAttribute("onclick", "sort_table(" + count + ")");
        count += 1;
    }


    for (var i = 0; i < values.length; i++) {
        var tr = document.createElement('tr');
        for (let j = 0; j < head.length; j++) {
            table_data[j] = document.createElement('td');
            text_data[j] = document.createTextNode(values[i][j]);
            table_data[j].appendChild(text_data[j]);
            tr.appendChild(table_data[j])

        }


        table.appendChild(tr);
    }

    document.body.appendChild(table);

}

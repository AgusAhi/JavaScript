let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);

for (let i = 0; i < obj.employees.length; i++) {
    document.getElementById("demo").innerHTML +=
    obj.employees[i].firstName + " " + 
    obj.employees[i].lastName + "<br>";
}



let text1 = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj1 = JSON.parse(text1);

for (let i = 0; i < obj1.employees.length; i++) {
    document.getElementById("demo1").innerHTML +=
    obj1.employees[i].firstName + " " + 
    obj1.employees[i].lastName + "<br>";
}








   






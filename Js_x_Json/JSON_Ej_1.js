let text2 = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj2 = JSON.parse(text2);

for (let i = 0; i < obj2.employees.length; i++) {
    document.getElementById("demo2").innerHTML += "⚫ " + 
    obj2.employees[i].firstName + " - " + 
    obj2.employees[i].lastName + "<br>";
}
document.getElementById("demo2").innerHTML += "<br>"

let contenido = '<table border = "1">';
contenido += "<tr><th>First Name</th><th>Last Name</th></tr>";
for (let i = 0; i < obj2.employees.length; i++) {
    contenido += "<tr><td>" + 
    obj2.employees[i].firstName + "</td><td>" + 
    obj2.employees[i].lastName + "</td></tr>";
}
contenido += "</table>";
document.getElementById("demo3").innerHTML = contenido;

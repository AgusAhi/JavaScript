let text2 = '{"productos":{' + 
' "producto":[' +
' {"nombre":"Camiseta",' +
' "precio":"19.99",' +
' "disponible":"true",' +
' "detalles":{"color":"Rojo",' +
' "talla":"M"}},' +
' {"nombre":"Pantalón",' +
' "precio":"29.99",' +
' "disponible":"false",' +
' "detalles":{"color":"Rojo",' +
' "talla":"L"}}]}}';

const obj2 = JSON.parse(text2);

let contenido = '<table border="1">';

for (let i = 0; i < obj2.productos.producto.length; i++) {
    contenido += "<tr><td>" +
     obj2.productos.producto[i].nombre +
      "</td><td>" +
       obj2.productos.producto[i].precio +
        "</td></tr>";
}
contenido += "</table>";

document.getElementById("tabla").innerHTML = contenido;
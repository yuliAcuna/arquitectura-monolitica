const readline = require("readline-sync");
 
 const productos = [];
 
 while (true) {
   const nombre = readline.question("Nombre del producto (o 'salir'): ");
   if (nombre.toLowerCase() === "salir") break;
 
   const precio = parseFloat(readline.question("Precio: "));
 
   productos.push({ nombre, precio});
 
   console.log("\nProductos ingresados:");
   console.log("---------------------------------------------");
   console.log("Nombre\t\tPrecio");
   console.log("---------------------------------------------");
   productos.forEach(p => {
     console.log(`${p.nombre}\t\t${p.precio}`);
   });
   console.log("---------------------------------------------\n");
 }
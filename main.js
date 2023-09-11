const propiedad = "bebidas";
const persona = {
  nombre: "almacen",
  [propiedad]: "almacen",
  email: "ignaciolopezm00@outlook.es",
};
const {
  nombre: first_name,
  apellido: last_name,
  email = "example@example.com",
} = persona;

console.log(first_name);
console.log(last_name);
console.log(email);

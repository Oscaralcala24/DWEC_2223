//Creo la variable fechaCumpleanosMS para guardar la fecha en milisegundos, pasandole mi fecha de nacimiento.
let fechaCumpleanosMS = new Date("1997-12-17").getTime();

//Creo la variable fechaCumpleanosF para guardar la fecha, pasandole los milisegundos.
let fechaCumpleanosF = new Date(fechaCumpleanosMS);

console.log(fechaCumpleanosF.toString()); 
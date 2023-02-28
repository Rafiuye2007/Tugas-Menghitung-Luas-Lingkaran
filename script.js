// function tambah(a, b){
//      return a * b;
//  }

// var a = parseInt(prompt("Masukan nilai 1 :"));
// var b = parseInt(prompt("Masukan nilai 2 :"));
// var hasil = tambah(a, b); 

//  console.log(hasil);

// var hasil = kali(tambah(5, 5), tambah(3, 2));
// console.log(hasil);


// function tambah() { 
//     var hasil = 0;
//     for (i = 0; i < arguments.length; i++){
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// var coba = tambah(3, 5, 10, 80, );
// console.log(coba); 

var pi; 
var r;
var total;


function luaslingkaran(a, b){
    r = a ** 2
    pi = 3,14
    total = r * pi;
    return total;
}

alert(luaslingkaran(8));
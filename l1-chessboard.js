// # # # #
//# # # # 
// # # # #
//# # # # 
// # # # #
//# # # # 
// # # # #
//# # # #

// mag maximaal 8 blokjes groot zijn
var size = 8;
//een lege string
var str = '';
//als i kleiner is dan 8 gaat door naar de tweede loop
for ( var i = 0; i < size; i++ ) {
    // j is een nieuwe variabel waarmee gekeken wordt of het deelbaar is samen met i door 2
    for ( var j = 0; j < size; j++ ) {
        if ((i+j) % 2 ) {
            //voegt een spatie toe aan de string
            str += ' ';
        } else {
            //voegt een # toe aan de string
            str += '#';
        }
    }
    //zorgt voor een nieuwe regel
    str += '\n';
}
console.log(str);
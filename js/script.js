let celcius = 50;
let fahrenheit = 50;
/* RUMUS CELCIUS KE FAHRENHEIT */
let rumus_celcius = (celcius * 1.8) + 32;
// console.log(rumus_celcius);

/* RUMUS FAHRENHEIT KE CELCIUS */
let rumus_fahrenheit = (fahrenheit - 32) / 1.8
// console.log(rumus_fahrenheit);


/**
 * LOGIC JS UNTUK CALCULATOR SUHU CELCIUS AND FAHRENHEIT
 */
let getidFahrenheit = document.getElementById('Fahrenheit');
let getidCelcius = document.getElementById('celcius');
getidCelcius.addEventListener("keyup",KeyUp)
function KeyUp()
{
    let e = this.value;
    let chars = /^\d{0,100}$/;
    if (!chars.test(e)) {
        getidCelcius.value = '';
        alert('bukan angka masee');
    }
}

/* 
* button konversi
*/
document.getElementById('konversi').addEventListener('click',function () {
    let hasil = Rumuscelcius(getidCelcius.value)
    document.getElementById('Fahrenheit').value = hasil;
    /* kalkulasi */
    document.getElementById('kalkulasi').value = '(' + getidCelcius.value + ' * ' + ' 1.8 '+')' + ' + ' + ' 32' + ' = ' + hasil + '°F'

})
/* 
* button reset
*/
document.getElementById('reset').addEventListener('click',function () {
    document.getElementById('celcius').value = '';
    document.getElementById('Fahrenheit').value = '';
    document.getElementById('kalkulasi').value = '';
})
/* 
*  button reverse
*/
document.getElementById('reverse').addEventListener('click',function () {
    if (getidFahrenheit.value) {
        let hasil = Rumusfahrenheit(getidFahrenheit.value)
        console.log(hasil);
    } 
})
/* 
* cara kalkulasi
*/
function Rumuscelcius(C)
{
    return (C * 1.8) + 32;
}

function Rumusfahrenheit(F)
{
    return (F - 32) / 1.8;
}
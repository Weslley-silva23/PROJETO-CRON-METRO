let hora = 0;
let minuto = 0;
let segundo = 0;


let cron;
const tempo = 1000;


function start() {
    cron = setInterval(() => { timer(); }, 50);
}

function pause() {
    clearInterval(cron);


}
function reset() {
    clearInterval(cron);
    hora = 0;
    minuto = 0;
    segundo = 0;
    document.getElementById('number').innerText = '00:00:00';
}

function timer() {

    segundo++;

    if (segundo === 60) {
        segundo === 0;
        minuto++;


        if (minuto === 60) {
            minuto === 0;
            hora++;
        }
    }


    const format = (hora < 10 ? '0' + hora : hora) + ':' + (minuto < 10 ? '0' + minuto : minuto) + ':' + (segundo < 10 ? '0' + segundo : segundo);

    document.getElementById('number').innerText = format;



    return format;
}
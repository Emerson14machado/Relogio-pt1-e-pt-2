function relogio() {

    var img = document.getElementById ("imagem")



    const espacoRelogio = document.querySelector(".relogio");

    const horaAgora = new Date();

    const horas = horaAgora.getHours();

    const minutos = horaAgora.getMinutes();

    const segundos = horaAgora.getSeconds();

    const formatoHoras = horas.toString().padStart(2, "0");
    
    const formatoMinutos = minutos.toString().padStart(2, "0");

    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
    //.//.//.//.//.//.//.//.//.//.//.//.
    //.//.//.//.//.//.//.//.//.//.//.//.
    //.//.//.//.//.//.//.//.//.//.//.//.
    //.//.//.//.//.//.//.//.//.//.//.//.
    //.//.//.//.//.//.//.//.//.//.//.//.
    const frase = document.querySelector('.frase')

    dia = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-feira', 'Sexta-Feira', 'Sábado'); // Array é um arranjo (Armazena varios dados ao mesmo tempo).

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'novembro', 'Dezembro');

    hoje = new Date();

    frase.innerHTML = `${dia[hoje.getDay()]},  ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]}  de ${hoje.getFullYear()}`

    if (formatoHoras >= 00 && formatoHoras < 12) {
        document.body.style.backgroundImage = 'url(https://c.wallhere.com/photos/fe/5b/ocean_sun_sol_praia_water_gua_clouds_50mm-1063071.jpg!d)'

        document.body.style.backgroundSize = "1400px 660px"

        img.src = "/img/img1.jpg"


    ;}

    else if (formatoHoras >= 12 && formatoHoras < 18) {
        document.body.style.backgroundImage = 'url(https://c.wallhere.com/photos/ef/16/light_sun_inspiration_sol_portugal_water_rio_clouds-1050344.jpg!d)'

        document.body.style.backgroundSize = "1600px 750px"

        img.src = "/img/tarde2.jpeg"




    ;}

    else {
        document.body.style.backgroundImage = 'url(https://c.wallhere.com/photos/3a/8b/nature-287117.jpg!d)'

        document.body.style.backgroundSize = "1400px 750px"

        img.src = "img/img2.jfif"

    }


}

setInterval(relogio, 1000)













const datiPreventivo = document.getElementById('form-preventivo');


datiPreventivo.addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeUtente = document.getElementById('name');
    const cognomeUtente = document.getElementById('surname');
    const emailUtente = document.getElementById('inputEmail');
    const codicePromo = document.getElementById('promo');
});

console.log(datiPreventivo);
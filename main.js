const datiPreventivo = document.getElementById('form-preventivo');



datiPreventivo.addEventListener('submit', function (event) {
    event.preventDefault();


    //raccolta dati

    let datiUtente = [];
    let sceltaLavoro = '';
    const nomeUtente = document.getElementById('name').value;
    const cognomeUtente = document.getElementById('surname').value;
    const emailUtente = document.getElementById('inputEmail').value;
    const codicePromo = document.getElementById('promo').value;
    const lavoro = document.getElementById('work').value;
    sceltaLavoro = Number(lavoro);
    //console.log(sceltaLavoro);
    console.log(codicePromo);
    //tariffe orarie
    const tariffaBackend = 20.5;
    const tariffaFrontend = 15.3;
    const tariffaProjectAnalysis = 33.6;
    const monteOrario = 10;

    //funzione costo lavoro
    function tariffa(num1, num2) {
        let totale = num1 * num2;
        return totale
    };

    //calcolo preventivo
    const totaleBackEnd = tariffa(tariffaBackend, monteOrario);
    const totaleFrontEnd = tariffa(tariffaFrontend, monteOrario);
    const totaleProjAnalysis = tariffa(tariffaProjectAnalysis, monteOrario);

    //codici promozionali
    const scontoPromo = 0.25;
    const promoAttiva = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

    //totale preventivo
    let preventivo = '';
    if (sceltaLavoro == '1') {
        preventivo = totaleBackEnd;
    } else if (sceltaLavoro == '2') {
        preventivo = totaleFrontEnd;
    } else if (sceltaLavoro == '3') {
        preventivo = totaleProjAnalysis;
    };
    //check promozioni
    if (promoAttiva.includes(codicePromo)) {
        preventivo = Number(preventivo - (preventivo * scontoPromo)).toFixed(2);
    };

    document.getElementById('prezzo').innerText = `${preventivo}`;
    document.getElementById('prezzo-finale').classList.toggle('d-none');



    datiUtente.push(nomeUtente, cognomeUtente, emailUtente);
    console.log(datiUtente);

})
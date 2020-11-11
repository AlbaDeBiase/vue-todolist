// definire una lista di todo e stamparli in pagina in un elenco
// predisporre un input testuale per aggiungere un nuovo todo: al click di un pulsante,
// il testo inserito nell'input viene aggiunto alla lista dei todo
// al click su un item della lista, il todo viene rimosso
// BONUS: intercettare anche il tasto "ENTER" per aggiungere un nuovo todo

var app = new Vue({

    el: '#container',
    data: {
        titolo: 'Lista di cose da fare',
        azioni: [
            { message: 'studiare'},
            { message:'leggere'},
            { message:'ripassare'},
            { message:'comprare il latte'},
            { message:'andare a correre'}
        ],
        nuova_azione: '',

    },

    methods: {
        inserisci_item(){
            this.azioni.push({message: this.nuova_azione});
        },

        rimuovi_item(indice){
            this.azioni.splice(indice,1);
        },
    }
})

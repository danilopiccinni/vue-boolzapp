const { createApp } = Vue

createApp({
    data() {
        return {
            // elenco dei contatti con tutti i dati utili
            contatti: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    name: 'Alessandro L.',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fedez',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, hai visto la mia pubblicità boolean?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma non mi sei venuto bene!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Quindi non ti è piaciuta???',
                            status: 'received'
                        },                        {
                            date: '10/01/2020 15:53:00',
                            message: 'Certo...ma eri tu il problema, tutto qui!!',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Marco',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Martina',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
            ],

            menuDrop: false,

            // valore ('indice') che aiuta a regolare la chat attiva ('active') visualizzata 
            indexActive : null,
            // vaolore dichiarato inizialmente vuoto collegato con il v-model a un input in pagina dedicata a inserire un nuovo messaggio da inviare
            nuovoMessaggio : '' ,
            // valore dichiarato inizialmente vuoto collegato con il v-model a un input in pagina dedicata alla ricerca per filtrare la vista dei contatti
            ricerca : '',
            // funzione che serve a tenere giu la scrollbarr mano mano che si inviano messaggi
            scroll : scrollTo(0,10000),
        // forma js puro
            // let scroll = document.getElementById('chat-attiva')
            // scroll = scrollTo(0,10000)
        // forma js puro

            messaggiBot : ['ok' , 'no' , 'ma per piacere' , 'hai ragione'],
        }
    },

    methods : {

        // funzione dedicata all'invio del nuovo messaggio da inviare (evento 'keyup' sul tasto enter)
        addMessage() {
            // controllo che impedisce di inviare un messsaggio vuoto
            if (this.nuovoMessaggio == '') {
                // se è vero entra qui e quindi non esegue niente
            } else 
            {    // se la condizione è falsa entra qui e esegue l'invio e l'aggiunta del messaggio in memoria

                // constante che prende la data effettiva in quel momento che richiama la funzione tramite luxon
                const DataOra = luxon.DateTime;
                // variabile creata al momento utile alla trasformazione della data e ora nel formato in cui ci è piu' utile
                let DataOraCorrente = DataOra.now().toString('dd/mm/yyyy HH:mm:ss')
                // costante/oggetto che crea un nuovo messaggio che ha al suo interno la data appena preparata e il nuovo messaggio inserito nell'input dall'utente 
                const newmessage = {
                    date: DataOraCorrente,
                    message : this.nuovoMessaggio,
                    status : 'sent'
                }
                // aggiunge in memoria il nuovo messaggio creato prima 'newmessage'
                this.contatti[this.indexActive].messages.push(newmessage)
                // svuota il campo di input chat
                this.nuovoMessaggio = ''
                // un timer che ritorna una risposta automatica 
                setTimeout(this.rispostabot , 1000)
            }
        },

        // funzione dedicata alla risposta automatica del computer
        rispostabot() {
            indexRandom = Math.floor(Math.random() * (this.messaggiBot.length - 1) + 1)
            // constante che prende la data effettiva in quel momento che richiama la funzione tramite luxon
            const DataOra = luxon.DateTime;
            // variabile creata al momento utile alla trasformazione della data e ora nel formato in cui ci è piu' utile
            let DataOraCorrente = DataOra.now().toString('dd/mm/yyyy HH:mm:ss')
            // costante/oggetto che crea un nuovo messaggio che ha al suo interno la data appena preparata e il messaggio standard 'ok'
            const newmessagebot = {
                date: DataOraCorrente,
                message : this.messaggiBot[indexRandom],
                status : 'received',
            }
            // aggiunge in memoria il nuovo messaggio creato prima 'newmessagebot'
            this.contatti[this.indexActive].messages.push(newmessagebot)
            
        },

        // funzione dedicata a estrarre l'orario del messaggio, utile a visualizzarlo
        prendiOrarioMessaggio(messaggio) {
            return orario = messaggio.date[11]
                            + messaggio.date[12] 
                            + messaggio.date[13]
                            + messaggio.date[14]
                            + messaggio.date[15] 
        },

    
        // funzione dedicata a estrarre l'orario dell'ultimo messaggio, utile a visualizzarlo
        prendiOrario(contatto) {
            // condizione che controlla se ci siano ancora ultimi messaggi da vui prendere un orrario
            if (contatto.messages.length != 0) {
                // se è vero entra e si crea un indice massimo che si puo' trovare attualmente nell'array dei messaggi
                ultimomess= contatto.messages.length - 1
                // restituisce l'orario 
                return  orario = contatto.messages[ultimomess].date[11]
                                + contatto.messages[ultimomess].date[12] 
                                + contatto.messages[ultimomess].date[13]
                                + contatto.messages[ultimomess].date[14]
                                + contatto.messages[ultimomess].date[15] 
            } 

        },

        nuovaChat() {
            nuovoNome = prompt('con chi vuoi chattare?')

            creaChat =                 {
                name: nuovoNome,
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [],
            }

            this.contatti.push(creaChat)
        },

        // funzione dedicata a estrarre e visualizzare l'ultimo messaggio della chat per poi visualizzarla sotto ogni contatto
        prendiUltimoMess(contatto) {   
            // condizione che controlla se la lunghezza dell'array dei messaggi del contatto è uguale a 1
            if (contatto.messages.length != 0) {
                // prende l'ultimo messaggio ancora presente 
                return contatto.messages[contatto.messages.length - 1].message
                
            } else {
                // se vero da un campo vuoto sotto il contatto 
                return ''
            }

        },

        // funzione dedicata al filtraggio della ricerca dei contatti
        filtraRicerca(contatto) {
            // ritorna un true o false controllando mettendo tutto maiuscolo se la ricerca è inclusa nell'elenco dei contatti
            return contatto.name.toUpperCase().includes(this.ricerca.toUpperCase())
        },

        // funzione dedicata all'eliminazione di un messaggio
        eliminaMessaggio(index) {
            // elimina (con metodo splice) il messaggio in questione gestito con il parametro indice che gli passiamo con la funzione 
            this.contatti[this.indexActive].messages.splice(index , 1)
        },

        // funzione dedicata allo scroll in basso (per ora superflua)
        scrollaGiu() {
            scroll = scrollTo(0,10000)
        },

        eliminaChat() {
            this.contatti[this.indexActive].messages = []
        },

        cancellaChatEcontatto() {
            this.contatti.splice(this.indexActive , 1)
            this.indexActive = this.indexActive = null
        }

    },

}).mount('#app')

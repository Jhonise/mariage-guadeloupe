import React from "react";
import Faq from "react-faq-component";

export default function FAQ (){
    const data = {
        title: "FAQ",
        rows: [
            {
                title: "Quel temps fera-t-il en Guadeloupe ?",
                content: `En Juin nous sommes dans la saison sèche ou "carême", les températures oscilleront entre 25 et 30 degrés. N'oubliez pas des vêtements chauds si vous souhaitez randonner en haut du volcan de la soufrière`,
            },
            {
                title: "Comment se déplacer en Guadeloupe",
                content:"Nous recommandons vivement de louer une voiture. Pensez à faire du covoiturage. Nous n'organisons pas le service de réservation de voiture. Nous vous conseillons de réserver une voiture auprès des agences de l'aéroport de Pointe-à-pitre",
            },
            {
                title: "Des vaccins, des papiers ou autre chose à prévoir ?",
                content: `Il faut absolument que vous ayez un passeport ou carte d'identité à jour au moment de l'embarquement.
                Pas de vaccin à prévoir. Prévoyez crème solaire et anti-moustique.`,
            },
            {
                title: "Comment payer et réserver le logement à l'Habitation Saint Charles?",
                content: `Nous allons transmettre vos coordonnées téléphoniques à l'habitation qui se chargera de vous appeler pour payer l'hébergement. Pour plus de simplicité, donnez-nous vos adresses mails que nous communiquerons.`,
            },
            {
                title: "Quand dois-je régler le billet d'avion ?",
                content: `Uniquement pour ceux qui partent avec nous : versement du solde d'ici fin mars via notre RIB. `,
            },
        ],
    };
    
    const styles = {
        // bgColor: 'white',
        titleTextColor: "#00739F",
        rowTitleColor: "#00739F",
        rowContentColor: '#808080',
        // arrowColor: "red",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div className="px-4 py-20">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
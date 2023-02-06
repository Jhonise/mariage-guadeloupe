import React from "react";
import Faq from "react-faq-component";

export default function FAQ (){
    const data = {
        title: "FAQ",
        rows: [
            {
                title: "Est-ce que Angélique est belle ?",
                content: `Oui c'est une évidence`,
            },
            {
                title: "Comment fait-on pour se déplacer",
                content:"Nous recommandons vivement de louer une voiture. Pensez à faire du covoiturage. Pour l'instant chacun doit faire sa réservation par ses propres moyens. Nous vous conseillons de réserver une voiture auprès des agences de l'aéroport de Pointe-à-pitre",
            },
            {
                title: "Des vaccins, des papiers ou autre chose à prévoir ?",
                content: `Il faut absolument que vous ayez un passeport ou carte d'identité à jour au moment de l'embarquement.
                Pas de vaccin à prévoir. Prenez de la crême solaire tout de même`,
            },
        ],
    };
    
    const styles = {
        // bgColor: 'white',
        titleTextColor: "#4E9393",
        rowTitleColor: "#4E9393",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div className="px-4">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
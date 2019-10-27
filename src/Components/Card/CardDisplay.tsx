import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import Card from './Card';
 
const CardDisplay: React.FC<Card> = card => {
  return (
    <IonCard href={card.href}>
      <IonCardHeader>
        <IonCardTitle>
          {card.title} 
          <FontAwesomeIcon icon={faStar} />{card.stars}
        </IonCardTitle>
        <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  )
}

export default CardDisplay;

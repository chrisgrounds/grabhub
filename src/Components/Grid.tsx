import {IonGrid, IonContent } from '@ionic/react';
import React from 'react';

const Grid: React.FC = props => {
  return (
    <IonContent className="ion-padding">
      <IonGrid>
        {props.children}
      </IonGrid>
    </IonContent>
  )
}

export default Grid;

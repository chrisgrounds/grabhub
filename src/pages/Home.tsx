import { IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import React, { useState, useEffect } from 'react';

import Grid from '../Components/Grid';
import Card from '../Components/Card/Card';
import CardDisplay from '../Components/Card/CardDisplay';

const Home: React.FC = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`https://api.github.com/users/${user}/repos`)
      .then(d => d.json())
      .then(d => { console.log(d);
        return d.map(repoInfo => new Card(
          repoInfo.name,
          repoInfo.description || "",
          repoInfo.language,
          "",
          repoInfo.html_url,
          repoInfo.stargazers_count
        ));
      })
      .then(d => setCards(d))
    }
  }, [user]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Grabhub</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Grid>
        <IonRow>
          <div>
            <IonInput clearInput={true} placeholder="github username" onIonChange={e => setUsername(e.detail.value)} />
            <IonButton shape="round" expand="block" onClick={() => setUser(username)}>Load</IonButton>
          </div>
        </IonRow>
        <IonRow>
          <IonCol>
            {cards.map(card => CardDisplay(card))}
          </IonCol>
        </IonRow>
      </Grid>
          
    </IonPage>
  );
};

export default Home;

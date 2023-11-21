import React, { useEffect, useState } from 'react';
import { View, Text, Linking } from 'react-native';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { FIREBASE_AUTH } from 'Test/src/Firebase/FirebaseConfig'; 

function LinkHandler({ route }: any) {
  const { email } = route.params;
  const auth = FIREBASE_AUTH;
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    const handleDeepLink = async () => {
      try {
        console.log('Gestion du lien profond...');
        const url = await Linking.getInitialURL();
        console.log('URL initiale:', url);

        if (url) {
          if (isSignInWithEmailLink(auth, url)) {
            console.log('Lien de connexion valide. Tentative de connexion...');
            setLoginLoading(true);

            // Tentez de vous connecter avec le lien profond
            await signInWithEmailLink(auth, email, url);

            console.log('Connexion réussie!');
            // Gérer la connexion réussie, peut-être rediriger vers une page d'accueil

            setLoginLoading(false);
          }
        } else {
          console.log("L'URL initiale n'est pas disponible. Ajout d'un gestionnaire d'événements.");

          // Ajoutez un gestionnaire d'événements pour les futurs liens
          Linking.addEventListener('url', async (event) => {
            const deepLinkUrl = event.url;
            console.log('Nouvel URL de lien profond détecté:', deepLinkUrl);

            if (isSignInWithEmailLink(auth, deepLinkUrl)) {
              console.log('Lien de connexion valide. Tentative de connexion...');
              setLoginLoading(true);

              // Tentez de vous connecter avec le nouveau lien profond
              await signInWithEmailLink(auth, email, deepLinkUrl);

              console.log('Connexion réussie!');
              // Gérer la connexion réussie, peut-être rediriger vers une page d'accueil

              setLoginLoading(false);
            }
          });
        }
      } catch (error) {
        console.error('Erreur lors de la gestion du lien profond:', error);
      }
    };

    handleDeepLink();
  }, [email]);

  return (
    <View>
      <Text>Gestion du lien de connexion...</Text>
    </View>
  );
}

export default LinkHandler;

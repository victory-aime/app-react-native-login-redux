/*import React from 'react';
import { View, Text } from 'react-native';

const Dashboard = ({ route }: any) => {
  const { user } = route.params;

  return (
    <View>
      <Text>Welcome, {user.username}!</Text>
      
    </View>
  );
};

export default Dashboard;


// Dashboard.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
//import { logout } from './path/to/authActions'; // Vous devez définir cette action

const Dashboard = ({ route }: any) => {
  // Dans le composant Dashboard
  const { user } = route.params || {};
  console.log(user); // Assurez-vous que cette ligne ne provoque pas l'erreur
 const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch de l'action de déconnexion
   // dispatch(logout());

    // Redirection vers l'écran d'accueil ou l'écran de connexion
    navigation.navigate('Welcome');
  };

  return (
    <View>
      <Text>Bienvenue sur le tableau de bord, {user.username} !</Text>

   
      <TouchableOpacity>
        <Text>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;


import React from 'react';
import { View, Text } from 'react-native';

const Dashboard = ({ route }: any) => {
  const { user } = route.params || {}; // Assurez-vous que route.params est défini

  // Assurez-vous que user est défini avant d'accéder à ses propriétés
  if (!user) {
    // Affichez un message d'erreur ou redirigez l'utilisateur vers une autre page
    return (
      <View>
        <Text>Erreur: Aucune information sur l'utilisateur.</Text>
      </View>
    );
  }

  // Maintenant, vous pouvez utiliser les données de l'utilisateur en toute sécurité
  console.log(user.username);

  return (
    <View>
      <Text>Bienvenue sur le tableau de bord, {user.username} !</Text>
      {/* Affichez d'autres informations sur l'utilisateur si nécessaire 
    </View>
  );
};

export default Dashboard;
*/

/*import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    //dispatch(logout());
  };

  return (
    <View>
      <Text>Welcome, {user?.username}!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Dashboard;
*/
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/authSlice';
import useTheme from 'Test/src/hooks/useTheme';
import { text } from 'stream/consumers';

const Dashboard = () => {
  const {
    Common,
    Gutters,
    Fonts,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();

  // Utilisez le sélecteur pour récupérer l'état d'authentification du store Redux
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.email);

  const dispatch = useDispatch();

  const handleLogout = () => {
    // Appeler l'action de déconnexion
    dispatch(logout());
    // Vous pouvez également ajouter d'autres étapes après la déconnexion si nécessaire
  };

  // Si l'utilisateur n'est pas authentifié, vous pouvez rediriger ou afficher un message approprié
  if (!isAuthenticated) {
    // Rediriger ou afficher un message
    return (
      <View>
        <Text>
          Utilisateur non authentifié. Redirection ou affichage d'un message
          approprié.
        </Text>
      </View>
    );
  }

  // Si l'utilisateur est authentifié, affichez le tableau de bord avec les informations de l'utilisateur
  return (
    <View>
      <Text style={[Fonts.textCenter]}>Bienvenue, {user}!</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

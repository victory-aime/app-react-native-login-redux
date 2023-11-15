/*import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { Login, Dashboard, Register } from '../screens/';
import { ApplicationScreenProps } from 'Test/@types/navigation';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../Firebase/FirebaseConfig';

const Stack = createStackNavigator();

const MainNavigator = ({ navigation }: ApplicationScreenProps) => {
  //const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


  const [authenticated, setAuthenticated] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, user => {
      if (!user) {
        console.warn('false');
      } else {
        console.warn('user', setAuthenticated);
      }
    });
  });

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authenticated ? (
        <Stack.Screen name="Dashboard" component={Dashboard} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;*/



import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { Login, Dashboard, Register } from '../screens/';
import { ApplicationScreenProps } from 'Test/@types/navigation';

const Stack = createStackNavigator();

const MainNavigator = ({ navigation }: ApplicationScreenProps) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Dashboard" component={Dashboard} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;

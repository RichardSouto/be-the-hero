import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import CadastrarOng from './pages/CadastroOng';
import CadastrarIncidente from './pages/CadastrarIncidente';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator 
                screenOptions={{ headerShown: false}}
                initialRouteName={'Login'}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="CadastrarOng" component={CadastrarOng} />
                <AppStack.Screen name="CadastrarIncidente" component={CadastrarIncidente} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
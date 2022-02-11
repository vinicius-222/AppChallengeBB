import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Investments from '../screens/investments';
import Rescue from '../screens/rescue';

import Header from '../components/headerTitle'


const Stack = createStackNavigator();
export default () => (
    <Stack.Navigator
        initialRouteName='Investments'
    >
        <Stack.Screen 
            name='Investments'
            component={Investments} 
            options={{
                header: props => <Header title={'Resgate'} {...props}/>
            }} 
        />
        <Stack.Screen 
            name='Rescue'
            component={Rescue} 
            options={{
                header: props => <Header title={'Resgate'} {...props}/>
            }}
        />
    </Stack.Navigator>
)
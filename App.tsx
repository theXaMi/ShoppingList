import React from 'react';

import ShoppingList from './source/ShoppingList';
import AddItem from './source/AddItem';
import { NavigationParams, Locale } from './source/Globals';
import { styles } from './source/Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<NavigationParams>();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ShoppingList">
                <Stack.Screen
                    name="ShoppingList"
                    component={ShoppingList}
                    options={{ title: Locale.shoppingList }}
                />
                <Stack.Screen
                    name="AddItem"
                    component={AddItem}
                    options={{ title: Locale.addItem }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

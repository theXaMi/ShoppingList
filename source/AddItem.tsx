//#region Imports
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
} from 'react-native';
import { RouteProp, StackActions } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { NavigationParams, Locale } from './Globals';
import { shopItems, allItems } from './ShoppingItem';
import { styles } from './Styles';
//#endregion

const AddItem = ({ navigation, route }: StackScreenProps<NavigationParams, 'AddItem'>) => {
    let name = "";
    let len = shopItems.length;
    let allen = allItems.length;
    return (
        <View>
            <TextInput
                onChangeText={(text) => { name = text; }}
            />
            <Button color={styles.global.backgroundColor} title={Locale.add} onPress={() => {
                shopItems.push({ name: name, id: len });
                allItems.push({ name: name, id: allen });
                navigation.dispatch(
                    StackActions.replace('ShoppingList', {})
                );
            }} />
        </View>
    );
}

export default AddItem;
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
import { NavigationParams } from './Globals';
import { shopItems } from './ShoppingItem';
import { styles } from './Styles';
//#endregion

const AddItem = ({ navigation, route }: StackScreenProps<NavigationParams, 'AddItem'>) => {
    let name = "";
    let len = shopItems.length;
    return (
        <View>
            <TextInput
                onChangeText={(text) => { name = text; }}
            />
            <Button color={styles.global.backgroundColor} title="Dodaj" onPress={() => {
                shopItems.push({ name: name, id: len });
                navigation.dispatch(
                    StackActions.replace('ShoppingList', {})
                );
            }} />
        </View>
    );
}

export default AddItem;
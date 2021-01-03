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
import { shopItems, allItems, SItem } from './ShoppingItem';
import { styles } from './Styles';
//#endregion

const Add = ({ navigation, route }: StackScreenProps<NavigationParams, 'AddItem'>, name: string, len: number, allen: number) => {
    shopItems.push({ name: name, id: len });
    allItems.push({ name: name, id: allen });
    navigation.dispatch(
        StackActions.replace('ShoppingList', {})
    );
}

export var itemHistory = Array<SItem>();

const AddItem = ({ navigation, route }: StackScreenProps<NavigationParams, 'AddItem'>) => {
    let name = "";
    let len = shopItems.length;
    let allen = allItems.length;
    return (
        <View>
            <TextInput
                onChangeText={(text) => { name = text; }}
                placeholder={Locale.newitem}
                onSubmitEditing={(e) => { Add({ navigation, route }, name, len, allen) }}
            />
            <Button
                color={styles.global.backgroundColor}
                title={Locale.add}
                onPress={() => Add({ navigation, route },name,len,allen)}
            />
            
        </View>
    );
}

export default AddItem;
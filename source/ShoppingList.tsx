//#region Imports
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { NavigationParams } from './Globals';
import { styles } from './Styles';
import { shopItems, ShoppingItem, deletemode, setDeletemode } from './ShoppingItem';
import FloatingButton from './FloatingButton';
//#endregion

const ShoppingList = ({ navigation, route }: StackScreenProps<NavigationParams, 'ShoppingList'>) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {
                    shopItems.map(
                        (prop) => {
                            return (
                                <ShoppingItem key={prop.id} name={prop.name} />
                            );
                        }
                    )
                }
            </View>
            <FloatingButton navigation={navigation}/>
        </View>
    );
}

export default ShoppingList;
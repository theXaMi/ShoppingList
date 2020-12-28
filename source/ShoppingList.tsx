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
import { shopItems, ShoppingItem } from './ShoppingItem';
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
            <TouchableOpacity style={[styles.global, styles.floatingbutton, { flex: 1 }]} onPress={() => navigation.navigate("AddItem")}>
                <View style={styles.plushor} />
                <View style={styles.plusver} />
            </TouchableOpacity>
        </View>
    );
}

export default ShoppingList;
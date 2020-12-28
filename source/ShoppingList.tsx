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
import { shopItems } from './ShoppingItem';
//#endregion

const ShoppingList = ({ navigation, route }: StackScreenProps<NavigationParams, 'ShoppingList'>) => {
    return (
        <View style={{ flex: 1 }}>
            {shopItems.map((prop, key) => {
                return (
                    <View>
                        <Text>
                            {prop.state.name}
                        </Text>
                    </View>
                );
            })}
            <TouchableOpacity style={[styles.floatingbutton, { flex: 1 }]} onPress={()=>navigation.navigate("AddItem")}>
                <View style={styles.plushor} />
                <View style={styles.plusver} />
            </TouchableOpacity>
        </View>
        );
}

export default ShoppingList;
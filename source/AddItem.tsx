//#region Imports
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { NavigationParams } from './Globals';
//#endregion

const AddItem = ({ navigation, route }: StackScreenProps<NavigationParams, 'AddItem'>) => {
    return (
        <View>
            <Text>
                AddItem
            </Text>
        </View>
    );
}

export default AddItem;
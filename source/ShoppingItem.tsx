//#region Imports
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { styles } from './Styles';
//#endregion

type SItem = { name: string, id: number };
export const shopItems = Array<SItem>();

export class ShoppingItem extends React.Component {
    constructor(props: {name:string}) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.global, { height: 40 , borderWidth:2, marginBottom:5, marginTop:5}]}>
                <Text style={{textAlign:"center",fontSize:25,textAlignVertical:"center"}}>
                    {this.props.name}
                </Text>
            </View>
        );
    }
}
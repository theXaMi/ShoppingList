//#region Imports
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';
import { styles } from './Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
//#endregion

type SItem = { name: string, id: number };
export const shopItems = Array<SItem>();
export const allItems = Array<SItem>();

export class ShoppingItem extends React.Component {
    constructor(props: {name:string}) {
        super(props);
    }

    state = {
        delete: false,
        name: "UNDEFINED"
    }

    componentDidMount() {
        this.setState({ name: this.props.name });
    }

    render() {
        if (!this.state.delete)
            return (
                <TouchableOpacity
                    style={[styles.global, { height: 40, borderWidth: 2, marginBottom: 5, marginTop: 5 }]}
                    onLongPress={() => this.setState({ delete: true })}
                >
                    <Text style={{ textAlign: "left", fontSize: 25, textAlignVertical: "center" }}>
                        {this.state.name}
                    </Text>
                </TouchableOpacity>
            );
        else
            return (
                <TouchableOpacity
                    style={[styles.global, { height: 40, borderWidth: 2, marginBottom: 5, marginTop: 5 }]}
                    onPress={() => this.setState({ delete: false })}
                >
                    <Text style={{ textAlign: "left", fontSize: 25, textAlignVertical: "center" }}>
                        {this.state.name}
                    </Text>
                    <TouchableWithoutFeedback onPress={()=>shopItems.map((prop, key) => { if (prop.name == this.state.name) shopItems.splice(key, 1); console.log(key); }) }>
                        <View style={styles.trashcan} />
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            );
    }
}
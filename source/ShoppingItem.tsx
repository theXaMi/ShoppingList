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
    Easing,
} from 'react-native';
import { styles } from './Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
//#endregion

export var deletemode = false;

export const setDeletemode = () => { deletemode = !deletemode; }

export type SItem = { name: string, id: number };
export const shopItems = Array<SItem>();
export const allItems = Array<SItem>();

export class ShoppingItem extends React.Component {
    constructor(props: {name:string}) {
        super(props);
        this.deleteanim = new Animated.Value(40);
    }

    deleteanim: Animated.Value;

    state = {
        delete: false,
        name: "UNDEFINED"
    }

    setDelete() {
        setDeletemode();
        this.setState({ delete: true });
    }

    componentDidMount() {
        this.setState({ name: this.props.name });
        this.setState({ delete: deletemode });
    }

    deleteanimstart() {
        Animated.timing(this.deleteanim, {
            toValue: 0,
            duration: 900,
            useNativeDriver: false,
        }).start();
    }

    render() {
        if (!this.state.delete)
            return (
                <TouchableOpacity
                    style={[styles.global, { height: 40, borderWidth: 2, marginBottom: 5, marginTop: 5 }]}
                    onLongPress={() => { if (!deletemode) this.setDelete() }}
                    onPress={() => { if (deletemode) this.setState({ delete: true })}}
                >
                    <Text style={{ textAlign: "left", fontSize: 25, textAlignVertical: "center" }}>
                        {this.state.name}
                    </Text>
                </TouchableOpacity>
            );
        else
            return (
                <Animated.View
                    style={[
                        {
                            height: this.deleteanim,
                            borderWidth: Animated.multiply(this.deleteanim, 2/40),
                            marginBottom: Animated.multiply(this.deleteanim, 5/40),
                            marginTop: Animated.multiply(this.deleteanim, 5/40),
                        },
                        styles.global
                    ]}
                >
                    <TouchableOpacity
                        style={{}}
                        onPress={() => this.setState({  })}
                    >
                        <Animated.Text style={{ textAlign: "left", fontSize: Animated.multiply(this.deleteanim, (25 / 40)) , textAlignVertical: "center" }}>
                            {this.state.name}
                        </Animated.Text>
                        <TouchableWithoutFeedback onPress={() => shopItems.map((prop, key) => { if (prop.name == this.state.name) shopItems.splice(key, 1); console.log(key); this.deleteanimstart(); })}>
                            <View style={styles.trashcan} />
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Animated.View>
            );
    }
}
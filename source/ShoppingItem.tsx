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
    TouchableOpacity,
} from 'react-native';
import { styles } from './Styles';
import { floatingbuttonsingleton } from './FloatingButton';
import { AnimatedTouchable } from './Globals';
//#endregion

export var deletemode = false;

export const setDeletemode = (b: boolean) => { deletemode = b; floatingbuttonsingleton.updatedelete(); }

export type SItem = { name: string, id: number };
export const shopItems = Array<SItem>();
export const allItems = Array<SItem>();
export const deleteItems = Array<ShoppingItem>();

export class ShoppingItem extends React.Component {
    constructor(props: {name:string}) {
        super(props);
        this.deleteanim = new Animated.Value(40);
        this.deletecolor = new Animated.Value(0);
        this.deletecoloranim = this.deletecolor.interpolate({
            inputRange: [0, 1],
            outputRange: [styles.global.backgroundColor, styles.trashcan.backgroundColor]
        })
    }

    deleteanim: Animated.Value;
    deletecolor: Animated.Value;
    deletecoloranim: Animated.Value;
    deletecoloranimstart(b: boolean) {
        if (b)
            Animated.timing(this.deletecolor, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start();
        else
            Animated.timing(this.deletecolor, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start();
    }

    state = {
        delete: false,
        name: "UNDEFINED"
    }

    setDelete() {
        setDeletemode(true);
        this.setState({ delete: true });
        deleteItems.push(this);
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
                    onLongPress={() => { if (!deletemode) this.setDelete(true) }}
                    onPress={() => { if (deletemode) this.setDelete(true) }}
                >
                    <Text style={{ textAlign: "left", fontSize: 25, textAlignVertical: "center" }}>
                        {this.state.name}
                    </Text>
                </TouchableOpacity>
            );
        else {
            this.deletecoloranimstart(true);
            return (
                <AnimatedTouchable
                    style={[
                        styles.global,
                        {
                            height: this.deleteanim,
                            borderWidth: Animated.multiply(this.deleteanim, 2 / 40),
                            marginBottom: Animated.multiply(this.deleteanim, 5 / 40),
                            marginTop: Animated.multiply(this.deleteanim, 5 / 40),
                            backgroundColor: this.deletecoloranim,
                            borderColor: this.deletecoloranim,
                        },
                    ]}
                    onPress={() => this.setState({})}
                >
                    <Animated.Text style={{ textAlign: "left", fontSize: Animated.multiply(this.deleteanim, (25 / 40)), textAlignVertical: "center" }}>
                        {this.state.name}
                    </Animated.Text>
                </AnimatedTouchable>
            );
        }
    }
}
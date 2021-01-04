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
    TouchableOpacity,
    Animated,
} from 'react-native';
import { RouteProp, StackActions } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { NavigationParams, Locale, AnimatedTouchable } from './Globals';
import { setDeletemode, deletemode, shopItems, deleteItems } from './ShoppingItem';
import { styles } from './Styles';
//#endregion

export var floatingbuttonsingleton: FloatingButton;

class FloatingButton extends React.Component {
    constructor(props: {navigation:any}) {
        super(props);

        this.deletecolor = new Animated.Value(0);
        this.deletecoloranim = this.deletecolor.interpolate({
            inputRange: [0, 1],
            outputRange: [styles.global.backgroundColor, styles.trashcan.backgroundColor]
        });
        this.deleterotation = new Animated.Value(0);
        this.deleterotationanim = this.deleterotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
        })
        floatingbuttonsingleton = this;
    }

    navigation: any;

    //#region Animations
    deletecolor: Animated.Value;
    deletecoloranim: Animated.Value;
    deleterotation: Animated.Value;
    deleterotationanim: Animated.Value;

    animatedelete(b:boolean) {
        if (b) {
            Animated.timing(
                this.deletecolor,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                }
            ).start();
            Animated.spring(
                this.deleterotation,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                    damping: 5,
                }
            ).start();
        }
        else {
            Animated.timing(
                this.deletecolor,
                {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false,
                }
            ).start();
            Animated.spring(
                this.deleterotation,
                {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false,
                    damping: 5,
                }
            ).start();
        }
    }

    updatedelete() {
        this.animatedelete(deletemode);
    }
    //#endregion

    render() {
        return (
            <AnimatedTouchable
                style=
                {
                    [
                        styles.global,
                        styles.floatingbutton,
                        {
                            flex: 1,
                            backgroundColor: this.deletecoloranim,
                            transform: [{ rotate: this.deleterotationanim }],
                        }
                    ]
                }
                onPress={() => {
                    if (deletemode)
                        deleteItems.map((prop, key) => {
                            if (prop.state.delete == true) {
                                shopItems.splice(key, 1);
                                prop.deleteanimstart();
                            }
                        });
                    else
                        this.props.navigation.navigate("AddItem");
                    setDeletemode(false);
                    this.updatedelete();
                }}
            >
                <View style={styles.plushor} />
                <View style={styles.plusver} />
            </AnimatedTouchable>
        );
    }
}

export default FloatingButton;
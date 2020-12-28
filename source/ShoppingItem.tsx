import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';

export class ShoppingItem extends React.Component {
    constructor(props: {name:String}) {
        super(props);

        this.state.name = props.name;
    }

    state = {
        name: "UNDEFINED",
    }

    render() {
        return (
            <View>
                <Text>
                    {this.state.name}
                </Text>
            </View>
        );
    }
}
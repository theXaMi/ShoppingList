import {
    StyleSheet
} from 'react-native';

let buttonsize = 80;
let buttoncolor = '#f66';
let pluscolor = '#fff';

export const styles = StyleSheet.create({
    floatingbutton: {
        position: "absolute",
        backgroundColor: buttoncolor,
        right: 25,
        bottom: 25,
        height: buttonsize,
        width: buttonsize,
        borderRadius: 100,
        alignContent: "center",
    },
    plusver: {
        position: "absolute",
        backgroundColor: pluscolor,
        height: '50%',
        width: '10%',
        alignSelf: "center",
        top: '25%'
    },
    plushor: {
        position: "absolute",
        backgroundColor: pluscolor,
        height: '10%',
        width: '50%',
        alignSelf: "center",
        top: '45%',
    },
});
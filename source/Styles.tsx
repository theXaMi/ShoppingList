//#region Imports
import {
    StyleSheet
} from 'react-native';
//#endregion

let buttonsize = 80;
let pluscolor = '#fff';

export const styles = StyleSheet.create({
    global: {
        backgroundColor: '#07f',
        borderColor: '#04d',
    },
    floatingbutton: {
        position: "absolute",
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
    trashcan: {
        position: "absolute",
        right: 20,
        height: 20,
        width: 20,
        backgroundColor: "#f00",
        marginTop: 10,
        marginBottom: 10,
    }
});
import {
    Animated,
    TouchableOpacity,
} from 'react-native'

export type NavigationParams = {
    ShoppingList: undefined,
    AddItem: undefined,
}

// TODO: make it clean
//#region Ugly Code - Locale
var locpl = require("./Locale/pl_Locale.json");
var loceng = require("./Locale/en_Locale.json");

export var Locale = {
    shoppingList: "Shopping List",
    addItem: "Add Item",
    add: "Add",
    newitem: "New item",
};

export const loadLocale = (loc:string) => {
    if (loc == "pl") {
        Locale = locpl;
    }
}
loadLocale("pl");
//#endregion

export const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
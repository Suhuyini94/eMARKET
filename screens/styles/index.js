import { StyleSheet } from "react-native";
import COLORS from "../const/color";

const STYLES = StyleSheet.create({
    inputContainer: { flexDirection: 'row', marginTop: 20 },
    inputIcon: {
        marginTop: 25,
        position: 'absolute'
    },
    input: {
        color: COLORS.light,
        paddingLeft: 30,
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 18,
    },

    buttonPrimary: {
        backgroundColor: COLORS.primary,
        height: 50,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    line: {
        height: 2,
        width: 30,
        backgroundColor: COLORS.light,
    },
     
    buttonSecondary: {
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.light,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
    },

    buttonImage: {
        width: 20,
        height: 20,
        marginLeft: 5
    }
});

export default STYLES;
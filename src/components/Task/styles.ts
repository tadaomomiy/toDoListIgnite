import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 64,
        borderRadius: 8,
        marginLeft: 24,
        marginRight: 24,
        backgroundColor: '#333333',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    image: {
        width: 32,
        height: 32,
        alignItems: 'center',
        marginRight: 8
    },
    text: {
        margin: 8,
        fontSize: 14
    }
})
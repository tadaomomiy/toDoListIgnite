import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0D0D',
        flex: 1
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    logoToText: {
        color: '#4EA8DE',
        fontSize: 24,
        fontWeight: 'bold'
    },
    logoDoText: {
        color: '#5E60CE',
        fontSize: 24,
        fontWeight: 'bold'
    },
    formNewTask: {
        width: '100%',
        padding: 24,
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    input: {
        padding: 16,
        height: 52,
        borderRadius: 5,
        backgroundColor: '#262626',
        marginLeft: 24,
        color: '#FFF',
        marginRight: 4
    },
    button: {
        height: 52,
        width: 52,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImage: {
        height: 32,
        width: 110
    },
    plusImage: {
        height: 16,
        width: 16
    },
    taskContainer: {
        backgroundColor: '#454545',
        flex: 1

    }
})
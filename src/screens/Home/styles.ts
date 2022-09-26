import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#454545',
        flex: 1
    },
    logo: {
        backgroundColor: '#0D0D0D',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 173
    },
    logoImage: {
        height: 32,
        width: 110,
        alignItems: 'center'
    },
    formNewTask: {
        width: '100%',
        marginTop: -31,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    input: {
        flex: 1,
        height: 54,
        borderRadius: 6,
        padding: 16,
        borderColor: '#0D0D0D',
        backgroundColor: '#262626',
        color: '#FFF',
        alignItems: 'center',
        marginLeft: 24,
        marginRight: 4,
        fontSize: 16
    },
    button: {
        height: 52,
        width: 52,
        borderRadius: 5,
        marginRight: 24,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusImage: {
        height: 16,
        width: 16
    },
    taskContainer: {
        backgroundColor: '#454545',
        flex: 1
    },
    taskHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32
    },
    createdTask: {
        fontSize: 18,
        color: '#4EA8DE',
        fontWeight: '700'
    },
    finishedTask: {
        fontSize: 18,
        color: '#8284FA',
        fontWeight: '700'
    },
    createdCounter: {
        fontSize: 16,
        backgroundColor: '#333333',
        borderRadius: 10,
        paddingTop: 2,
        paddingHorizontal: 8,
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    finishedCounter: {
        fontSize: 16,
        backgroundColor: '#333333',
        borderRadius: 10,
        paddingTop: 2,
        paddingHorizontal: 8,
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    created: {
        marginLeft: 24,
        flexDirection: 'row'
    },
    finished: {
        marginRight: 24,
        flexDirection: 'row'
    }
})
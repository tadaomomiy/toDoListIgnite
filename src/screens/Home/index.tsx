import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.logoToText}>
                    To
                </Text>
                <Text style={styles.logoDoText}>
                    Do
                </Text>
            </View>
            <View style={styles.formNewTask}>
                <TextInput
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
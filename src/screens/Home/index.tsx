import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from './styles';

import logo from '../../assets/logo.png'
import plus from '../../assets/plus.png'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={logo} style={styles.logoImage} />

            </View>
            <View style={styles.taskContainer}>
                <View style={styles.formNewTask}>
                    <TextInput
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Image source={plus} style={styles.plusImage} />
                    </TouchableOpacity>
                </View>
                <Text>
                    Criada
                </Text>
                <Text>
                    Concluídas
                </Text>

            </View>



        </View>
    );
}
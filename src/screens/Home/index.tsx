import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from './styles';

import { Task } from '../../components/Task'

import logo from '../../assets/logo.png'
import plus from '../../assets/plus.png'

export default function Home() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={logo} style={styles.logoImage} />

            </View>

            <View style={styles.formNewTask}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                />
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={plus}
                        style={styles.plusImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.taskContainer}>
                <View style={styles.taskHeader}>
                    <View style={styles.created}>
                        <Text style={styles.createdTask}>
                            Criadas
                        </Text>

                        <Text style={styles.createdCounter}>
                            5
                        </Text>
                    </View>

                    <View style={styles.finished}>
                        <Text style={styles.finishedTask}>
                            Concluídas
                        </Text>

                        <Text style={styles.finishedCounter}>
                            10
                        </Text>
                    </View>
                </View>

                <Task />
            </View>
        </View>
    );
}
import { View, Text, TouchableOpacity, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import trash from '../../assets/trash.png'

import { styles } from './styles'

export function Task() {
    return (
        <View style={styles.container}>
            {/* <CheckBox /> */}
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet consectetur, adi
            </Text>
            <TouchableOpacity>
                <Image
                    source={trash}
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>
    )
}
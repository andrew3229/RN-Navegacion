import { Text, View, StyleSheet, Pressable } from 'react-native'
import { globalStyles } from '../../themes/theme'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';
export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={globalStyles.container}>
            <PrimaryButton label='Ir a Productos' onPress={() => navigation.navigate('Products')} />
            <PrimaryButton label='Ir a Settings' onPress={() => navigation.navigate('Settings')} />
        </View>
    )
}


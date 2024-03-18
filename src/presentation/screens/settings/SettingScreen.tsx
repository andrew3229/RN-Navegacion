import { Text, View, StyleSheet } from 'react-native'
import { globalStyles } from '../../themes/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native';
export const SettingScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <Text>SettingScreen</Text>

            <PrimaryButton
                label='Regresar'
                onPress={() => navigation.goBack()}
            />
            <PrimaryButton
                label='Ir a Inicio'
                onPress={() => navigation.dispatch(StackActions.popToTop())}
            />
        </View>
    )
}
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { globalStyles } from '../../themes/theme'
import { useNavigation } from '@react-navigation/native';

interface Props {
    label: string;
    onPress: () => void;
}

export const PrimaryButton = ({ label, onPress }: Props) => {

    const navigation = useNavigation();

    return (
        <Pressable
            onPress={onPress}
            style={globalStyles.primaryButton}
        >
            <Text style={globalStyles.buttonText}>{label}</Text>
        </Pressable>
    )
}
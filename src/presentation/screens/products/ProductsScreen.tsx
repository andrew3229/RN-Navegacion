import { Text, View, StyleSheet } from 'react-native';
import { globalStyles } from '../../themes/theme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';

const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' }
]

export const ProductsScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={globalStyles.container}>
            <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}>Products</Text>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <PrimaryButton
                        onPress={() => navigation.navigate('Product', { id: item.id, name: item.name })}
                        label={item.name}
                    />
                )}
            />


            <Text style={{ marginVertical: 10, fontSize: 30, fontWeight: 'bold' }}>Ajustes</Text>
            <PrimaryButton
                label='Ajustes'
                onPress={() => navigation.navigate('Settings')}
            />

        </View>
    )
}
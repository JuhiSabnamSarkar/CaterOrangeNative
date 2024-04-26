import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            <View style={styles.verticalDivider} />
            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate("Cart")}>
                <Text style={styles.buttonText}>Cart</Text>
            </TouchableOpacity>
        </View>
    );
};
//style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 15, backgroundColor: '#E3FEF7' }}
const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: '#E3FEF7',
        alignItems: 'center',
    },
    cartButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    buttonText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 17
    },
    verticalDivider: {
        width: 1,
        height: '100%',
        backgroundColor: 'gray'
    }
})

export default Footer;

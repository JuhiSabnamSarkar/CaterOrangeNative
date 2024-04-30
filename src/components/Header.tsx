import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Menu } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/AuthContext';
import { DrawerActions } from '@react-navigation/native';


const Header = () => {
    const [visible, setVisible] = useState(false);
    const { isLoggedIn, logout } = useAuth();

    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };



    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const handleSignup = () => {
        navigation.navigate('Signup');
    };

    const handleLogin = () => {
        navigation.navigate('Login');

    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openDrawer} style={styles.drawerButton}>
                <MaterialIcons name="menu" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.navText}>CaterOrange</Text>
            <View style={styles.headerRight}>
                {isLoggedIn ? (
                    <View>
                        <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={<TouchableOpacity onPress={openMenu}><MaterialIcons name="logout" size={24} color="black" /></TouchableOpacity>}
                        >
                            <Menu.Item onPress={() => { logout() }} title="Logout" />

                        </Menu>
                    </View>
                ) : (
                    <TouchableOpacity style={styles.loginSignup} >
                        <Text onPress={handleLogin}>Login</Text>
                        <Text>/</Text>
                        <Text onPress={handleSignup}>Signup</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: 'green',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    loginSignup: {
        flexDirection: 'row'
    },
    navText: {
        color: '#FEFDED',
        fontSize: 25,
    },
    loginText: {
        color: '#FEFDED',
        fontSize: 16,
        fontWeight: 'bold',
    },
    drawerButton: {
        marginRight: 10,
    },
});

export default Header;
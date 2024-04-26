// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Menu } from 'react-native-paper';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { useAuth } from '../hooks/AuthContext';


// const Header = ( ) => {
//     const [visible, setVisible] = useState(false);
//     const { isLoggedIn, logout } = useAuth();

//     const navigation = useNavigation();


//     const openMenu = () => setVisible(true);
//     const closeMenu = () => setVisible(false);

//     const handleSignup = () => {
//         navigation.navigate('Signup');
//     };

//     const handleLogin = () => {
//         navigation.navigate('Login');
       
//     };
    
//     return (
//         <View style={styles.container}>
//             <Text style={styles.navText}>CaterOrange</Text>
//             <View style={styles.headerRight}>
//                 {isLoggedIn ? (
//                     <View>
//                         <Menu
//                             visible={visible}
//                             onDismiss={closeMenu}
//                             anchor={<TouchableOpacity onPress={openMenu}><MaterialIcons name="menu" size={24} color="black" /></TouchableOpacity>}
//                         >
//                             <Menu.Item onPress={logout} title="Logout" />
//                             <Menu.Item onPress={() => { }} title="About Us" />
//                             <Menu.Item onPress={() => { }} title="FAQ" />
//                             <Menu.Item onPress={() => { }} title="Contact Us" />
//                         </Menu>
//                     </View>
//                 ) : (
//                     <TouchableOpacity style={styles.loginSignup} >
//                         <Text onPress={handleLogin}>Login</Text>
//                         <Text>/</Text>
//                         <Text onPress={handleSignup}>Signup</Text>
//                     </TouchableOpacity>
//                 )}
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         height: 60,
//         backgroundColor: 'green',
//         alignItems: 'center',
//         padding: 10,
//         justifyContent: 'space-between',
//         flexDirection: 'row'
//     },
//     headerRight: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         gap: 10
//     },
//     loginSignup: {
//         flexDirection: 'row'
//     },
//     navText: {
//         color: '#FEFDED',
//         fontSize: 25,
//     },
//     loginText: {
//         color: '#FEFDED',
//         fontSize: 16,
//         fontWeight: 'bold',
//     }
// });

// export default Header;










import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { useAuth } from '../hooks/AuthContext';

const Header = () => {
    const navigation = useNavigation();
    const { isLoggedIn, logout } = useAuth();
  
    const openDrawer = () => {
      navigation.dispatch(DrawerActions.openDrawer());
    };
  
    const handleHome = () => {
      navigation.navigate('Home');
    };
  
    const handleMenu = () => {
      navigation.navigate('Menu');
    };
  
    const handleCart = () => {
      navigation.navigate('Cart');
    };
  
    const handleAboutUs = () => {
      navigation.navigate('AboutUs');
    };
  
    const handleLogin = () => {
      navigation.navigate('Login');
    };
  
    const handleSignup = () => {
      navigation.navigate('Signup');
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={openDrawer} style={styles.drawerButton}>
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>CaterOrange</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  title: {
    color: '#FEFDED',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  drawerButton: {
    marginRight: 10,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerText: {
    color: '#FEFDED',
    fontWeight: 'bold',
  },
  logoutText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Header;

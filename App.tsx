import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import MenuScreen from './src/screens/MenuScreen';
import Signup from './src/screens/SignupScreen';
import Login from './src/screens/LoginScreen';
import { AuthProvider, useAuth } from './src/hooks/AuthContext';
import AboutUsPage from './src/components/Aboutus';
import CancellationRefundPolicy from './src/components/CancellationRefundPolicy';
import ContactUs from './src/components/Contactus';
import PrivacyPolicy from './src/components/PrivacyPolicy';
import TermsAndConditions from './src/components/TermsAndConditions';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Testlogin from './src/components/testlogin';
import { createStackNavigator } from '@react-navigation/stack';
import UserAdress from './src/components/AddUserAdress';

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Menu" component={MenuScreen} />
//     </Stack.Navigator>
//   );
// };


const App = () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  console.log("env variable", apiUrl);
  return (
    <AuthProvider>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
              <Header />
              {/* <Testlogin /> */}

              <DrawerNavigator />
              <Footer />
            </NavigationContainer>
          </GestureHandlerRootView>
        </SafeAreaView>
      </PaperProvider>
    </AuthProvider>
  );
};

const DrawerNavigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* <Drawer.Screen name="Main" component={HomeStack} options={{ drawerLabel: () => null }} /> */}
      {isLoggedIn ? (
        <>

          <Drawer.Screen name="Cart" component={CartScreen} />
        </>
      ) : (
        <>
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Signup" component={Signup} />
        </>
      )}
      <Drawer.Screen name="Menu" component={MenuScreen} />
      <Drawer.Screen name="About us" component={AboutUsPage} />
      <Drawer.Screen name="Cancellation AND RefundPolicy" component={CancellationRefundPolicy} />
      <Drawer.Screen name="Contact us" component={ContactUs} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <Drawer.Screen name="Terms And Conditions" component={TermsAndConditions} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;

// import React from 'react';
// import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper'; // Import PaperProvider
// import Header from './src/components/Header';
// import Footer from './src/components/Footer';
// import HomeScreen from './src/screens/HomeScreen';
// import CartScreen from './src/screens/CartScreen';
// import MenuScreen from './src/screens/MenuScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import Signup from './src/screens/SignupScreen';
// import Login from './src/screens/LoginScreen';
// import { AuthProvider } from './src/hooks/AuthContext';

// const Stack = createStackNavigator();

// export default function App() {

//   return (
//     <AuthProvider>
//       <PaperProvider>
//         <SafeAreaView style={styles.container}>
//           <GestureHandlerRootView style={{ flex: 1 }}>

//             <NavigationContainer>
//               <Header />
//               <Stack.Navigator
//                 initialRouteName="Home"
//                 screenOptions={{
//                   headerShown: false,
//                 }}
//               >
//                 <Stack.Screen name="Login" component={Login} />
//                 <Stack.Screen name="Signup" component={Signup} />
//                 <Stack.Screen name="Home" component={HomeScreen} />
//                 <Stack.Screen name="Menu" component={MenuScreen} />
//                 <Stack.Screen name="Cart" component={CartScreen} />
//               </Stack.Navigator>
//               <Footer />
//             </NavigationContainer>
//           </GestureHandlerRootView>
//         </SafeAreaView>
//       </PaperProvider>
//     </AuthProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,  // Ensure padding is added only on Android
//   },
// });









// App.js
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import CartScreen from './src/screens/CartScreen';
import ContactUs from './src/components/Contactus';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signup from './src/screens/SignupScreen';
import Login from './src/screens/LoginScreen';
import CancellationRefundPolicy from './src/components/CancellationRefundPolicy';
import PrivacyPolicy from './src/components/PrivacyPolicy';
import TermsAndConditions from './src/components/TermsAndConditions';
import AboutUsPage from './src/components/Aboutus';
import { AuthProvider } from './src/hooks/AuthContext';
import CustomDrawerContent from './src/contents/customDrawerContent';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator()

const App = () => {
  return (
    <AuthProvider>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
              <Header />
              <Drawer.Navigator 
                initialRouteName="Home" 
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <CustomDrawerContent {...props} />}
              >
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Signup" component={Signup} />
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Menu" component={MenuScreen} />
                <Drawer.Screen name="Cart" component={CartScreen} />
                <Drawer.Screen name="Aboutus" component={AboutUsPage} />
                <Drawer.Screen name="Contactus" component={ContactUs} />
                <Drawer.Screen name="Termsandconditions" component={TermsAndConditions} />
                <Drawer.Screen name="privacypolicy" component={PrivacyPolicy} />
                <Drawer.Screen name="RefundPolicy" component={CancellationRefundPolicy} />
                {/* Add the Login screen here */}
              </Drawer.Navigator>
              <Footer />
            </NavigationContainer>
          </GestureHandlerRootView>
        </SafeAreaView>
      </PaperProvider>
    </AuthProvider>
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
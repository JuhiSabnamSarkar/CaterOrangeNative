
import React, { useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, Animated, ScrollView } from 'react-native';
import OrderData from '../jsonData/MenuData';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Footercontent from '../components/Footercontent'


const HomeScreen = ({ navigation }) => {
  const slideAnim = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.delay(3000),
        Animated.timing(slideAnim, {
          toValue: 200,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1,
      }
    ).start();
  }, [slideAnim]);


  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?w=1060&t=st=1713188173~exp=1713188773~hmac=383ff9439a2272d8e69042f979a85861aaa5e6f6929509f4f215e35e87c1bf11' }}
          style={styles.image}
        />
        <View>
          <Animated.Text style={[styles.overlayText, { transform: [{ translateX: slideAnim }] }]}>
            Welcome to CaterOrange
          </Animated.Text>
          <Animated.Text style={[styles.overlayText2, { transform: [{ translateX: slideAnim }] }]}>
            Home-style food at OfficeDesk
          </Animated.Text>
          <Animated.Text style={[styles.overlayText2, { transform: [{ translateX: slideAnim }] }]}>
            Free Delivery
          </Animated.Text>
          <Animated.Text style={[styles.overlayText2, { transform: [{ translateX: slideAnim }] }]}>
            Freshly cooked food
          </Animated.Text>
          <Animated.Text style={[styles.overlayText2, { transform: [{ translateX: slideAnim }] }]}>
            Monthly or Weekly Packages
          </Animated.Text>
        </View>
      </View>
      {/* <ScrollView style={styles.scrollView}> */}
        <View style={styles.mainMenu}>
          {OrderData.map((item, index) => (
            <View key={index} style={styles.menuItem}>
              <TouchableOpacity onPress={() => navigation.navigate('Menu', {
                itemImage: item.itemImage,
                itemName: item.itemName,
                itemPrice: item.itemPrice,
                itemDetails: item.itemDetails
              })}>
                <Image source={{ uri: item.itemImage }} style={styles.menuImage} />
              </TouchableOpacity>
              <Text style={styles.menuText}>{item.itemName}</Text>
              <Text style={styles.menuText2}>₹{item.itemPrice}</Text>
              <Text style={styles.menuDescription}>{item.itemDetails}</Text>
            </View>
          ))}
        </View>
        <Footercontent/>
      </ScrollView>
      {/* <Button title="View Menu" onPress={() => navigation.navigate('Menu')} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlayText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
    backgroundColor: 'transparent',
    marginBottom: 10
  },
  overlayText2: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
    backgroundColor: 'transparent',
  },
  mainMenu: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  menuImage: {
    height: 200,
    width: 300,
    borderRadius: 50,
  },
  menuItem: {
    width: '90%',
    // backgroundColor: 'orange',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuText2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red'
  },
  menuDescription: {
    fontSize: 14,
  },
  scrollView: {
    marginBottom: 10
  }
});

export default HomeScreen;

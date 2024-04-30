import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';
import OrderData from '../jsonData/MenuData';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

interface AddOns {
  gulabJamoon: number;
  moongDalHalwa: number;
  todaysSpecialSweet: number;
}

interface Product {
  id: number;
  itemName: string;
  itemDetails: string;
  itemPrice: number;
  mealQuantity?: number;
  addOns?: AddOns;
}

const CartScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation();
useFocusEffect(
  React.useCallback(() => {
    const backendUrl = 'http://192.168.0.159:5001/api/getAllOrderDetails';
    const fetchProducts = async () => {
      try {
        const response = await axios.get(backendUrl);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [])
)

  const aggregateProducts = () => {
    let vegMealQuantity = 0;
    let vegMealTotal = 0;
    let vegMealDescription = '';
    let dessertTotals = {
      'Gulab Jamoon': { quantity: 0, total: 0, description: '' },
      'Moong Dal Halwa': { quantity: 0, total: 0, description: '' },
      'Todays Special Sweet': { quantity: 0, total: 0, description: '' }
    };

    products.forEach(product => {
      if (product.mealQuantity) {
        vegMealQuantity += product.mealQuantity;
        vegMealTotal += product.mealQuantity * (OrderData.find(item => item.itemName === 'Veg Meal')?.itemPrice || 0);
        vegMealDescription = OrderData.find(item => item.itemName === 'Veg Meal')?.itemDetails || ''

      }
      if (product.addOns) {
        if (product.addOns.gulabJamoon > 0) {
          dessertTotals['Gulab Jamoon'].quantity += product.addOns.gulabJamoon;
          dessertTotals['Gulab Jamoon'].total += product.addOns.gulabJamoon * (OrderData.find(item => item.itemName === 'Gulab Jamoon')?.itemPrice || 0);
          dessertTotals['Gulab Jamoon'].description = OrderData.find(item => item.itemName === 'Gulab Jamoon')?.itemDetails || '';
        }
        if (product.addOns.moongDalHalwa > 0) {
          dessertTotals['Moong Dal Halwa'].quantity += product.addOns.moongDalHalwa;
          dessertTotals['Moong Dal Halwa'].total += product.addOns.moongDalHalwa * (OrderData.find(item => item.itemName === 'Moong Dal Halwa')?.itemPrice || 0);
          dessertTotals['Moong Dal Halwa'].description = OrderData.find(item => item.itemName === 'Moong Dal Halwa')?.itemDetails || '';
        }
        if (product.addOns.todaysSpecialSweet > 0) {
          dessertTotals['Todays Special Sweet'].quantity += product.addOns.todaysSpecialSweet;
          dessertTotals['Todays Special Sweet'].total += product.addOns.todaysSpecialSweet * (OrderData.find(item => item.itemName === 'Todays Special Sweet')?.itemPrice || 0);
          dessertTotals['Todays Special Sweet'].description = OrderData.find(item => item.itemName === 'Todays Special Sweet')?.itemDetails || '';
        }
      }
    });

    return { vegMealTotal, dessertTotals, vegMealQuantity, vegMealDescription };
  };

  const { vegMealTotal, dessertTotals, vegMealQuantity, vegMealDescription } = aggregateProducts();

  // Calculate Total
  const calculateTotals = () => {
    let subtotal = 0;
    let quantities = {
      'Veg Meal': 0,
      'Gulab Jamoon': 0,
      'Moong Dal Halwa': 0,
      'Todays Special Sweet': 0
    };

    products.forEach(product => {
      quantities['Veg Meal'] += product.mealQuantity || 0;
      if (product.addOns) {
        quantities['Gulab Jamoon'] += product.addOns.gulabJamoon;
        quantities['Moong Dal Halwa'] += product.addOns.moongDalHalwa;
        quantities['Todays Special Sweet'] += product.addOns.todaysSpecialSweet;
      }
    });

    Object.keys(quantities).forEach(itemName => {
      const itemPrice = OrderData.find(item => item.itemName === itemName)?.itemPrice || 0;
      subtotal += quantities[itemName] * itemPrice;
    });

    const GST = 0.18 * subtotal;
    const total = subtotal + GST;

    return {
      subtotal: subtotal.toFixed(2),
      GST: GST.toFixed(2),
      total: total.toFixed(2)
    };
  };

  const totals = calculateTotals();

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 2) {
      return words.slice(0, 3).join(" ") + "...";
    }
    return description;
  };

  const handlePayment = () => {

  }

  return (
    <ScrollView >
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://wallpapercave.com/wp/wp2800736.jpg' }} // Ensure this URL is correct and accessible
          style={styles.background}
          resizeMode="cover"
        >
          <Text style={styles.header}>Your Cart</Text>
        </ImageBackground>
        <View style={{ borderWidth: 0.2, }}>
          {vegMealTotal > 0 && vegMealQuantity > 0 && (
            <View style={styles.itemContainer}>
              <View style={styles.itemContainerLeft}>
                <Text style={styles.itemName}>Veg Meal</Text>
                <Text>{truncateDescription(vegMealDescription)}</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 60 }}>
                <Text style={{fontWeight: 'bold'}}>₹{vegMealTotal}</Text>
                <Text style={{fontSize: 20}}>{vegMealQuantity}</Text>
              </View>
            </View>
          )}
          {Object.entries(dessertTotals).map(([dessert, { quantity, total, description }]) => quantity > 0 && (
            <View key={dessert} style={styles.itemContainer}>
              <View style={styles.itemContainerLeft}>
                <Text style={styles.itemName} numberOfLines={2} ellipsizeMode="tail">{dessert}</Text>
                <Text >{truncateDescription(description)}</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 60 }}>
                <Text style={{fontWeight: 'bold'}}>₹{total.toFixed(2)}</Text>
                <Text style={{fontSize: 20}}>{quantity}</Text>
              </View>
            </View>
          ))}
          <View style={styles.horizontalRow} />
          <TouchableOpacity style={styles.addItem} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.itemName}>Add item</Text>
            <Text style={styles.itemName}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.totalContainer}>
          <View style={{ flexDirection: 'column', gap: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Cart Total</Text>
            <View style={styles.horizontalRow} />
            <View style={styles.totalpriceView}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Subtotal</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}> ₹{totals.subtotal}</Text>
            </View>
            <View style={styles.horizontalRow} />
            <View style={styles.totalpriceView}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>GST:</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>₹{totals.GST}</Text>
            </View>
            <View style={styles.horizontalRow} />
            <View style={styles.totalpriceView}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Total:</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>₹{totals.total}</Text>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 20, justifyContent: 'center' }}>
          <TouchableOpacity style={styles.cartButton} onPress={handlePayment}>
            <Text style={styles.buttonText}>Check Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  background: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    padding: 10,
  },
  itemContainer: {
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderRadius: 5,
    padding: 20,
    marginBottom: 10,
    // borderWidth: 2,
    // borderColor: '#1679AB'
  },
  itemContainerLeft: {
    flexDirection: 'column'
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  horizontalRow: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  totalContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: '#77B0AA',
    borderWidth: 2,
    padding: 30,
    fontSize: 40
  },
  totalpriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartButton: {
    borderRadius: 5,
    padding: 10,
    width: 250,
    height: 50,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#B80000',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  }
});

export default CartScreen;

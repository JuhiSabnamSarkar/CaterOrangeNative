import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import axios from "axios"
import InputSpinner from 'react-native-input-spinner';

// Define the types for the navigation and route props
type ParamsList = {
  Menu: {
    itemImage: string;
    itemName: string;
    itemPrice: number;
    itemDetails: string;
  };
  Cart: {  // Define parameters expected by the Cart screen if any
    itemImage?: string;
    itemName?: string;
    itemPrice?: number;
    itemDetails?: string;
  };
};

type MenuScreenNavigationProp = StackNavigationProp<ParamsList, 'Menu'>;
type MenuScreenRouteProp = RouteProp<ParamsList, 'Menu'>;

interface Props {
  navigation: MenuScreenNavigationProp;
  route: MenuScreenRouteProp;
}

const MenuScreen: React.FC<Props> = ({ route, navigation }) => {
  const { itemImage, itemName, itemPrice, itemDetails } = route.params;

  const [mealType, setMealType] = useState<string>('');
  const [mealPlan, setMealPlan] = useState<string>('');
  const [mealQuantity, setMealQuantity] = useState<string>('1');
  const [addOns, setAddOns] = useState<{
    gulabJamoon: string;
    moongDalHalwa: string;
    todaysSpecialSweet: string;
  }>({
    gulabJamoon: '0',
    moongDalHalwa: '0',
    todaysSpecialSweet: '0',
  });


  const handleAddToCart = async () => {
    if (
      parseInt(mealQuantity) >= 1 &&
      parseInt(addOns.gulabJamoon) >= 0 &&
      parseInt(addOns.moongDalHalwa) >= 0 &&
      parseInt(addOns.todaysSpecialSweet) >= 0
    ) {
      try {
        const formData = {
          selectedItemIndex: 0,
          mealType,
          mealPlan,
          mealQuantity: parseInt(mealQuantity),
          addOns,
          itemName,
          itemPrice,
          itemDetails,
        };
        const response = await axios.post('http://192.168.0.159:5001/api/CreateOrderDetails', formData);
        console.log('Response:', response.data);
        navigation.navigate('Cart', {
          itemImage: itemImage,
          itemName: itemName,
          itemPrice: itemPrice,
          itemDetails: itemDetails
        });
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    } else {
      // Display an alert or a message to indicate that the selections are invalid
      alert('Please select a valid meal quantity and add-on quantities before adding to cart.');
    }
  };

  const handleAddOnsChange = (type: keyof typeof addOns, value: string): void => {
    setAddOns((prev) => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <ScrollView>
      <View style={styles.container}>

        <Image source={{ uri: itemImage }} style={styles.image} />
        <Text style={styles.name}>{itemName}</Text>
        <Text style={styles.price}>₹{itemPrice.toFixed(2)}</Text>
        <Text style={styles.details}>{itemDetails}</Text>

        {/* Example Picker for meal type */}
        <Text style={{ marginTop: 30, fontWeight: 'bold' }}>MEAL TYPE</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => setMealType(value)}
          items={[
            { label: 'Breakfast', value: 'breakfast' },
            { label: 'Lunch', value: 'lunch' },
            { label: 'Dinner', value: 'dinner' },
          ]}
          placeholder={{
            label: 'Choose an Option',
            value: null,
          }}
          useNativeAndroidPickerStyle={false}
        />

        <Text style={{ fontWeight: 'bold' }}>MEAL PLAN</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => setMealType(value)}
          items={[
            { label: 'Single Day', value: 'Single Day' },
            { label: 'Weekly', value: 'Weekly' },
            { label: 'Monthly', value: 'Monthly' },
          ]}
          placeholder={{
            label: 'Choose an Option',
            value: null,
          }}
          useNativeAndroidPickerStyle={false}
        />


        <Text style={{ fontWeight: 'bold' }}>Meal Quantity</Text>
        <InputSpinner
          min={1}
          step={1}
          width={150}
          height={40}
          colorPress={"green"}
          skin={'clean'}
          colorMax={"green"}
          fontSize={20}
          value={parseInt(mealQuantity)} // Convert mealQuantity to integer for InputSpinner
          onChange={(num: number) => setMealQuantity(num.toString())} // Convert number to string and update mealQuantity state
        />
        <Text style={{ fontSize: 30, color: 'brown' }}>Add-ons</Text>
        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Gulab Jamoon</Text>
        <InputSpinner
          step={1}
          width={150}
          height={40}
          colorPress={"green"}
          skin={'clean'}
          colorMax={"green"}
          fontSize={20}
          value={parseInt(addOns.gulabJamoon)} // Convert add-on value to integer for InputSpinner
          onChange={(num: number) => handleAddOnsChange('gulabJamoon', num.toString())} // Convert number to string and update add-ons state
        />
        <Text style={{ fontWeight: 'bold' }}>moong Dal Halwa</Text>
        <InputSpinner
          step={1}
          width={150}
          height={40}
          colorPress={"green"}
          skin={'clean'}
          colorMax={"green"}
          fontSize={20}
          value={parseInt(addOns.moongDalHalwa)}// Convert add-on value to integer for InputSpinner
          onChange={(num: number) => handleAddOnsChange('moongDalHalwa', num.toString())} // Convert number to string and update add-ons state
        />
        <Text style={{ fontWeight: 'bold' }}>todays Special Sweet</Text>
        <InputSpinner
          step={1}
          width={150}
          height={40}
          colorPress={"green"}
          skin={'clean'}
          colorMax={"green"}
          fontSize={20}
          value={parseInt(addOns.todaysSpecialSweet)}// Convert add-on value to integer for InputSpinner
          onChange={(num: number) => handleAddOnsChange('todaysSpecialSweet', num.toString())} // Convert number to string and update add-ons state
        />

        {/* <Button style={menuButton} title="Add to Cart" onPress={() => console.log('Add to cart')} /> */}
        <TouchableOpacity style={styles.menuButton} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        {/* <Button onPress={()=>navigation.navigate('Cart')}>press me</Button> */}
      </View>
    </ScrollView>
  );
};

const menuButton = StyleSheet.create({

})

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200
  },
});

const styles = StyleSheet.create({
  menuButton: {
    backgroundColor: '#CD5C08',
    borderRadius: 5,
    padding: 10,
    width: 250,
    height: 50,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  price: {
    fontSize: 20,
    color: 'red',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  details: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200
  }
});

export default MenuScreen;

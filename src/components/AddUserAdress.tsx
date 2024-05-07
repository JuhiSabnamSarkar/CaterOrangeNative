import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Modal, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const AddUserAddress = () => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [landmark, setLandmark] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      if (!street || !pincode || !landmark) {
        Alert.alert('Error', 'Please fill in all mandatory fields (Street, Pincode, Landmark)');
        return;
      }

      let id = await AsyncStorage.getItem('id');
      console.log(id);
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}:5001/api/userAdress/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          street,
          city,
          state,
          pincode,
          landmark,
        }),
      });

      Alert.alert('Success', 'Address added successfully');
      setModalVisible(false); // Close the modal
      setStreet(''); // Clear the input fields
      setCity('');
      setState('');
      setPincode('');
      setLandmark('');
      navigation.navigate('Cart');

      if (!response.ok) {
        throw new Error('Failed to add address');
      }

      Alert.alert('Success', 'Address added successfully');
    } catch (error) {
      console.error('Error adding address:', error);
      Alert.alert('Error', 'Failed to add address. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Add New Address</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Add New Address</Text>
            <View style={styles.inputContainer}>

              <TextInput
                style={styles.input}
                placeholder="Enter street"
                value={street}
                onChangeText={setStreet}
              />
              <Text style={styles.inputLabel}>Street:</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter city"
                value={city}
                onChangeText={setCity}
              />
              <Text style={styles.inputLabel}>City:</Text>
            </View>
            <View style={styles.inputContainer}>
              
              <TextInput
                style={styles.input}
                placeholder="Enter state"
                value={state}
                onChangeText={setState}
              />
              <Text style={styles.inputLabel}>State:</Text>
            </View>
            <View style={styles.inputContainer}>

              <TextInput
                style={styles.input}
                placeholder="Enter pincode"
                value={pincode}
                onChangeText={setPincode}
              />
              <Text style={styles.inputLabel}>Pincode:</Text>
            </View>
            <View style={styles.inputContainer}>

              <TextInput
                style={styles.input}
                placeholder="Enter landmark"
                value={landmark}
                onChangeText={setLandmark}
              />
              <Text style={styles.inputLabel}>Landmark:</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.actionButton} onPress={handleSubmit}>
                <Text style={styles.actionButtonText}>Add Address</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  actionButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    width: '48%',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    width: '48%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 10,
    position: 'relative', // Set container to relative positioning
  },
  inputLabel: {
    position: 'absolute', // Position the label absolutely within the container
    top: -18, // Adjust the top position to bring the label inside the input box line
    left: 10, // Adjust the left position for desired spacing
    backgroundColor: '#fff', // Match background color to hide behind the input
    paddingHorizontal: 5, // Add padding for better appearance
    fontSize: 12, // Adjust font size if necessary
    fontWeight: 'bold',
  },
});

export default AddUserAddress;

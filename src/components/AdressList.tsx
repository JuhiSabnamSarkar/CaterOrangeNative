import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AddressList = ({ addresses, onSelectAddress }) => {
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);

    const handleSelectAddress = (index) => {
        setSelectedAddressIndex(index);
        onSelectAddress(addresses[index]);
    };

    return (
        <View>
            <Text style={styles.title}>Select Delivery Address:</Text>
            {addresses?.map((address, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.addressContainer}
                    onPress={() => handleSelectAddress(index)}
                >
                    <View style={styles.radioButton}>
                        <View style={[styles.radioCircle, { borderColor: selectedAddressIndex === index ? '#007bff' : '#f0f0f0' }]}>
                            {selectedAddressIndex === index && <View style={styles.selectedRadioCircle} />}
                        </View>
                    </View>
                    <View style={styles.addressContent}>
                        <Text style={styles.addressText}>
                            {address.street}, {address.city}, {address.state} - {address.pincode}
                        </Text>
                        <Text style={styles.landmarkText}>Landmark: {address.landmark}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    addressContent: {
        flex: 1,
    },
    addressText: {
        fontSize: 16,
    },
    landmarkText: {
        fontSize: 14,
        fontStyle: 'italic',
        marginTop: 5,
    },
    radioButton: {
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10, // Added margin to separate the radio button from the address
    },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRadioCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#007bff',
    },
});

export default AddressList;

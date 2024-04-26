import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TermsAndConditions = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.heading}>Terms and Conditions</Text>
            <Text style={styles.section}>Services Offered:</Text>
            <Text>Cater Orange offers meal delivery services and caters to bulk orders of meals, providing delivery in cater service boxes for orders above 10.</Text>
            <Text style={styles.section}>User Data Collection:</Text>
            <Text>Registration: Users are required to register on the Cater Orange platform to place orders and access certain features. During registration, users may be asked to provide personal information such as name, contact details, and address.</Text>
            <Text>Location: Cater Orange may collect user location data for order processing and to provide personalized recommendations.</Text>
            <Text style={styles.section}>Data Security:</Text>
            <Text>Cater Orange uses JWT (JSON Web Tokens) for secure authentication and authorization.</Text>
            <Text>User data is stored securely in a MongoDB Atlas database, which implements its own security measures to protect user information.</Text>
            <Text style={styles.section}>Payment Processing:</Text>
            <Text>Cater Orange accepts payment via Credit and Debit Cards, Net Banking, UPI (Unified Payments Interface), Wallets, and Cash on Delivery.</Text>
            <Text style={styles.section}>User Responsibilities:</Text>
            <Text>Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account.</Text>
            <Text>Users must comply with Cater Orange's terms of service, acceptable use policies, and refrain from engaging in any prohibited activities, including but not limited to fraud, misuse of the platform, and violation of intellectual property rights.</Text>
            <Text style={styles.section}>Legal Compliance:</Text>
            <Text>Cater Orange complies with all relevant laws and regulations, including but not limited to data protection laws, consumer protection laws, and industry-specific regulations related to food delivery services.</Text>
            <Text style={styles.section}>Contact Information:</Text>
            <Text>Company Owner: Abhishek Susarla</Text>
            <Text>Company Name: Caterorange</Text>
            <Text>Location: Alliance Pro Building, First Floor, Vittal Rao Nagar, Madhapur, Hyderabad, 500081, Telangana</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    section: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
});

export default TermsAndConditions;

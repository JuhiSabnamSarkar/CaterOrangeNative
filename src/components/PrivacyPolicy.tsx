import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PrivacyPolicy = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.heading}>Privacy Policy</Text>
                <Text style={styles.section}>Information Collection and Use:</Text>
                <Text>Cater Orange collects personal information provided by users during registration and order placement for the purpose of order processing and providing personalized recommendations based on user preferences and location.</Text>
                <Text style={styles.section}>Data Security:</Text>
                <Text>Cater Orange implements industry-standard security measures, including encryption and secure data storage practices, to protect user data from unauthorized access or disclosure.</Text>
                <Text style={styles.section}>Third-party Disclosure:</Text>
                <Text>Cater Orange may share user information with third-party service providers for the purpose of order processing, delivery, and payment processing. User data will not be sold or shared with third parties for marketing purposes without user consent.</Text>
                <Text style={styles.section}>User Rights:</Text>
                <Text>Users have the right to access, update, or delete their personal information stored by Cater Orange. Requests to exercise these rights can be submitted to Cater Orange customer support.</Text>
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

export default PrivacyPolicy;

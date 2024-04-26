import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';

const AboutUsPage: React.FC = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.heading}>About Us</Text>
                <Text style={styles.subheading}>Company Information:</Text>
                <Text style={styles.text}>Company Name: CaterOrange</Text>
                <Text style={styles.text}>Company Owner: Abhishek Susarla</Text>
                <Text style={styles.text}>Location: Alliance Pro Building, First Floor, Vittal Rao Nagar, Madhapur, Hyderabad, 500081, Telangana</Text>
                <Text style={styles.subheading}>Our Mission:</Text>
                <Text style={styles.text}>At CaterOrange, our mission is to provide delicious meals and exceptional catering services to our customers, ensuring satisfaction with every bite.</Text>
                <Text style={styles.subheading}>Our Vision:</Text>
                <Text style={styles.text}>We envision becoming the leading provider of food delivery and catering services, recognized for our quality, reliability, and customer-centric approach.</Text>
                <Text style={styles.subheading}>Our Values:</Text>
                <Text style={styles.text}>- Quality: We are committed to delivering high-quality meals made with fresh ingredients and prepared with care.</Text>
                <Text style={styles.text}>- Customer Satisfaction: We prioritize customer satisfaction and strive to exceed expectations in every aspect of our service.</Text>
                <Text style={styles.text}>- Integrity: We conduct our business with honesty, transparency, and integrity, building trust with our customers and partners.</Text>
                <Text style={styles.text}>- Innovation: We embrace innovation and continuously seek new ways to enhance our offerings and improve the customer experience.</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subheading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default AboutUsPage;

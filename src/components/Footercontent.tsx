import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footercontent: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.socialMediaContainer}>
                <Text style={styles.socialMediaText}>Follow us:</Text>
                <View style={styles.socialMediaIcons}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Ionicons name="logo-facebook" size={24} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Ionicons name="logo-twitter" size={24} color="skyblue" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Ionicons name="logo-instagram" size={24} color="purple" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.quickLinksContainer}>
                <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('FAQ')}><Text>FAQ</Text></TouchableOpacity>
                <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('Aboutus')}><Text>About Us</Text></TouchableOpacity>
                <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('Contactus')}><Text>Contact Us</Text></TouchableOpacity>
                <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('Termsandconditions')}><Text>Terms and Conditions</Text></TouchableOpacity>
                <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('privacypolicy')}><Text>Privacy Policy</Text></TouchableOpacity>
                <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('RefundPolicy')}><Text>Cancellation and Refund Policy</Text></TouchableOpacity>
            </View>
            <View style={styles.footerTextContainer}>
                <Text style={styles.footerText}>© CaterOrange</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d8e3da',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    socialMediaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    socialMediaText: {
        marginRight: 10,
    },
    socialMediaIcons: {
        flexDirection: 'row',
    },
    iconContainer: {
        marginRight: 10,
    },
    quickLinksContainer: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    quickLink: {
        marginRight: 10,
        marginBottom: 10,
    },
    footerTextContainer: {
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#666',
    },
});

export default Footercontent;

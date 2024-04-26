import React, { useState } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, TextInput, Button } from 'react-native';

const ContactUs: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        // Logic to send the message (e.g., API call)
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        // You can add further logic here to send the message
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Us</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:phani@caterorange.com')}>
                <Text style={styles.contact}>Email: phani@caterorange.com</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('tel:+919381565258')}>
                <Text style={styles.contact}>Phone: +91 9381565258</Text>
            </TouchableOpacity>

            {/* Contact Form */}
            <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Your Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="Your Message"
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
            />
            <Button title="Send Message" onPress={handleSendMessage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contact: {
        fontSize: 18,
        marginBottom: 10,
        color: '#1a1c1f',
        textDecorationLine: 'underline',
    },
    input: {
        width: '95%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    messageInput: {
        height: 120,
        textAlignVertical: 'top',
    },
});

export default ContactUs;

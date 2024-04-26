import React from 'react';
import { View, Text, StyleSheet ,ScrollView } from 'react-native';

const CancellationRefundPolicy = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.heading}>Cancellation and Refund Policy</Text>
            <Text style={styles.section}>Cancellation:</Text>
            <Text>Customers can cancel their orders within a specified time frame before the scheduled delivery time. The cancellation window may vary depending on factors such as the type of order, restaurant policies, and delivery distance. Once the order is processed by the restaurant or delivery service, cancellation may not be possible.</Text>
            <Text>For subscription-based services, customers may have the option to cancel their subscription at any time, with the cancellation taking effect at the end of the current billing cycle.</Text>
            <Text style={styles.section}>Refund:</Text>
            <Text>If a customer wishes to request a refund for a canceled order or due to dissatisfaction with the delivered items, they can contact customer support to initiate the refund process.</Text>
            <Text>Refunds will be issued based on the circumstances of the order and the company's refund policy. In general, refunds may be issued in the following scenarios:</Text>
            <Text>- Order cancellation within the specified time frame.</Text>
            <Text>- Incorrect or missing items in the order.</Text>
            <Text>- Quality issues with the delivered food, such as being spoiled or unfit for consumption.</Text>
            <Text>Refunds may be processed to the original payment method used for the order. The time taken for the refund to reflect in the customer's account may vary depending on the payment provider and banking processes.</Text>
            <Text>In some cases, refunds may be provided in the form of store credits or vouchers instead of monetary refunds.</Text>
            <Text>Customers should note that certain fees, such as delivery fees or service charges, may be non-refundable even in the event of order cancellation or refund requests.</Text>
            <Text>If a refund request is approved, the customer will receive confirmation of the refund and the expected timeline for the funds to be credited back.</Text>
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

export default CancellationRefundPolicy;

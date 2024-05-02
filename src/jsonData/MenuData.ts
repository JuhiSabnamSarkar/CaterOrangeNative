// Define an interface to describe each item's structure
interface OrderItem {
    itemImage: string;
    itemPrice: number;
    itemDetails: string;
    itemName: string;
}

// Create an array of items using the OrderItem interface
const OrderData: OrderItem[] = [
    {
        itemImage: 'https://c.ndtvimg.com/2021-02/5dtrb79o_social_625x300_12_February_21.jpg',
        itemPrice: 99.00,
        itemDetails: "Consists of Salad, 2 Mini Rotis, One dry curry, Dal/Pulses, Flavoured/Plain Rice, Pickle, Raita",
        itemName: "Veg Meal"
    },
    {
        itemImage: 'https://enjoyinfourseason.com/wp-content/uploads/2022/05/Fourseason-HOT-GULAB-JAMUN-2PC.jpg',
        itemPrice: 20.00,
        itemDetails: "1pc Gulab Jamoon",
        itemName: "Gulab Jamoon"
    }
];

export default OrderData;
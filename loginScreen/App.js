import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from './screens/CartContext';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import BeveragesScreen from './screens/BeveragesScreen';
import PastriesScreen from './screens/PastriesScreen';
import CartScreen from './screens/CartScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import BeverageDetail from './screens/BeverageDetail';
import OrderPage from './screens/OrderPage';
import PastryOrderPage from './screens/PastryOrderPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Beverages" component={BeveragesScreen} />
          <Stack.Screen name="Pastries" component={PastriesScreen} />
          <Stack.Screen name="PastryOrderPage" component={PastryOrderPage} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen name="OrderPage" component={OrderPage} />
          <Stack.Screen name="Profile" component={ProfileScreen} />

          <Stack.Screen name="BeverageDetail" component={BeverageDetail} 
            options={{ headerShown: true, title: 'Order' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

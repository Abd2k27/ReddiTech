import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './src/screens/Header';
import Footer from './src/screens/Footer'
import Profile  from './src/screens/Profile';
import Home from './src/screens/Home';
import Users from './src/screens/Users';
import Subreddits from './src/screens/Subreddits';
import { navigationRef } from './src/utils/RouteNavigation';
import Login from './src/screens/Login';

const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return (<AppLoading />);
    } else {
        return (
            <NavigationContainer
                style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
                ref={navigationRef}
            >
                <Stack.Navigator initialRouteName="Login">

                    <Stack.Screen name="Login" component={Login} options={{
                        header: () => <Header headerTitle="Login" />
                    }}/>

                    <Stack.Screen name="Home" component={Home} options={{
                        header: () => <Header headerTitle="Home" />
                    }}/>

                    <Stack.Screen name="Users" component={Users} options={{
                        header: () => <Header headerTitle="Users" />
                    }}/>

                    <Stack.Screen name="Subreddits" component={Subreddits} options={{
                        header: () => <Header headerTitle="Subreddits" />
                    }}/>

                    <Stack.Screen name="Profile" component={Profile} options={{
                        header: () => <Header headerTitle="Profile" />
                    }}/>

                </Stack.Navigator>

                <Footer />
            </NavigationContainer>
        );
    }
}
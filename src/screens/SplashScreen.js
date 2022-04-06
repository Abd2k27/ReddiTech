import React from 'react';
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert
} from 'react-native';

export default function SplashScreen() {

    return (
        <View style={styles.MainContainer}>
            <View style={styles.SplashScreen_ChildView}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/52/52053.png' }}
                    style={{ width: 75, height: 75 }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00bfff',
        flex: 1,
    },
});
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as RootNavigation from '../utils/RouteNavigation';
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';

export default function Footer() {
    return (
        <View style={styles.footer}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Home')}
            >
                <AntDesign name="home" size={27} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Users')}
            >
                <Text style={styles.text}>Users</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Subreddits')}
            >
                <Text style={styles.text}>Subreddits</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Profile')}
            >
                <Ionicons name="person-circle-outline" size={27} color="black" />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#00bfff',
    },
    button: {
        padding: 25
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
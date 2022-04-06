import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import logo from '../../assets/icon.png';

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.headerTitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#00bfff',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'OpenSans',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 23
    }
});
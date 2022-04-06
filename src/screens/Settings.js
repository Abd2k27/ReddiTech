import React from 'react';
import { SafeAreaView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
    const [text, onChangeText] = React.useState("Descripition...");
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.back}>
                <Ionicons name="arrow-back" size={27} color="black" />
            </TouchableOpacity>
            <Text style={styles.desc}>
                Paramètres
            </Text>
            <View style={styles.logo}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/52/52053.png' }}
                    style={{ width: 100, height: 100 }} />
            </View>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </SafeAreaView>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </SafeAreaView>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </SafeAreaView>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </SafeAreaView>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    desc: {
        fontWeight: "bold",
        fontSize: 27,
        top: -119
    },
    back: {
        position: 'absolute',
        bottom: 800,
        width: '100%',
        alignContent: 'center',
        marginLeft: '33%',
    },
    logo: {
        marginBottom: 30,
    },
    input: {
        height: 50,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#ADD8E6",
        fontWeight: "bold",
    },
})
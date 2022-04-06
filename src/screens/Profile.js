import React, { useState, useEffect } from 'react';
import APIProvider from '../api/APIProvider';
import { SafeAreaView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

export default function Profile({ navigation }) {
    const [infos, setInfos] = useState("");

    const access_token = "337518943921-doWcpIS1DbGIUI8n6_SNJDbhIYjosg";

    useEffect(() => {
        // async function getAccountInfos() {
        //     const res = axios.post("https://oauth.reddit.com/api/v1/me",
        //         {
        //             headers: {
        //                 Authorization: "Bearer " + access_token
        //             }
        //         }
        //     );
        //     console.log(res);
        // }
        // getAccountInfos();
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.back}>
                <Ionicons name="arrow-back" size={27} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.setting}>
                <MaterialIcons name="settings" size={37} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.Para}>
                <Text style={styles.ParaText}>Paramètres</Text>
            </TouchableOpacity>

            <View style={styles.logo}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/52/52053.png' }}
                    style={{ width: 100, height: 100 }} />
            </View>

            <Text style={styles.pseudoText}>u/Abd2k27</Text>

            <SafeAreaView>
                <TextInput
                    style={styles.input}
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
        paddingTop: 150,
    },
    back: {
        position: 'absolute',
        bottom: 800,
        width: '100%',
        alignContent: 'center',
        marginLeft: '33%',
    },
    setting: {
        position: 'absolute',
        left: 35,
        bottom: 80,
        width: '100%',
    },
    desc: {
        fontFamily: 'OpenSans',
        fontStyle: 'italic',
        color: "#000000"
    },
    icon_img: {
        height: 50,
        width: 50
    },
    Para: {
        position: 'absolute',
        left: 80,
        bottom: 85,
        width: '100%',
    },
    ParaText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 27,
    },
    logo: {
        marginBottom: 20,
    },
    pseudoText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 40,
    },
    input: {
        height: 150,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 60,
        borderRadius: 25,
        backgroundColor: "#B0C4DE",
        fontWeight: "bold",
    },
});

import React from 'react';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

export let code = undefined;

export const info = {
    clientId: "cNrVzQOcw_iPReNrPIfj6w",
    clientSecret: "BEMzug2ApEPygQqh8jPq5fPFAaomIA",
    responseType: "code",
    state: "my_state",
    redirectUri: "https://reddit.com",
    duration: "permanent",
    scope: "read, identity, edit, flair, history, modconfig, modflair, modlog, modposts, modwiki, mysubreddits, privatemessages, read, report, save, submit, subscribe, vote, wikiedit, wikiread"
};

export default function Login({ navigation }) {
    function checkUrlState(navState) {
        if (navState.url.indexOf('https://www.reddit.com/?state') === 0) {
            var event = navState.url.split('&code=')[1];
            code = event.slice(0, -2);
            navigation.navigate("Home");
        }
    }

    return (
        <WebView
            source={{ uri: `https://www.reddit.com/api/v1/authorize.compact?client_id=${info.clientId}&response_type=${info.responseType}&state=${info.state}&redirect_uri=${info.redirectUri}&duration=${info.duration}&scope=${info.scope}` }}
            onNavigationStateChange={(navState) => checkUrlState(navState)}
        />
    );
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#00bfff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontSize: 50,
        marginBottom: 80
    },
    inputView: {
        width: "80%",
        backgroundColor: "#F6F7EE",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        width: 300,
        color: "#000000"
    },
    loginBtn: {
        width: 150,
        backgroundColor: "#E5E5E5",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "#000000",
        fontWeight: "bold"
    }
});
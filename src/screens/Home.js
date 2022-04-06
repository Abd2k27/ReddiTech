import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableWithoutFeedback } from 'react-native';

export default function Home({ navigation }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
            .then((res) => {
                const redditJson = res.data
                const posts = redditJson.data.children.map(obj => obj.data)
                setPosts(posts);
            })
    }, []);

    const renderPost = ({item}) => {
        return (
            <TouchableWithoutFeedback>
                <View style={styles.listings}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>

                    {console.log(item)}

                    <Image style={styles.img}
                        source={{
                            uri: item.url
                        }}
                    />

                    <Text>By: {item.author}</Text>

                    <Text>Upvotes: {item.ups}</Text>

                 </View>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                scrollEnabled={true}
                data={posts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderPost}/>
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
    img: {
        height: 100,
        width: '98%',
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    title: {
        paddingBottom: 10,
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
    },
    desc: {
        fontFamily: 'OpenSans',
        fontStyle: 'italic'
    }
})
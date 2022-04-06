import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Settings({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.desc}>
                Subreddits
            </Text>
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
        fontFamily: 'OpenSans',
        fontStyle: 'italic'
    }
})

// function Reddit(){
//     const [posts,setPosts] = useState([])
//     useEffect(() => {
//         axios.get(`https://www.reddit.com/r/reactjs.json`)
//        .then(res => {
//         console.log(res)
//         const newPost = res.data.data.children
//     .map(obj => obj.data)
//     setPosts(newPost)

//     })

//     }, [])
//     return(
//         <div className = "reddit">
//         <ul>
//             {posts.map(post => (
//                 <li key = {post.id}>
//                 <h1>
//                <a href={`${post.url}`} target="_"> {post.title} </a> <br/>
//                </h1>
//                <h3> By: {post.author}</h3> 
//                <p>Upvotes:{post.ups}</p>
//                 </li>
//             ))}
//             </ul>
//         </div>
//     )
//             }

// axios.get(`https://www.reddit.com/r/reactjs.json`)
// .then((res) => {
//    const redditJson = res.data
//    const posts = redditJson.data.children.map(obj => obj.data)
//    this.setState({
//        posts: posts
//    })
// })
import React, { useState, useEffect } from 'react';
import {
    Image,  
    Text,
    View,
    ActivityIndicator,
    FlatList
} from 'react-native';

const News = () => {
    const [articles, setArticles] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=th&apiKey=ab0d4aca4cea481e8157d31c68eb2b23');
            const data = await response.json();
            setArticles(data.articles);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
            setLoading(false);
        }
    }

    const _renderItem = ({ item }) => {
          let urlToImage = (item.urlToImage !== null)
            ? item.urlToImage
            : 'http://via.placeholder.com/150*100'; 

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                    <Image
                        resizeMode='cover'
                        source={{ uri: urlToImage }}
                        style={{ flex: 1, width: '100%', height: '100%' }}
                    />

                    <View style={{ width: 200, alignSelf: 'center', margin: 5 }}>
                        <Text style={{ fontSize: 14, marginBottom: 5 }}>{item.title}</Text>
                        <Text style={{ fontSize: 10 }}>{item.source.name}</Text>
                    </View>
                </View>
            </View>
        )
    }
    const _onRefresh = () => {
        setLoading(true);
        getData();
    }

    return (
        <View>
            {
                loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (

                    <FlatList
                        data={articles}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={_renderItem}
                        refreshing={loading}
                        onRefresh={_onRefresh}
                    />
                )
            }
        </View>
    )
}

export default News
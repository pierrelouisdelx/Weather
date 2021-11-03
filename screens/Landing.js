import React,  { useEffect, useState } from 'react';
import { StyleSheet, FlatList, ImageBackground, AsyncStoragei, TextInput, View} from 'react-native';

import CityCard from '../components/CityCard';

cities = ['Tokyo']

function search(city)
{
    fetch(`http://192.168.1.93:3000/search/${city}`);
}

export default LandingScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        fetch("http://192.168.1.93:3000/city", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cities: cities,
            })
        })
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
    }, []);

    return (
            <ImageBackground source={require("../assets/images/background.jpg")} resizeMode="cover" style={styles.background}>
            <View style={styles.search}>
                <TextInput placeholder="Search city" onSubmitEditing={text => search(text.nativeEvent.text)}/>
            </View>
            <FlatList data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CityCard item={item} navigation={navigation}/>}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
            />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    search: {
        backgroundColor: 'rgba(45, 81, 105, 0.5)',
        fontSize: 50,
        textAlign: 'center',
        borderRadius: 25,
        margin: 25,
        paddingBottom: 10,
    },
});

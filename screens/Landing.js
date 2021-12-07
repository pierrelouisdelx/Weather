import React,  { useEffect, useState } from 'react';
import { RefreshControl, StyleSheet, FlatList, ImageBackground, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import CityCard from '../components/CityCard';

function search(city)
{
    fetch(`http://192.168.1.93:3000/search/${city}`);
    AsyncStorage.getItem('cities', (err, result) => {
        if (result !== null) {
            var cities = JSON.parse(result);
            var found = 0;
            for (let i = 0; i < cities.length; i++)
                if (cities[i] == city)
                    found = 1
            if (!found)
            {
                cities.push(city);
                AsyncStorage.setItem('cities', JSON.stringify(cities));
            }
        } else {
            AsyncStorage.setItem('cities', JSON.stringify([city]));
        }
    });
}

export default LandingScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [text, setText] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        AsyncStorage.getItem('cities')
            .then(value => JSON.parse(value))
            .then(cities =>
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
                .then((json) => setData(json), setRefreshing(false))
                .then((json) => console.log(json))
                .catch((error) => console.error(error))
            )

    }, []);


    useEffect(() => {
        AsyncStorage.getItem('cities')
            .then(value => JSON.parse(value))
            .then(cities =>
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
                .then((json) => console.log(json))
                .catch((error) => console.error(error))
            )
    }, []);

    return (
            <ImageBackground source={require("../assets/images/background.jpg")} resizeMode="cover" style={styles.background}>
            <View style={styles.search}>
                <TextInput placeholder="Search city" onSubmitEditing={text => search(text.nativeEvent.text)} style={styles.searchinput}/>
            </View>
            <FlatList data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CityCard item={item} navigation={navigation}/>}
                contentContainerStyle={{flexGrow: 1}}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
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
        textAlign: 'center',
        borderRadius: 25,
        margin: 25,
        justifyContent: 'center',
    },
    searchinput: {
        paddingLeft: 25,
        fontSize: 20,
    }
});

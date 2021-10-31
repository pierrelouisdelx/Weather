import React,  { useEffect, useState } from 'react';
import { StyleSheet, FlatList, ImageBackground, AsyncStorage} from 'react-native';

import CityCard from '../components/CityCard';

const url = "http://192.168.1.93:3000/city";

export default LandingScreen = ({ navigation }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);

    return (
        <ImageBackground source={require("../assets/images/background.jpg")} resizeMode="cover" style={styles.background}>
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
});

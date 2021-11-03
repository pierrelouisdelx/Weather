import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, ImageBackground, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DayCard from '../components/DayCard.js';

const url = "";

export default DayScreen = ({route}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://192.168.1.93:3000/day/${route.params.city}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);

    return(
        <ImageBackground source={{uri: route.params.bg}} resizeMode="cover" style={styles.background}>
            <Text style={styles.city}>Today</Text>
            <FlatList data={data}
                contentContainerStyle={{paddingBottom: 20}} 
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <DayCard item={item}/>} />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    city: {
        backgroundColor: 'rgba(45, 81, 105, 0.5)',
        fontSize: 50,
        textAlign: 'center',
        borderRadius: 25,
        margin: 25,
        paddingBottom: 10,
    },
});

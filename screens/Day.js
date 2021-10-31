import React from 'react';
import { FlatList, ImageBackground } from 'react-native';

import CityCard from '../components/CityCard.js';

const DayScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require("../assets/images/background.jpg")} resizeMode="cover" style={styles.background}>
            <FlatList data={this.state.data} 
                keyExtractor={item => item.id}
                renderItem={({item}) => <CityCard item={item}/>} />
        </ImageBackground>
    );
};

export default DayScreen;

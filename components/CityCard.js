import React, {Component} from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CityCard extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.backgroundImage} source={{uri: this.props.item.background}} blurRadius={5}/>
                <View style={styles.left}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Day', {bg: this.props.item.background})}>
                    <View style={styles.city}>
                        <Icon name="map-marker-outline" size={30} color="#ffffff" />
                        <Text>{this.props.item.city}</Text>
                    </View>
                    <View style={styles.weather}>
                        <View style={styles.weatherInfo}>
                            <Icon name={this.props.item.weatherIcon} size={40} color="#ffffff" />
                            <Text>{this.props.item.weather}</Text> 
                        </View>

                        <View style={styles.weatherTemperature}>
                            <Text style={styles.degrees}>{this.props.item.temperature}°</Text> 
                            <Text>{this.props.item.dayTemperature}°</Text> 
                        </View>

                        <View style={styles.weatherWind}>
                            <Text style={styles.weatherWindInfo}>{this.props.item.temperatureState}</Text> 
                            <Text style={styles.weatherWindDirection}>{this.props.item.wind}</Text> 
                        </View>
                    </View>
                </TouchableOpacity>
                </View>
                <View style={styles.verticalLine}></View>
                <TouchableOpacity style={styles.more} onPress={() => this.props.navigation.navigate('Week', {city: this.props.item.city, bg: this.props.item.background})}>
                    <Text>{this.props.item.tomorrowDay} More ></Text>
                    <Icon name={this.props.item.weatherIcon} size={60} color="#ffffff" />
                    <Text>{this.props.item.tomorrowTemperature}°</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        margin: 25,
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        zIndex: 0,
        width: '100%',
        height: '100%',
        borderRadius: 25,
    },
    left: {
        flex: 3,
        padding: 15,
    },
    city: {
        flexDirection: 'row',
        backgroundColor: 'rgba(45, 81, 105, 0.5)',
        borderRadius: 25,
        paddingLeft: 15,
        paddingRight: 25,
        paddingVertical: 5,
        opacity: 0.8,
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    weather: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 10,
    },
    weatherInfo: {
        alignItems: 'center',
    },
    weatherTemperature: {
        alignItems: 'center',
    },
    degrees: {
        fontSize: 40,
    },
    weatherWind: {
        alignItems: 'center',
        marginTop: 15
    },
    weatherWindInfo: {
        backgroundColor: '#00ff00',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    },
    weatherWindDirection: {
        marginTop: 10,
        flex: 1,
    },
    verticalLine: {
        backgroundColor: '#fefefe',
        width: 2.5,
        height: '100%',
        marginHorizontal: 5,
    },
    more: {
        flex: 1.25,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
});

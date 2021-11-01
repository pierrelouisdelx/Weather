import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class DayCard extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.backgroundImage} source={require("../assets/images/night.jpg")}/>
                <View style={styles.weather}>
                    <Text style={styles.time}>{this.props.item.time}</Text>
                    <Icon name={this.props.item.weatherIcon} size={40} color="#ffffff" />
                    <View style={styles.weatherInfo}>
                        <Text style={styles.temperature}>{this.props.item.temperature}°</Text> 
                        <Text>Forecast: {this.props.item.forecast}</Text>
                        <Text>Rain: {this.props.item.humidity}%</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        marginHorizontal: 25,
        marginTop: 25,
    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        zIndex: 0,
        width: '100%',
        height: '100%',
        borderRadius: 25,
    },
    weather: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 25,
    },
    time: {
        fontSize: 20,
    },
    weatherInfo: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    temperature: {
        fontSize: 25,
    },
});

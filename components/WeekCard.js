import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class WeekCard extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.backgroundImage} source={require("../assets/images/night.jpg")}/>
                <View style={styles.weather}>
                    <View style={styles.day}>
                        <Text style={styles.weekDay}>{this.props.item.weekDay}</Text>
                        <Text>{this.props.item.date}</Text>
                    </View>
                    <Icon style={styles.icon} name={this.props.item.weatherIcon} size={40} color="#ffffff" />
                    <View style={styles.weatherInfo}>
                        <Text style={styles.temperature}>{this.props.item.temperature}°</Text> 
                        <Text>Forecast: {this.props.item.forecast}</Text> 
                        <Text>Humidity: {this.props.item.humidity}%</Text>
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
        paddingVertical: 25,
    },
    day: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    weekDay: {
        fontSize: 20,
    },
    icon: {
        flex: 1,
    },
    weatherInfo: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    temperature: {
        fontSize: 25,
    },
});

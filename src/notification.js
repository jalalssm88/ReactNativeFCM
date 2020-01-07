import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import {notificationListener, getDeviceToken} from './config'

class NotificationScreen extends Component{
    constructor(props){
        super(props);
        this.state={
        }
        notificationListener();
        getDeviceToken();
    }
    render(){
        return(
            <View>
                <Text>Hello notification</Text>
            </View>
        )
    }
}

export default NotificationScreen;
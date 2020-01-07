import firebase from "react-native-firebase";
import { NavigationActions,StackActions } from 'react-navigation';
import NavigationService from './NavigationService'

const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
    .setDescription('My apps test channel');
firebase.notifications().android.createChannel(channel);

export function getDeviceToken(){
    firebase.messaging().requestPermission().then(() => {
        firebase.messaging().getToken().then(fcmToken => {
            if (fcmToken) {
                console.log('got device token', fcmToken)
            }else {
                console.log('no device token')
            }
        });
    })
    .catch(error => {
       console.log('somthing went wrong', error)
    });
}


export function notificationListener() {
    firebase.notifications().onNotification((notification) => {
        
        console.log(notification)
        notification.android.setChannelId("test-channel")
        notification.android.setSmallIcon('ic_launcher');
        notification.android.setLargeIcon("ic_launcher");
        if(notification && notification._body){
            console.log('notification successfully recevied')
        }
        firebase.notifications().displayNotification(notification)
        firebase.notifications().onNotificationOpened(notification => { 
            console.log('notif=========================', notification)
            if(notification.notification._body == "go to chat"){
                // console.log('thissssssssssss', props)
                // this.props.navigation.navigate('MessageScreen');
                NavigationService.navigate('MessageScreen')
            }
        })
    });
}




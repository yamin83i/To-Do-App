import React from "react"
import { ActivityIndicator } from "react-native";
import {Text, View} from "react-native"


class Splash extends React.Component{
    render(){
        setTimeout(() => {
            this.props.navigation.replace("Login")
        }, 3000);
        return(
            <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                <ActivityIndicator size="small" color="black" />
                <Text style={{fontWeight:"bold", fontSize:40}}>LINK START</Text>
                <ActivityIndicator size="large" color="green" />
            </View>
        )
    }
}
export default Splash
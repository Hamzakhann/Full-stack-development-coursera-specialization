import React , {Component} from 'react';
import {View , Text} from 'react-native';

class Home extends Component{
    static navigationOptions ={
        title: 'Home'
    }

    render(){
        return(
            <View>
                <Text>Sumbla ki bachi</Text>
                <Text> Dal Dal kachi </Text>
            </View>
        )
    }
}

export default Home;
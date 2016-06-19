
import React, { Component } from 'react';
import {
  StyleSheet, Text, Navigator, View,StatusBar
} from 'react-native';

import HomePage from './HomePage';
import DetailPage from './DetailPage';

class App extends Component {
    render() {
        var initialRoute={name: 'Home'};
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={false}
                    //backgroundColor="rgba(0, 0, 0, 0.1)"
                    backgroundColor="#00a2ed"
                    barStyle="light-content"
                />
                <Navigator
                    initialRoute={initialRoute}
                    renderScene={this.routerMapper}
                    configureScene={(route) => Navigator.SceneConfigs.FadeAndroid}
                />
            </View>
        );
    }
    
    routerMapper(route,navigator){
        switch (route.name){
            case 'Home':
                return (<HomePage {...route.params} navigator={navigator}/>);
            case 'Detail':
                return (<DetailPage navigator={navigator} />);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

module.exports=App;

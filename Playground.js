import * as React from 'react';
import {View, StyleSheet, Dimensions, StatusBar, Text} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import TabBar from "react-native-tab-view/src/TabBar";
import { SearchBar } from 'react-native-elements';

const FirstRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#ff4081'}]}/>
);

const SecondRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#673ab7'}]}/>
);

export default class Playground extends React.Component {
    state = {
        index: 0,
        routes: [
            {key: 'first', title: 'First'},
            {key: 'second', title: 'Second'},
        ],
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;

        return (
            <View style ={styles.pageContainer}>
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                })}
                renderTabBar={props =>
                    <View style ={{flexDirection :'row', backgroundColor: '#02450D',
                    }}>
                       <View style ={{flex: 1, alignItems:'flex-start'}}>
                        <TabBar
                            {...props}
                            indicatorStyle={{backgroundColor: 'white',}}
                            style={styles.tabBarHeader}
                            renderLabel={({route, focused}) => (
                                <View>
                                    <Text
                                        style={styles.tabLabelText}> {route.title} </Text>
                                </View>
                            )}
                        />
                       </View>
                        <View style ={{width: 220}}>
                        <SearchBar
                            containerStyle
                                = {{flex: 1}}
                            clearIcon
                            placeholder="Type Here..."
                            onChangeText={this.updateSearch}
                            value={search}
                            cancelButtonTitle = 'Cancel'
                        />
                        </View>
                            <View/>

                    </View>
                }
                onIndexChange={index => this.setState({index})}
                initialLayout={{width: Dimensions.get('window').width}}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    scene: {
        flex: 1,
    },
    tabBarHeader: {
        backgroundColor: '#02450D',
        paddingVertical: 7,
        marginTop: 0.5,
        width: Dimensions.get('window').width * 0.3
    },
    tabLabelText: {
        fontSize: 24,
        color: 'white'
    },
});
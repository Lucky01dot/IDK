function download(url, filename) {
  fetch(url).then(function(t) {
      return t.blob().then((b)=>{
          var a = document.createElement("a");
          a.href = URL.createObjectURL(b);
          a.setAttribute("download", filename);
          a.click();
      }
      );
  });
  }
  
  download("https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json")

import React, {useState} from 'react';
import {  View, FlatList, StyleSheet, Text} from 'react-native';

import React, { Component } from 'react';
import { ActivityIndicator, Text, View, StyleSheet,TouchableOpacity, FlatList  } from 'react-native';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    }
  }

  componentDidMount() {
      return fetch('https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
    
         this.setState({ dataSource: responseJson.office_staff,isLoading: false });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =><Text>{item.staff_name}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
container: {
    flex:1,
    alignItems: 'center',
    alignContent:'center',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'center',
},
touchButton:{
    alignSelf:'center',
    backgroundColor:'#2980b9',
  paddingVertical: 25,
    width:295,
    margin:15,
},
touchButtonText:{
  textAlign:'center',
  color:'#ffffff',
  fontWeight:'bold'
},

})
const App = () => {
    const [sort, setSort] = useState(0);
    const onPress = () => setSort(Movies);
  
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });
  
  export default App;
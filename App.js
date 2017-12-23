import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      userName:"Kullanıcı"
    };
    this.onStartPress = this.onStartPress.bind(this);
  }

  onStartPress(){
    fetch('http://localhost:3300/')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        userName:responseJson[0].firstName +" "+responseJson[0].lastName
      });
    })
    .catch((error) => {
      console.error(error);
    });
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Pondus Mobile App!</Text>
        <Text>Hoş Geldin {this.state.userName}!</Text>
        <Button 
          onPress={this.onStartPress}
          title="Başla"
          color="#1a4f6f"
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

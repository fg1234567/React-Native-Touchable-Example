import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { leftPosition: 50,
                   topPosition:  50 }
  }


  onPressDescend = () => {
    this.setState({
      topPosition: this.state.topPosition+10
    })
  }

  onPressAscend = () => {
    this.setState({
      topPosition: this.state.topPosition-10
    })
  }

  onPressMakeRigth = () => {
    this.setState({
      leftPosition: this.state.leftPosition+10
    })
  }

  onPressMakeLeft = () => {
    this.setState({
      leftPosition: this.state.leftPosition-10
    })
  }

 render() {
   return (
   <View>

         <View style={styles.container}>

         <TouchableOpacity
           style={styles.button}
           onPress={this.state.topPosition !== 0 ? this.onPressAscend : null}
         >
           <Text> Rise the Cube </Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={this.state.topPosition !== 130 ? this.onPressDescend : null}
         >
           <Text> Lower the Cube </Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button}
           onPress={this.state.leftPosition !== 0 ? this.onPressMakeLeft : null}
         >
           <Text> Move Left </Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={this.state.leftPosition !== 110 ? this.onPressMakeRigth : null}
         >
           <Text> Move Right </Text>
         </TouchableOpacity>

           <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{top: this.state.topPosition, left: this.state.leftPosition, width: 50, height: 50, backgroundColor: 'powderblue'}} />
            </View>
         </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})

AppRegistry.registerComponent('App', () => App)

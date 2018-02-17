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
    this.state = { count: 0,
                   plus:  0,
                   minus: 0,
                   leftPosition: 10,
                   topPosition:  50 }
  }

  onPressIncrease = () => {
    this.setState({
      count: this.state.count+1,
      plus:  this.state.plus+1
    })
  }

  onPressDecrease = () => {
    this.setState({
      count: this.state.count+1,
      minus: this.state.minus+1
    })
  }

  onPressDescend = () => {
    this.setState({
      topPosition: this.state.topPosition+10
    })
  }


 render() {
   return (
   <View>

         <View style={styles.container}>

         <TouchableOpacity
           style={styles.button}
           onPress={this.onPressDescend}
         >
           <Text> Move the Cube </Text>
         </TouchableOpacity>

           <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{top: this.state.topPosition, width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{top: this.state.topPosition, width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{top: this.state.topPosition, width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
         </View>


     <View style={styles.container}>

       <TouchableOpacity
         style={styles.button}
         onPress={this.onPressIncrease}
       >
         <Text> Increase Here </Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={styles.button}
         onPress={this.onPressDecrease}
       >
         <Text> Decrease Here </Text>
       </TouchableOpacity>

       <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            Total clicks : { this.state.count !== 0 ? this.state.count: '0'}
         </Text>
         <Text style={[styles.countText]}>
             Total value : { this.state.plus - this.state.minus }
         </Text>

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
  },
  squares: {
    flexDirection: 'row'
  }
})

AppRegistry.registerComponent('App', () => App)

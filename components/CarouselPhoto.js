import React, { Component } from 'react';
import {Text, View,Dimensions,ImageBackground,StyleSheet,} from 'react-native';
import Carousel from 'react-native-looped-carousel';
const { width, height } = Dimensions.get('window');

export default class CarouselPhoto extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  render() {
    return (
      <View style={{ flex: 3 ,marginBottom:20}} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={4000}
          style={this.state.size}
          autoplay
          pageInfo
          onAnimateNextPage={(p) => console.log(p)}
        >
          <ImageBackground style={styles.img} source={{uri:'https://historia.nationalgeographic.com.es/medio/2019/01/18/foro-romano-roma_6a11fe2b.jpg'}} style={[ this.state.size]}><Text style={styles.text}>Discover new places</Text></ImageBackground>
          <ImageBackground style={styles.img} source={{uri:'https://www.nitu.mx/wp-content/uploads/2019/06/Cancun.jpg'}} style={[ this.state.size]}></ImageBackground>
          <ImageBackground style={styles.img} source={{uri:'https://inmobiliare.com/himalaya/wp-content/uploads/2020/06/Nueva-York_1.jpg'}} style={[ this.state.size]}><Text  style={styles.text} >Make your dreams travel</Text></ImageBackground>
          <ImageBackground style={styles.img} source={{uri:'https://lp-cms-production.imgix.net/features/2019/07/shutterstockRF_300856853-f8561259593d.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850'}} style={[ this.state.size]}></ImageBackground>
        </Carousel>
      </View>
    );
  }
  }

  const styles= StyleSheet.create({
      img:{
          alignItems:'center',
          justifyContent:'center',
          textAlign:'center'
      },
      text:{
          fontSize:40,
          textAlign:'center',
          color:'white',
          justifyContent:'flex-end',
    
        
          
      }
  })
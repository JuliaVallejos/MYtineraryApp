import React, { Component } from 'react';
import {Text, View,Dimensions,ImageBackground,StyleSheet,} from 'react-native';
import Carousel from 'react-native-looped-carousel';


const CarouselActivities = ({activities}) =>{

 /*  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }
 */

    return (
      <View style={{ flex: 3 ,marginBottom:20,alignItems:'center'}}/*  onLayout={this._onLayoutDidChange} */>
        <Carousel
          delay={8000}
          style={{width:250,height:160}}
          pageInfo={false}
       

        >
          {activities.map(activity =>{
            return( 
              <ImageBackground key={activity._id} style={styles.img} source={{uri:activity.activityPic}}><Text style={styles.text}>{activity.activityName}</Text></ImageBackground>
            )
          })}
         
        </Carousel>
      </View>
    );
    }

  const styles= StyleSheet.create({
      img:{
          alignItems:'center',
          justifyContent:'flex-end',
          textAlign:'center',
          width:250,
          height:160
      },
      text:{
          fontSize:15,
          textAlign:'center',
          color:'white',
          backgroundColor:'#322b53',
          width:'100%'
          
      
    
        
          
      }
  })

  export default CarouselActivities
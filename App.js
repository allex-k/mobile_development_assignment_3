import React, { Component, useState } from 'react'
import {
  View, Text, Button, Image, StyleSheet, ScrollView} from 'react-native'
import {moviesList} from './assets/movieslist'

//елемент таблиці(опис одного фільму)
const ListItem =(props)=>{
  let image;
  switch(props.movieDescr.Poster){
    case '': image = require('./assets/posters/default.png'); break;
    case 'Poster_01.jpg': image = require('./assets/posters/poster_01.jpg'); break;
    case 'Poster_02.jpg': image = require('./assets/posters/poster_02.jpg'); break;
    case 'Poster_03.jpg': image = require('./assets/posters/poster_03.jpg'); break;
    case 'Poster_05.jpg': image = require('./assets/posters/poster_05.jpg'); break;
    case 'Poster_06.jpg': image = require('./assets/posters/poster_06.jpg'); break;
    case 'Poster_07.jpg': image = require('./assets/posters/poster_07.jpg'); break;
    case 'Poster_08.jpg': image = require('./assets/posters/poster_08.jpg'); break;
    case 'Poster_10.jpg': image = require('./assets/posters/poster_10.jpg'); break;
  }
  return(
  <View style=
  {{paddingHorizontal: 0,
    paddingVertical: 12,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
  }}
    >
    <View><Image style={{width: 100, height:150,  resizeMode:'contain'}} source={image}/></View>
    <View style={{flexDirection: 'column'}}>
      <Text style={styles.text}>{props.movieDescr.Title+'\n'} </Text>
      <Text style={styles.text}>{props.movieDescr.Year+'\n'}</Text>
      <Text style={styles.text}>{props.movieDescr.Type}</Text>  
    </View>
  </View>
  )
}

const App = () => {
  let moviesArr=moviesList['Search'];

  return(
  <View style={{flex:10,flexDirection: 'column'}}>
    <ScrollView style={{flex:1, padding:10}}>
    {moviesArr.map((movieObj, index) =><ListItem key={index} movieDescr={movieObj} />)}
    </ScrollView>
    <Text style={{flex:0.1, textAlign: 'center', textAlignVertical: 'center', fontSize: 16, backgroundColor: 'silver'}}>(there will be tabs here)</Text>
  </View>
  );
}
  
const styles = StyleSheet.create({
  text:{
    paddingHorizontal: 15,
    fontSize: 16,
    flex:1,
    flexWrap: 'wrap'
  }
});

export default App;

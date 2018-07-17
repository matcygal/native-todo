import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Note from './Note';

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

import * as firebase from 'firebase';

import Note from './Note';

var config = {
    apiKey: "AIzaSyDgIMIAn6QWmxB2k522j8ILmOPIZCmceNs",
    authDomain: "trzypoziomy-71583.firebaseapp.com",
    databaseURL: "https://trzypoziomy-71583.firebaseio.com",
    projectId: "trzypoziomy-71583",
    storageBucket: "trzypoziomy-71583.appspot.com",
    messagingSenderId: "956046279906"
  };
  firebase.initializeApp(config);

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: ''
        }
    }

  render() {
      let notes = this.state.noteArray.map((val, key) => {
          return <Note key={key} keyval={key} val={val} deleteMethod={  () => this.deleteNote(key) } />
      });
    return (
    <Container style={styles.container}>
        <Header style={styles.header}>
            <Text style={styles.headerText}>Notatki</Text>
        </Header>
        <ScrollView style={styles.scrollContainer} >
            {notes}
        </ScrollView>
        <View style={styles.footer}>
            <TextInput style={styles.textInput}
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholder='>note'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'>
            </TextInput>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
    </Container>
    );
  }
  addNote() {
      if (this.state.noteText) {
          var d = new Date();
          this.state.noteArray.push({
            'date': d.getFullYear() + "/" +
            (d.getMonth() + 1) + "/" +
            d.getDate(),
            'note': this.state.noteText
          });
          this.setState({ noteArray: this.state.noteArray });
          this.setState({ noteText: '' })
      }
  }
  deleteNote(key) {
      this.state.noteArray.splice(key, 1);
      this.setState({ noteArray: this.state.noteArray })
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header: {
      backgroundColor: '#0173c7',
      alignItems: 'center',
      justifyContent:'center',
      borderBottomWidth: 10,
      borderBottomColor: '#017bd5'
  },
  headerText: {
      color: 'white',
      fontSize: 18,
      padding: 26
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10
  },
  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#0173c7',
      borderTopWidth:2,
      borderTopColor: '#ededed'
  },
  addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 75,
      backgroundColor: '#017bd5',
      width: 50,
      height: 50,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 0
  },
  addButtonText: {
      color: '#fff',
      fontSize: 50,
      paddingBottom: 66,
      paddingLeft: 2
  }
});
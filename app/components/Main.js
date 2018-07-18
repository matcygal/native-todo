import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Note from './Note';

import { Container, Content, Header, Form, Input, Item, Button, Label, Footer, FooterTab, Icon, Left, Right, Body, Title, Card, CardItem} from 'native-base';

import * as firebase from 'firebase';


// var config = {
//     apiKey: "AIzaSyDgIMIAn6QWmxB2k522j8ILmOPIZCmceNs",
//     authDomain: "trzypoziomy-71583.firebaseapp.com",
//     databaseURL: "https://trzypoziomy-71583.firebaseio.com",
//     projectId: "trzypoziomy-71583",
//     storageBucket: "trzypoziomy-71583.appspot.com",
//     messagingSenderId: "956046279906"
//   };
//   firebase.initializeApp(config);

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
          <Left>
            <Button transparent>
              <Icon type="Entypo" name='cog' style={styles.headerIcons}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.headerText}>Todo List</Title>
          </Body>
          <Right>
            <Icon type="Octicons" name='light-bulb' style={styles.headerIcons}/>
          </Right>
        </Header>
        <ScrollView style={styles.scrollContainer} >
        <Card>
            <CardItem>
              <Body>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at urna diam. Sed et tempor arcu. Aenean finibus sem luctus, convallis mi ut, molestie metus. Aliquam erat volutpat. Integer ornare ipsum aliquam mauris convallis, sed iaculis nisi fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at urna diam. Sed et tempor arcu. Aenean finibus sem luctus, convallis mi ut, molestie metus. Aliquam erat volutpat. Integer ornare ipsum aliquam mauris convallis, sed iaculis nisi fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                </Text>
              </Body>
            </CardItem>
          </Card>
            {notes}
        </ScrollView>
        <Footer>
            <FooterTab>
                <Button vertical>
                <Icon type="MaterialCommunityIcons" name="home-variant" />
                <Text>Home</Text>
                </Button>
                <Button vertical>
                <Icon type="MaterialCommunityIcons" name="infinity" />
                <Text>Habits</Text>
                </Button>
                <Button vertical active>
                <Icon active type="MaterialCommunityIcons" name="certificate" />
                <Text>Goals</Text>
                </Button>
                <Button vertical>
                <Icon type="MaterialCommunityIcons" name="checkbox-multiple-marked-circle-outline" />
                <Text>ToDo's</Text>
                </Button>
            </FooterTab>
        </Footer>
        <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
            <Icon type="MaterialIcons" name="note-add" style={styles.addButtonIcon} />
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
  headerText: {
      color: '#fff',
  },
  header: {
    backgroundColor: '#0173c7',
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100
  },
  headerIcons: {
    color: '#fff',
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
  addButtonIcon: {
      color: '#fff',
  }
});
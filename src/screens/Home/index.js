import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import * as firebase from 'firebase';

import {
  Container,
  Text,
  TouchableOpacity,
  TouchableOpacityText,
} from './styles';

export default function Home() {
  const [profile, setProfile] = useState({
    email: '',
    displayName: '',
  });

  const signOutUser = () => {
    firebase.auth().signOut();
  };

  useEffect(() => {
    function fetchUser() {
      if (profile.email === '') {
        const {email, displayName} = firebase.auth().currentUser;
        setProfile({email, displayName});
      }
    }
    fetchUser();
  });
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        <Text>{profile.email}</Text>
        <Text>{profile.displayName}</Text>

        <TouchableOpacity onPress={signOutUser}>
          <TouchableOpacityText>Logout</TouchableOpacityText>
        </TouchableOpacity>
      </Container>
    </>
  );
}

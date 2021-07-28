import 'react-native-gesture-handler'; // must stay at the top
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { API_USERNAME, API_PASSWORD } from "@env"
import Movies from '../Movies'

export default function Homescreen({ navigation }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const [token, setToken] = useState(null);

  // get Kvikmyndir.is API token with username and password
  useEffect(() => {
    async function getApiToken() {
      try {
        const response = await fetch(`https://api.kvikmyndir.is/authenticate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: `${API_USERNAME}`,
            password: `${API_PASSWORD}`
          }),
        });
      
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      
        const data = await response.json();
        setToken(data.token);
      } catch (err) {
        // could not get API token
        setErrorMessage('Something went wrong! please try again later.');
      }
    }

    getApiToken();
  }, []);

  // get movies from Kvikmyndir.is API with API token
  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch(`https://api.kvikmyndir.is/movies`, {
          method: 'GET',
          headers: { 'x-access-token': token },
        });
      
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      
        const data = await response.json();
        setMovies(data);
      } catch (err) {
        // could not get movies
        setErrorMessage('Something went wrong! please try again later.')
      }
    }

    if (token) {
      getMovies();
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hvað er í bíó     Tribute</Text>
      </View>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <Movies navigation={navigation} movies={movies} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#0e1824',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  logo: {
    width: 74,
    height: 48,
  },
  title: {
    color: '#f5f5f5',
    fontSize: 19,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.8,
    elevation: 10,
    paddingTop: 8,
    marginLeft: 10,
  },
  errorMessage: {
    color: 'red',
  }
});

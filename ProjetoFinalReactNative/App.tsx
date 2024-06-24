import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ContactsList } from './src/ContactsList';


export default function App() {
  return (
    <SafeAreaView style={{flex:1, marginVertical:10}}>
    <ContactsList/>
    </SafeAreaView>
  );
}



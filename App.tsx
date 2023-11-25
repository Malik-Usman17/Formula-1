import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import racesResponse from './source/data/races.json'
import { Entypo } from '@expo/vector-icons';
import { colors } from './source/constants/colors';
import RaceListItem from './source/components/RaceListItem';

const races = racesResponse.data.races.response



export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={races}
        renderItem={({ item }) => <RaceListItem item={item} />}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke"
  },
  
});

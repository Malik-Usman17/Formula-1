import { useFonts } from 'expo-font';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import RaceListItem from './source/components/RaceListItem';
import racesResponse from './source/data/races.json';
import { StatusBar } from 'expo-status-bar';
import dayjs from 'dayjs';


const races = racesResponse.data.races.response



export default function App() {

  const [fontsLoaded] = useFonts({
    "F1-Black": require("./source/assets/fonts/Formula1-Black.ttf"),
    "F1-Bold": require("./source/assets/fonts/Formula1-Bold-4.ttf"),
    "F1-Italic": require("./source/assets/fonts/Formula1-Italic.ttf"),
    "F1-Regular": require("./source/assets/fonts/Formula1-Regular-1.ttf"),
    "F1-Wide": require("./source/assets/fonts/Formula1-Wide.ttf")
  });

  if(!fontsLoaded){
    return <ActivityIndicator />
  }

  const sortedRaces = races.sort((r1, r2) => 
    dayjs(r2.date).diff(dayjs(r1.date))
  )

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar />

      <FlatList
        data={sortedRaces}
        renderItem={({ item, index }) => <RaceListItem item={item} round={sortedRaces.length - index} />}
      />

      <StatusBar />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke"
  },
  
});

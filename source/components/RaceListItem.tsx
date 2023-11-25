import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colors } from "../constants/colors";
import racesResponse from "../data/races.json"

const races = racesResponse.data.races.response

const RaceListItem = ({ item }: { item: (typeof races)[0] }) => {
  return (
    <View style={styles.itemContainer}>

      <View style={styles.datesContainer}>
        <Text>03-05</Text>
        <Text style={styles.month}>NOV</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.round}>Round 21</Text>
        <Text style={styles.country}>{item.competition.location.country}</Text>
        <Text style={styles.description}>Formula 1 {item.competition.location.country} 2023</Text>
      </View>

      <Entypo
        name="chevron-right"
        size={24}
        color={colors.primary}
      />

    </View>
  )
}

const styles = StyleSheet.create({
itemContainer: {
  flexDirection: "row",
  borderRadius: 10,
  padding: 10,
  margin: 5,
  backgroundColor: "white",
  alignItems: "center",
  shadowColor: "#000000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.17,
  shadowRadius: 2.54,
  elevation: 1
},
datesContainer: {
  padding: 10,
  marginRight: 10,
  borderRightWidth: 1,
  borderColor: "gainsboro",
  alignItems: "center"
},
date: {},
month: {
  backgroundColor: "gainsboro",
  paddingVertical: 3,
  paddingHorizontal: 10,
  overflow: "hidden",
  borderRadius: 10,
  color: "dimgray",
  fontWeight: "bold"
},
round: {
  color: colors.primary
},
country: {
  fontSize: 20,
  fontWeight: "bold"
},
description: {
  color: "dimgray"
}
});

export default RaceListItem;
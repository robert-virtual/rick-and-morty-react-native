import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { API_URL } from "./constantes"
export default function App() {
  const [personajes, setPersonajes] = useState([])
  useEffect(() => {
    solicitarDatos()
  }, [])

  async function solicitarDatos() {
    const res = await fetch(API_URL + "/character")
    const datos = await res.json()
    console.log("datos:", datos)
    setPersonajes(datos.results)

  }

  return (
    <View style={styles.container}>
      <FlatList
        data={personajes}
        renderItem={({ item }) => (
          <View style={{ padding: 10,margin:10,backgroundColor:"#c3c3c3" }}>
            <Text>{item.name}</Text>
            <Text>{item.status}</Text>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

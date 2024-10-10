// import {Text, SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native'
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// function App() {

//     return (
//         <View style={{backgroundColor: "red", flex: 1}}>
//             <SafeAreaView style={styles.container}>
//                 <View style={styles.header}>
//                     <TouchableOpacity>
//                         <MaterialCommunityIcons name="delete-outline" size={30} color="#fff"/>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={styles.contentWrap}>
//                     <View style={styles.content}>
//                         <View style={styles.rowBox}>
//                             <View style={styles.box}>
//                                 <Text style={styles.text}>Box 1</Text>
//                             </View>
//                             <View style={styles.box}>
//                                 <Text style={styles.text}>Box 2</Text>
//                             </View>
//                         </View>
//                         <View style={styles.rowBox}>
//                             <View style={styles.box}>
//                                 <Text style={styles.text}>Box 3</Text>
//                             </View>
//                             <View style={styles.box}>
//                                 <Text style={styles.text}>Box </Text>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//             </SafeAreaView>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     header: {
//         backgroundColor: "blue",
//         height: 100,
//         width: "100%",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     contentWrap: {
//         flex: 1,
//         backgroundColor: "yellow"
//     },
//     content: {
//         flex: 1,
//         backgroundColor: "green",
//         margin: 5
//     },
//     rowBox: {
//         flex: 1,
//         flexDirection: "row"
//     },
//     box: {
//         flex: 1,
//         backgroundColor: "gray",
//         margin: 5,
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     text: {
//         color: '#fff',
//         fontSize: 20
//     }
// })

// export default App;


import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import TextInputAdd from "./components/TextInputAdd";
import TodoItem from "./components/TodoItem";
import Feather from '@expo/vector-icons/Feather';

export interface ITodoItem {
  id: number;
  title: string;
  type: string;
  isActive: boolean;
}

export default function HomeScreen() {
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [id, setId] = useState<number>(1);
  const [dataToDo, setDataToDo] = useState<ITodoItem[]>([]);

  const addToDoItem = () => {
    const value = {
      id: id,
      isActive: false,
      title: title,
      type: type,
    };

    setDataToDo([value, ...dataToDo]);
    setId(id + 1);
  };

  const handleChangeStatus = (item: ITodoItem) => {
    const newDataToDo = dataToDo.map(todo => {
      if (todo.id === item.id) {
        return { ...item, isActive: true }
      } else {
        return todo
      }
    })
    setDataToDo(newDataToDo)
  };

  const handleDelete = (item: ITodoItem) => {
    const newDataToDo = dataToDo.filter((todo) => {
      return item.id !== todo.id
    })
    setDataToDo(newDataToDo)
  };

  const handleEdit = (item: ITodoItem) => {

  }

  return (
    <SafeAreaView style={{ backgroundColor: "#9395D3", flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 50,
              marginLeft: 20,
              marginBottom: 20,
            }}
          >
            TODO APP
          </Text>
        </View>
        <View style={[styles.body]}>
          <View style={styles.addingTask}>
            <View style={styles.input}>
              <TextInputAdd placeholder="Title" onChangeText={(e) => setTitle(e)} />
              <TextInputAdd placeholder="Type" onChangeText={(e) => setType(e)} />
            </View>
            <TouchableOpacity
              style={[styles.addButton]}
              onPress={addToDoItem}
            >
              <Feather name="plus-circle" size={36} color="e0e0e0" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={dataToDo}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) =>
              <TodoItem
                item={item}
                handleChangeStatus={handleChangeStatus}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  body: {
    flexDirection: "column",
    backgroundColor: "#B3B7EE",
    paddingTop: 10,
    flex: 1,
  },
  addButton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9395D3",
    borderRadius: 20,
    padding: 6,
    marginLeft: 10,
  },
  addingTask: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 20
  },
  taskBox: {
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 40,
    height: 70,
    width: 350,
    marginTop: 50,
    paddingLeft: 50,
  },
  status: {
    backgroundColor: "#9395D3",
    borderRadius: 10,
    height: 30,
    width: 30,
  },
});
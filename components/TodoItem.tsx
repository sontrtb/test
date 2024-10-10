import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { ITodoItem } from "@/App";

interface ITodoItemProps {
    item: ITodoItem;
    handleChangeStatus: (item: ITodoItem) => void;
    handleDelete: (item: ITodoItem) => void;
    handleEdit: (item: ITodoItem) => void;
}

function TodoItem(props: ITodoItemProps) {
    const {item, handleChangeStatus, handleDelete, handleEdit} = props;

    return (
        <View key={item.id} style={{ margin: 20, flexDirection: "row", justifyContent: "space-between" }}>
            <View>
                <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                <Text>{item.type}</Text>
                <Text style={{ color: item.isActive ? "green" : "red" }}>
                    Status: {item.isActive ? "Đã thực hiện" : "Chưa thực hiện"}
                </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                {
                    !item.isActive &&
                    <TouchableOpacity
                        style={[styles.addButton]}
                        onPress={() => handleChangeStatus(item)}
                    >
                        <MaterialIcons name="done-outline" size={24} color="#6de053" />
                    </TouchableOpacity>
                }
                {
                    !item.isActive &&
                    <TouchableOpacity
                        style={[styles.addButton]}
                        onPress={() => handleEdit(item)}
                    >
                        <Feather name="edit" size={24} color="blue" />
                    </TouchableOpacity>
                }

                <TouchableOpacity
                    style={[styles.addButton]}
                    onPress={() => handleDelete(item)}
                >
                    <MaterialCommunityIcons name="delete-outline" size={24} color="#e65f55" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addButton: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9395D3",
        borderRadius: 20,
        padding: 6,
        marginLeft: 10,
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

export default TodoItem
import { TextInput, StyleSheet } from "react-native";

interface ITextInputAddProps {
    placeholder: string
    onChangeText: (text: string) => void;
}

function TextInputAdd(props: ITextInputAddProps) {
    const { placeholder, onChangeText } = props;

    return (
        <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            onChangeText={onChangeText}
        />
    )
}

const styles = StyleSheet.create(({
    textInput: {
        borderWidth: 1,
        width: 300,
        padding: 10,
        borderRadius: 10
    }
}))

export default TextInputAdd;
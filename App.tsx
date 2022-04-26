import React, { FC, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Toggle from "./src/Components/Toggle";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        padding: 24
    },
    ContainerText: {
        height: "auto",
        width: "100%",
        marginBottom: 12
    },
    TitleText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#121212"
    },
    DescText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#656565",
    },
    ToggleView: {
        width: "100%",
        height: "auto"
    }
});

const App: FC = () => {
    const [ToggleValue, setToggleValue] = useState(false);
    return (
        <View style={styles.Container}>
            <View style={[styles.ContainerText, { borderBottomWidth: 2, borderColor: "#121212"}]}>
                <Text style={styles.TitleText}>Toggle Button</Text>
            </View>
            <View style={styles.ContainerText}>
                <Text style={styles.DescText}>Exemplo de contrução de um toggle button apenas com TS!</Text>
            </View>
            <View style={styles.ToggleView}>
                <Toggle width={100} value={ToggleValue} onPress={(val) => { setToggleValue(val) }}/>
            </View>
        </View>
    );
}

export default App;
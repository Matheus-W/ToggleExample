import React, { FC, useState } from "react";
import { View, Pressable, Animated } from "react-native";

interface ToggleProps {
    width: number,
    value: boolean,
    onPress: Function
}

const Toggle: FC<ToggleProps> = (props: ToggleProps) => {
    const HeightBackgroud = props.width / 2;
    const pinTrue = HeightBackgroud - 4;
    const [AnimatedPin] = useState(new Animated.Value(pinTrue));

    function OnPress(val: boolean) {
        if (val) {
            Animated.timing(AnimatedPin, {
                toValue: pinTrue, duration: 50,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(AnimatedPin, {
                toValue: 0, duration: 50,
                useNativeDriver: false
            }).start();
        }
    }

    return (
        <Pressable
            onPress={() => {
                OnPress(!props.value);
                props.onPress(!props.value);
            }}>
            <View style={{
                backgroundColor: props.value ? "#009933" : "#AAA",
                width: props.width,
                height: "auto",
                borderRadius: (HeightBackgroud / 2) + 8,
                padding: 2,
                justifyContent: "center"
            }}>
                <Animated.View
                    style={{
                        backgroundColor: "#CCC",
                        width: HeightBackgroud,
                        height: HeightBackgroud,
                        borderRadius: (HeightBackgroud / 2),
                        transform: [{ translateX: AnimatedPin }]
                    }}
                >

                </Animated.View>
            </View>
        </Pressable>
    );
}

export default Toggle;
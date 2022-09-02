/** @format */
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import Svg, { Image } from "react-native-svg";

export default function App() {
  const { height, width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"white"} translucent />
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height} width={width}>
          <Image
            href="https://images.unsplash.com/photo-1470955233021-2c79a52e5034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmslMjBzcGFjZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
      </View>
      <View style={{ height: height / 3 }}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text
            style={{
              fontSize: 18,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text
            style={{
              fontSize: 18,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
      {/* <KeyboardAvoidingView
        keyboardVerticalOffset={-90}
        style={{ height: height / 0.7 }}
      >
        <TextInput
          placeholder="Email"
          placeholderTextColor={"black"}
          style={styles.input}
        />
        <TextInput
          placeholder="Username"
          placeholderTextColor={"black"}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={"black"}
          style={styles.input}
        />
      </KeyboardAvoidingView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    textAlign: "center",
    height: 50,
    width: 340,
    backgroundColor: "purple",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 25,
    padding: 4,
    borderColor: "white",
    borderWidth: 1,
  },
  input: {
    height: 45,
    width: 340,
    marginVertical: 7,
    borderRadius: 25,
    paddingLeft: 8,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 18,
  },
});

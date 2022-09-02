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
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Svg, { Image } from "react-native-svg";
import { AntDesign } from "react-native-vector-icons";
import tw from "twrnc";

export default function App() {
  const { height, width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"white"} translucent />
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height / 2} width={width}>
          <Image
            href="https://images.unsplash.com/photo-1470955233021-2c79a52e5034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmslMjBzcGFjZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
        <View style={tw`flex flex-row justify-center `}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={tw`shadow-md -mt-4 rounded-full bg-white h-[10] w-[10] text-center flex justify-center items-center`}
          >
            <AntDesign name="close" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={{ height: height / 3 }}>
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
      </View> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ height: height / 2.5 }}
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
      </KeyboardAvoidingView>
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
    paddingLeft: 15,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 18,
  },
});

<SafeAreaView style={styles.container}>
{/* <ImageBackground
  style={styles.background}
  source={require("../client/src/assets/background.jpg")}> */}
    <Image
      style={styles.logo}
      source={require("../src/assets/logo.png")
    }/>
    <Text>Open up App.js to start working on your app!</Text>
    <TextInput
      placeholder = "enter something"
      value = {input}
      onChangeText={text => setInput(text)}
      style={styles.input}
    />
    <Button
      title="Submit"
      onPress={handleSubmit}
    />
    {/* <Button title="Click Me" onPress={() =>
      Alert.alert("My title", "My message", [
        {text: "Yes", onPress: () => console.log("Yes")},
        {text: "No",  onPress: () => console.log("No")},
        ]
      )}/> */}
    {/* <Button title="Click Me" onPress={() =>
      Alert.prompt("My title2", "My message", text => console.log(text))
    }/> */}
    <StatusBar style="auto" />
  {/* </ImageBackground> */}
</SafeAreaView>
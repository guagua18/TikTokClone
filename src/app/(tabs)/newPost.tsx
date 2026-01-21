import { View, Text, Linking, Button, StyleSheet } from "react-native"
import { CameraView, CameraType, useCameraPermissions } from "expo-camera"
import { useEffect, useState } from "react"

export default function NewPostScreen() { 
  const [facing, setFacing] = useState<CameraType>("back")
  const [permission, requestPermission] = useCameraPermissions()

  useEffect(() => {
    if (permission && !permission.granted && permission.canAskAgain) {
      requestPermission()
    }
  }, [permission])

  if (!permission || !permission.granted && !permission.canAskAgain) { 
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>We need your permission to access the camera</Text>
        <Button title="Grant Permission" onPress={() => Linking.openSettings()}></Button>
      </View>
    )
  }
  
  return (
    <View>
      <Text>New Post Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  permissionText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: '700'
  },
})
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default function Upload() {
  const [avatar, setAvatar] = useState(null);
  function ImagePickerCallback(data) {
    if (data.didCancel) {
      alert('Operação Cancelada');
      return;
    }
    if (data.error) {
      alert('Ocorreu um erro na seleção da imagem!');
      return;
    }
    if (!data.uri) {
      alert('URI Inválida!');
      return;
    }
    setAvatar(data);
  }
  return (
    <View style={Styles.container}>
      <Image
        source={{
          uri: avatar
            ? avatar.uri
            : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
        }}
        style={Styles.avatar}
      />
      <TouchableOpacity
        style={Styles.button}
        onPress={() => ImagePicker.launchCamera({}, ImagePickerCallback)}>
        <Text style={Styles.buttonText}>camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => ImagePicker.launchImageLibrary({}, ImagePickerCallback)}>
        <Text style={Styles.buttonText}>Galeria</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 3,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

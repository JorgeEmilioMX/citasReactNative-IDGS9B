import { Modal, Text, View, StyleSheet, Pressable } from "react-native";

const Formulario = ({modalVisible, setModalVisible}) => {
    return (
        <Modal styles={styles.container} animationType="slide" visible={modalVisible}>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Nueva
                    <Text style={styles.tituloBold}> Cita</Text>
                </Text>
                <Pressable style={styles.btnCancelar} onPress={() => setModalVisible(false)}>
                    <Text style={styles.btnTextoCancelar}>Cancelar</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    titulo: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        color: "#374151",
        marginTop: 30
    },
    tituloBold:{
        fontWeight: "900",
        color: "#6D28D9"
    },
    btnCancelar:{
    backgroundColor: "#6D28D9",
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoCancelar:{
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
    fontWeight: "900",
    textTransform: "uppercase",
  }
});

export default Formulario;
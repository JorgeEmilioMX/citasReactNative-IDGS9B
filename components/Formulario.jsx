import {useState} from "react";
import { Modal, Text, View, StyleSheet, Pressable, TextInput, Alert, Platform} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const Formulario = ({modalVisible, setModalVisible}) => {
    const [paciente, setPaciente] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState(''); 
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fechaAlta, setFechaAlta] = useState(new Date());
    const [mostrarPicker, setMostrarPicker] = useState(false);
    const [sintomas, setSintomas] = useState('');

    const onChangeFecha = (event, selectedDate) => {
        setMostrarPicker(Platform.OS === "ios");
        if(selectedDate)
            setFechaAlta(selectedDate);
    }

    const handleCita = (e) => {
        e.preventDefault();
        console.log('Enviando');

        if([paciente.trim(), nombrePropietario.trim(), email.trim(), telefono.trim(), fechaAlta.trim(), sintomas.trim()].includes('')){
            console.log('Todos los campos son obligatorios');
            Alert.alert("Campos Obligatorios. Todos los campos son obligatorios")
            return;
        }
        console.log('Todos los campos están llenos');
        const nuevoPaciente = {
            paciente,
            nombrePropietario,
            email,
            telefono,
            sintomas
        };
        console.log(nuevoPaciente);
        nuevoPaciente.id = Date.now();
        console.log(nuevoPaciente);
        setPacientes([...pacientes, nuevoPaciente]);
        setModalVisible(false);
        console.log(pacientes);
    }

    return (
        <Modal styles={styles.container} animationType="slide" visible={modalVisible}>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Nueva
                    <Text style={styles.tituloBold}> Cita</Text>
                </Text>
                <Pressable style={styles.btnCancelar} onPress={() => setModalVisible(false)}>
                    <Text style={styles.btnTextoCancelar}>Cancelar</Text>
                </Pressable>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre del Paciente</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese el nombre del Paciente"
                        placeholderTextColor={"#666"}
                        value={paciente}
                        onChangeText={setPaciente}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre del propietario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese el nombre del Propietario"
                        placeholderTextColor={"#666"}
                        value={nombrePropietario}
                        onChangeText={setNombrePropietario}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="correo@correo.com"
                        placeholderTextColor={"#666"}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Teléfono</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="4490000000"
                        placeholderTextColor={"#666"}
                        value={telefono}
                        onChangeText={setTelefono}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha de Alta</Text>
                    <Pressable 
                        style={styles.input} 
                        onPress={() => setMostrarPicker(true)}>
                            <Text>{fechaAlta.toLocaleDateString("es-ES", {year: "numeric", month: "long", day: "2-digit"})}</Text>
                    </Pressable>

                    {mostrarPicker && (
                        <DateTimePicker 
                            value={fechaAlta} 
                            mode="date" 
                            display={Platform.OS === "ios" ? "spinner" : "default"} 
                            onChange = {onChangeFecha} 
                            locale="es-ES" 
                        />
                    )}
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Síntomas del Paciente</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese los síntomas del Paciente"
                        placeholderTextColor={"#666"}
                        value={sintomas}
                        onChangeText={setSintomas}
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>

                <Pressable style={styles.btnCancelar} onPress={() => handleCita}>
                    <Text style={styles.btnTextoCancelar}>Agregar Cita</Text>
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
    },

    campo: {
        marginTop: 10,
        marginHorizontal: 30
    },

    label: {
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: "600"
    },

    input: {
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 10
    }
});

export default Formulario;
import React from 'react'
import { Pressable, Text, View, StyleSheet} from 'react-native'
import { formatearFecha } from '../../helpers'

const InformacionPaciente = ({paciente: pacienteInfo, setPaciente, setModalPaciente}) => {

    const {paciente, propietario, email, telefono, fecha, sintomas} = pacienteInfo

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Información{' '}
                <Text style={styles.tituloBold}>Paciente</Text>
            </Text>
            <View>
                <Pressable 
                    style={styles.btnCancelar}
                    onLongPress={() => { 
                        setModalPaciente(false)
                        setPaciente({})
                    }}
                >
                    <Text style={styles.btnCancelarTexto}>Cerrar X</Text>
                </Pressable>
            </View>
            <View
                style={styles.contenido}
            >
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.valor}>{paciente}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Propietario:</Text>
                    <Text style={styles.valor}>{propietario}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.valor}>{email}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Teléfono:</Text>
                    <Text style={styles.valor}>{telefono}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha de Alta:</Text>
                    <Text style={styles.valor}>{formatearFecha(fecha)}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Síntomas:</Text>
                    <Text style={styles.valor}>{sintomas}</Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#F59E0B',
        flex: 1
    },
    titulo: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 30,
        color: '#FFF',
        fontWeight: '600'
    },
    tituloBold: {
        fontWeight: '900',
        color: '#FFF'
    },  
    btnCancelar: {
        marginVertical: 30,
        backgroundColor: '#E06900',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10
    },
    btnCancelarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    contenido: {
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    campo: {
        marginBottom: 10
    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        fontSize: 12,
    },
    valor: {
        color: '#334155',
        fontWeight: '700',
        fontSize: 22
    }
})

export default InformacionPaciente

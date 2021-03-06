import React from 'react'
import { Text, View, TextInput, Modal, DatePickerIOS, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Alert, DatePickerAndroid, Platform } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../commomStyles'

const initialState = { desc: '', date: new Date() }

export default class AddTask extends React.Component {

    state = { ...initialState }

    save = () => {
        if(!this.state.desc.trim()) {
            Alert.alert('Dados inválidos!', 'Informe uma descrição para a tarefa.')
            return
        }
        const data = { ...this.state }
        this.props.onSave(data)
        this.setState({ ...initialState })
    }

    handleDateAndroidChanged = () => {
        DatePickerAndroid.open({
            date: this.state.date
        }).then(e => {
            if(e.action !== DatePickerAndroid.dismissedAction) {
                const momentDate = moment(this.state.date)
                momentDate.date(e.day)
                momentDate.month(e.month)
                momentDate.year(e.year)
                this.setState({ date: momentDate.toDate() })
            }
        })
    }

    render() {
        let datePicker = null
        if(Platform.OS === 'ios') {
            datePicker = <DatePickerIOS date={this.state.date} mode={"date"} onDateChange={date => this.setState({ date })}></DatePickerIOS>
        }
        else {
            datePicker = (
                <TouchableOpacity onPress={this.handleDateAndroidChanged}>
                    <Text style={estilo.date}>{moment(this.state.date).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}</Text>
                </TouchableOpacity>
            )
        }
        return(
            <Modal onRequestClose={this.props.onCancel} visible={this.props.isVisible} animationType={"fade"} transparent={true}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={estilo.offset}></View>
                </TouchableWithoutFeedback>
                <View style={estilo.container}>
                    <Text style={estilo.header}>Adicionar Tarefa</Text>
                    <TextInput placeholder={'Descrição...'} style={estilo.input} onChangeText={desc => this.setState({ desc })} value={this.state.desc}></TextInput>
                    {datePicker}
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={estilo.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={estilo.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={estilo.offset}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    offset: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.default,
    },
    header: {
        backgroundColor: commonStyles.colors.default,
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 15,
    },
    input: {
        fontFamily: commonStyles.fontFamily,
        width: '90%',
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10,
        textAlign: 'center'
    }
})
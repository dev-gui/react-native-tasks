import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import commomStyle from '../commomStyles'

export default props => {
    let check = null
    if(props.doneAt !== null) {
        check = (
            <View style={styles.done}>
                <Icon name='check' size={20} color={commomStyle.colors.secondary}></Icon>
            </View>
        )
    }
    else {
        check = <View style={styles.pending}></View>
    }

    const descStyle = props.doneAt !== null ? { textDecorationLine: 'line-through' } : {}

    return(
        <View style={styles.container}>
            <View style={styles.checkContainer}>{check}</View>
            <View>
                <Text style={[styles.description, descStyle]}>{props.desc}</Text>
                <Text style={styles.date}>{moment(props.estimateAt).locale('pt-br').format('ddd, D [de] MMMM')}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA'
    },
    checkContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%'
    },
    pending: {
        borderWidth: 1,
        height: 25,
        width: 25,
        borderRadius: 15,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: '#4d7031',
        alignItems: 'center',
        justifyContent: 'center'
    },
    description: {
        fontFamily: commomStyle.fontFamily,
        color: commomStyle.colors.mainText,
        fontSize: 15
    },
    date: {
        fontFamily: commomStyle.fontFamily,
        color: commomStyle.colors.subText,
        fontSize: 12,
    }
})
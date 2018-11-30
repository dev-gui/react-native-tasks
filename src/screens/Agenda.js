import React from 'react'
import { Text, View, StyleSheet, ImageBackground, FlatList} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commomStyles from '../commomStyles';
import Task from '../components/Tasks'

export default class Agenda extends React.Component {

    state = {
        tasks: [
            { id: 1, desc: 'Comprar o curso React Native',
                estimateAt: new Date(), doneAt: new Date()},
            { id: 2, desc: 'Concluir curso React Native',
                estimateAt: new Date(), doneAt: null},
            { id: 3, desc: 'Comprar o curso React Native',
                estimateAt: new Date(), doneAt: new Date()},
            { id: 4, desc: 'Concluir curso React Native',
                estimateAt: new Date(), doneAt: null},
            { id: 5, desc: 'Comprar o curso React Native',
                estimateAt: new Date(), doneAt: new Date()},
            { id: 6, desc: 'Concluir curso React Native',
                estimateAt: new Date(), doneAt: null},
            { id: 7, desc: 'Comprar o curso React Native',
                estimateAt: new Date(), doneAt: new Date()},
            { id: 8, desc: 'Concluir curso React Native',
                estimateAt: new Date(), doneAt: null},
            { id: 9, desc: 'Comprar o curso React Native',
                estimateAt: new Date(), doneAt: new Date()},
            { id: 10, desc: 'Concluir curso React Native',
                estimateAt: new Date(), doneAt: null},
            { id: 11, desc: 'Comprar o curso React Native',
                estimateAt: new Date(), doneAt: new Date()},
            { id: 12, desc: 'Concluir curso React Native',
                estimateAt: new Date(), doneAt: null},
        ]
    }

    render() {
        return (
        <View style={styles.container}>
            <ImageBackground source={todayImage} style={styles.background}>
                <View style={styles.titleBar}>
                    <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subtitle}>{moment().locale('pt-br').format('ddd, D [de] MMMM')}</Text>
                </View>
            </ImageBackground>
            <View style={styles.tasksContainer}>
        <FlatList data={this.state.tasks} keyExtractor={e => `${e.id}`} renderItem={({ item }) => <Task {...item}></Task>}></FlatList>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    tasksContainer: {
        flex: 7
    }
})
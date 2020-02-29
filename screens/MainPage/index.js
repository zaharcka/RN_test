import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import Check from '@expo/vector-icons/AntDesign';
import Delete from '@expo/vector-icons/Entypo';

import styles from './styles';

class MainPage extends React.PureComponent {

    state = {
        tasks: [
            {
                id: 1,
                title: 'Make something 1',
                isDone: true,

            },
            {
                id: 2,
                title: 'Make something 2',
                isDone: true,
            },
            {
                id: 3,
                title: 'Make something 3',
                isDone: false,
            },
            {
                id: 4,
                title: 'Make something 4',
                isDone: true,
            },

        ],
        isShowAll: true,
    };

    toggleTask = item => {
        const { tasks } = this.state;
        this.setState({ tasks: tasks.map(task => ({ ...task, isDone: task.title === item.title ? !item.isDone : task.isDone })) });
    };

    toggleShow = () => {
        const { isShowAll } = this.state;
        this.setState({ isShowAll: !isShowAll });
    }

    deleteTask = item => {
        const { tasks } = this.state;
        this.setState({ 
            tasks: tasks.filter(task => (task.title !==item.title)),        
        });
    };
    

    renderItem = item => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <View style={styles.itemSubcontainer}>
                    <TouchableHighlight 
                        onPress={() => this.toggleTask(item)} 
                        underlayColor="transparent" 
                    >
                        <View style={styles.indicator}>
                            {item.isDone && <Check name="check" size={20} color="green" />}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        onPress={() => this.deleteTask(item)} 
                        underlayColor="white" 
                    >
                        <View style={styles.indicator2}>
                            <Delete 
                                name="cross"
                                size={20} 
                                color="red" 
                            />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    };

    addNew = () => {
        const { string, tasks } = this.state;
        if (string.trim()) {
            this.setState({
                tasks: [...tasks, {
                    title: string.trim(),
                    isDone: false,
                }],
                string: '',
            });

        }
    };

    render() {
        const { tasks, string, isShowAll } = this.state;
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.firstLine}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Enter new task"
                            onChangeText={string => this.setState({ string })}
                            value={string}
                        />
                    </View>
                    <TouchableHighlight style={[styles.addButton, {backgroundColor: string ? '#28B463' : '#EAFAF1',}]}
                        onPress={this.addNew}
                        underlayColor={string ? '#28B463' : '#EAFAF1'}
                    >
                        <Text>Add new</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.globalSubcontainer}>

                    <TouchableHighlight 
                        style={styles.showButton}
                        onPress={this.toggleShow}
                        underlayColor="#FAD7A0"
                    >
                        <Text>{`Show ${isShowAll ? 'only uncompleted' : 'all'} tasks`}</Text>
                    </TouchableHighlight>

                    {isShowAll
                    ? tasks.map(this.renderItem)
                    : tasks.filter(item => !item.isDone).map(this.renderItem)
                    }                    
                </View>
            </View></ScrollView>
        );
    }
}



export default MainPage;
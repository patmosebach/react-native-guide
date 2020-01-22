import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.addItem(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course Goal" 
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button 
                            title="ADD"
                            onPress={addGoalHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="CANCEL"
                            color="red"
                            onPress={props.cancel}
                        />
                    </View>

                </View>

            </View>
        </Modal>
    )
};
const styles = StyleSheet.create({
    inputContainer: { 
        flex: 1,
        justifyContent:'center', 
        alignItems: 'center' 
    },
    input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttons: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button:{
        width: '40%'
    }
});


export default GoalInput;
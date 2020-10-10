/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';

function Todo({ todo, index, completeTodo, removeTodo }) {
	return (
		<View style={styles.todo}>
			<Text style={{ textDecorationLine: todo.isCompleted ?
				"line-through" : "none" }}>
				{todo.text}
			</Text>
			<Button style={styles.button}
				onPress={() => completeTodo(index)}
				title='Concluir'				
			/>
			<Button style={styles.button}
				onPress={() => removeTodo(index)}
				title='Remover'
			/>
		</View>
	);
}

const App: () => React$Node = () => {
	const [todos, setTodos] = useState([
			{ text: "Aprender sobre o React",
			isCompleted: false },
			{ text: "Encontrar um amigo para o almoço",
			isCompleted: false },
			{ text: "Passar no supermercado",
			isCompleted: false }
		]);
		const addTodo = info => {
			const newTodos = [...todos, { text: info, isCompleted:false }];
			setTodos(newTodos);
		};
		
		const completeTodo = index => {
			const newTodos = [...todos];
			newTodos[index].isCompleted = true;
			setTodos(newTodos);
		};
	
		const removeTodo = index => {
			const newTodos = [...todos];
			newTodos.splice(index, 1);
			setTodos(newTodos);
		};
		return (
			<View style={styles.container}>
				<View style={styles.todoList}>
					{todos.map((todo, index) => (
						<Todo key={index}
							index={index}
							todo={todo}
							completeTodo={completeTodo}
							removeTodo={removeTodo}
						/>					
					))}
					<Button style={styles.button}
						onPress={() => addTodo("Mais um item")}
						title='Adicione um item'
					/>
				</View>
			</View>
		);
};

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: "#20FFee",
		padding: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	todoList: {
		backgroundColor: '#e8e8e8',
		borderRadius: 4,
		padding: 5,
		maxWidth: 400
	},
	todo: {
		backgroundColor: '#fff',
		padding: 3,
		fontSize: 12,
		marginBottom: 6,
		borderRadius: 3,
		alignItems: 'center'
	},
	button: {
		padding: 3,
		fontSize: 12,
		marginBottom: 6,
		borderRadius: 3,
		alignItems: 'center'
	}
});

export default App;

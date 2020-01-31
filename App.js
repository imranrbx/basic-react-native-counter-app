import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const App = props => {
	let [counter, setCounter] = useState(0);
	let [status, setStatus] = useState(false);
	let [reset, setReset] = useState(false);
	let check = null;
	if (status) {
		check = setTimeout(() => {
			setCounter(counter + 1);
		}, 1000)
	} else {
		clearTimeout(check)
	}
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{counter}</Text>
			<View style={styles.btnContainer}>
				<Button disabled={status} title="Start" onPress={() => {
					setStatus(true)
					setReset(false)
				}} />
				<Button disabled={!status} title="Stop" onPress={() => {
					setStatus(false)
					setReset(true)
				}} />
				<Button disabled={!reset} title="Reset" onPress={() => {
					setCounter(0);
					setReset(false)
				}} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 28,
		textAlign: 'center'
	},
	btnContainer: {
		width: '40%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});

export default App;
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import params from './src/params';

export default class App extends Component {
	render() {
    	return (
    		<View>
				<Text>Tamanho da Grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        	</View>
      	);
  	}
}

const styles = StyleSheet.create({
  
});
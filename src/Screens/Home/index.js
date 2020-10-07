import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

class Home extends React.Component {
  state = {
    data: [],
    input: '',
  };
  addData = () => {
    const datanew = this.state.input;
    this.state.data.push(datanew);
    this.setState({data: this.state.data});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}> To Do List</Text>
        </View>
        <ScrollView style={styles.scroll}>
          {this.state.data.map((value, key) => {
            return (
              <View style={styles.boxList} key={key}>
                <View style={styles.content}>
                  <Text style={{color:"darkblue"}}>{value}</Text>
                </View>
                <View style={styles.delete}>
                  <Text >Hapus</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View>
          <TextInput
            placeholder="Masukan Data"
            value={this.state.input}
            onChangeText={(text) => this.setState({input: text})}
          />
          <Button title="Input" onPress={() => this.addData()} />
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  header: {
    height: 50,
    width: '90%',
    backgroundColor: '#46a4d2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginHorizontal:"5%",
    borderRadius:15,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  scroll: {
    flex: 1,
    // backgroundColor: 'red',
  },
  boxList: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 1,
    marginBottom: 5,
  },
  content: {
    height: 50,
    width: '80%',
    // backgroundColor: 'red',
    padding: 5,
  },
  delete: {
    height: 50,
    width: '20%',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
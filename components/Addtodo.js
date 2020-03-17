import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../redux/action';
import {View, Text} from 'react-native';

class AddTodo extends Component {
  render() {
    return (
      <View>
        <Text>NGon</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  state;
};

const mapActionToProps = dispatch => {
  dispatch;
};

export default AddTodo;
// export default connect(
//   mapStateToProps,
//   mapActionToProps,
// )(AddTodo);

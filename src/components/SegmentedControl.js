import React, { Component } from 'react';
import { View } from 'react-native';
import Button from './Button';

class SegmentedControl extends Component {

  render() {

    const defaultButtonColor = '#757575';
    const defaultBorderColor = '#fff';

    const currentTabTitle = this.props.currentTabTitle;
    var leftButtonText = '';
    var rightButtonText = '';
    var color = '';

    if (currentTabTitle==='Local') {
      leftButtonText = '最新文章';
      rightButtonText = '商場好去處';
      color = '#197cbc';
    }
    if (currentTabTitle==='Travel') {
      leftButtonText = '遊玩情報';
      rightButtonText = '旅遊快搜';
      color = '#65b145';
    }
    if (currentTabTitle==='Food') {
      leftButtonText = '飲食放題';
      rightButtonText = '飲得杯落';
      color = '#ec9729';
    }
    if (currentTabTitle==='Beauty') {
      leftButtonText = '美容情報';
      rightButtonText = '潮流情報';
      color = '#df1b80';
    }

    console.log(this.props);

    return (
      <View style={styles.containerStyle}>
        <Button
          buttonColor={this.props.selectedPage===leftButtonText ? color : defaultButtonColor}
          borderColor={this.props.selectedPage===leftButtonText ? color : defaultBorderColor}
          onPress={() => {this.props.onPress(leftButtonText); }}>
          {leftButtonText}
        </Button>
        <Button
          buttonColor={this.props.selectedPage===rightButtonText ? color : defaultButtonColor}
          borderColor={this.props.selectedPage===rightButtonText ? color : defaultBorderColor}
          onPress={() => {this.props.onPress(rightButtonText); }}>
          {rightButtonText}
        </Button>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

export default SegmentedControl;

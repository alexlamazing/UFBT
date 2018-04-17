import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';

class SegmentedControl extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPage:props.selectedPage };
  }

  render() {
    const defaultButtonColor = '#757575';
    const defaultBorderColor = '#fff';

    const currentTabTitle = this.props.currentTab;
    var leftButtonText = '';
    var rightButtonText = '';

    if (currentTabTitle==='本地') {
      leftButtonText = '最新文章';
      rightButtonText = '商場好去處';
    } else if (currentTabTitle==='旅遊') {
      leftButtonText = '遊玩情報';
      rightButtonText = '旅遊快搜';
    } else if (currentTabTitle==='飲食') {
      leftButtonText = '飲食放題';
      rightButtonText = '飲得杯落';
    } else if (currentTabTitle==='美容') {
      leftButtonText = '美容情報';
      rightButtonText = '潮流情報';
    }

    return (
      <View style={styles.containerStyle}>
        <Button
          buttonColor={this.state.selectedPage===leftButtonText ? this.props.headerColor : defaultButtonColor}
          borderColor={this.state.selectedPage===leftButtonText ? this.props.headerColor : defaultBorderColor}
          onPress={() => {this.setState({ selectedPage: leftButtonText}); this.props.onPress(leftButtonText); }}>
          {leftButtonText}
        </Button>
        <Button
          buttonColor={this.state.selectedPage===rightButtonText ? this.props.headerColor : defaultButtonColor}
          borderColor={this.state.selectedPage===rightButtonText ? this.props.headerColor : defaultBorderColor}
          onPress={() => {this.setState({ selectedPage: rightButtonText}); this.props.onPress(rightButtonText); }}>
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

import React, { Component } from 'react';
import StyleSheet from '../utils/CrossPlatformStyleSheet';
import PropTypes from 'prop-types';
import {
  View,
  WebView,
  TextInput,
  Text
} from 'react-native';
import WKWebView from 'react-native-wkwebview-reborn';
import AddressBar from './AddressBar';
import ControlBar from './ControlBar';
import SafariViewCaller from './SafariViewCaller';
import BrowserHeader from './BrowserHeader';
import VTButton from './VTButton';

const WEBVIEW_REF = 'webview';

export default class Browser extends Component {
  static types = {
    'UIWebView': WebView,
    'WKWebView': WKWebView,
    'SFSafariViewController': SafariViewCaller
  }

  static propTypes = {
    type: PropTypes.oneOf(['UIWebView', 'WKWebView', 'SafariView']).isRequired,
    onMenuButtonPress: PropTypes.func.isRequired,
    onDevButtonPress: PropTypes.func.isRequired
  }

  state = {
    currentUrl: 'https://www.google.com',
    isBackButtonEnabled: false,
    isForwardButtonEnabled: false,
    isLoading: false,
    gotoUrl: 'https://www.google.com' // to trigger navigation in webview
  }

  onNavigationStateChange = (navState) => {
    this.setState({
      isBackButtonEnabled: navState.canGoBack,
      isForwardButtonEnabled: navState.canGoForward,
      currentUrl: navState.url,
      isLoading: navState.loading
    });
  }

  onAddressBarSubmitEditing = ({url}) => {
    if (url !== this.state.gotoUrl) {
      this.setState({
        gotoUrl: url
      });
    } else {
      this.refs[WEBVIEW_REF].reload();
    }
  }

  onReload = () => this.refs[WEBVIEW_REF].reload()

  onForward = () => this.refs[WEBVIEW_REF].goForward()

  onBack = () => this.refs[WEBVIEW_REF].goBack()

  render() {
    const {type, onMenuButtonPress, onDevButtonPress} = this.props;
    const {currentUrl, gotoUrl, isLoading} = this.state;

    const WebView = Browser.types[type];
    const additionalProps = type === 'WKWebView' ? {
      openNewWindowInWebView: true
    } : {};

    return (
      <View style={styles.container}>
        <BrowserHeader
          left={(
            /* TODO: redux action */
            <VTButton type="menu" onPress={onMenuButtonPress} />
          )}
          right={(
            /* TODO: redux action */
            <VTButton type="code" onPress={onDevButtonPress} />
          )}>
          UIWebView
        </BrowserHeader>
        <AddressBar currentUrl={currentUrl} isLoading={isLoading}
          onSubmitEditing={this.onAddressBarSubmitEditing}
          onReload={this.onReload}/>
        <WebView style={styles.webview} source={{uri: gotoUrl}}
          onNavigationStateChange={this.onNavigationStateChange}
          ref={WEBVIEW_REF} {...additionalProps} />
        <ControlBar {...this.state} onForward={this.onForward}
          onBack={this.onBack} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  webview: {
    flex: 1
  }
});

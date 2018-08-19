import React from 'react';
import { Button, Radio, Icon } from 'antd';
import {connect} from 'react-redux';
import { loginSuccess } from '../../store/userOnBoarding/Action';
import { withRouter } from 'react-router-dom'


class App extends React.Component {
  state = {
    size: 'large',
  };

  _handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  componentWillUpdate(prevProps,nextProps){
    console.log("DID MOUNT");
    console.log(prevProps.Login, nextProps.Login)
    if(prevProps.Login === true){
      this.props.history.push('/Login');
    }
  }

  render() {
    const size = this.state.size;
    
    return (
      <div>
        <Radio.Group value={size} onChange={this._handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <Button type="primary" size={size}>Primary</Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>Dashed</Button>
        <Button type="danger" size={size}>Danger</Button>
        <br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" icon="download" size={size}>Download</Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />Backward
          </Button>
          
          
          <Button type="primary" onClick={()=>this.props.onLogin()}>
            Forward<Icon type="right" />
          </Button>
         

        </Button.Group>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(loginSuccess())
});

const mapStateToProps = state =>{
  return {
    Login: state.userOnBoarding.loggedIn
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
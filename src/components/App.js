import React, { Component } from 'react';
import levelFactory from './../lib/levels-factory';
import Game from './Game';
import Footer from './Footer';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

class App extends Component {
  constructor(props) {
    super(props);
    
    const level = props.level ? props.level : levelFactory(this.dificult ** 2);
    const originalLevel = Object.assign({}, level);
   

    this.state = {
      original: originalLevel,
      level,
    
    };
  }

  onResetClick = () => {
    this.setState({
      level: {
        tileSet: this.state.original.tileSet,
      },
    });
  };

  onNewClick = (e) => {
    var dificult = e.target.value 
    const newLevel = levelFactory(dificult ** 2);
    const newOriginalLevel = Object.assign({}, newLevel);
    this.setState({
      level: newLevel,
      original: newOriginalLevel,
      option:2
    });
  };

  fourByFour(){
    const newLevel = levelFactory(4 ** 2);
    const newOriginalLevel = Object.assign({}, newLevel);
    this.setState({
      level: newLevel,
      original: newOriginalLevel,
      option:2
    });
  }

  twoByTwo(){
    const newLevel = levelFactory(2 ** 2);
    const newOriginalLevel = Object.assign({}, newLevel);
    this.setState({
      level: newLevel,
      original: newOriginalLevel,
      option:2
    });
  }


  render() {
    const { className } = this.props;
    var numerox = (this.entrada)
    return (
      <div className={className}> 
        <button onClick={this.twoByTwo} >2x2</button>
        <button onClick={this.fourByFour} >4x4</button>
        
        <Game
          gridSize= {this.state.option}
          tileSize={90}
          numbers={this.state.level.tileSet}
          onResetClick={this.onResetClick}
          onNewClick={this.onNewClick}
          original={this.state.original.tileSet}
        />
        
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  level: PropTypes.shape({
    tileSet: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};

export default styled(App)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

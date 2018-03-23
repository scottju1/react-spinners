import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

const bounce = keyframes`
  0%, 100% {transform: scale(0)} 
  50% {transform: scale(1.0)}
`;

class Loader extends React.Component {
  style = i => css`{
        position: absolute;
        width: ${this.props.size.toString() + this.props.sizetunit};
        height: ${this.props.size.toString() + this.props.sizetunit};
        background-color: ${this.props.color};
        border-radius: 100%;
        opacity: 0.6;        
        top: 0;
        left: 0;
        animation-fill-mode: both;
        animation: ${bounce} 2.1s ${i === 1 ? '1s' : '0s'} infinite ease-in-out;
    }`;

  wrapper = () => css`{        
        position: relative;
        width: ${this.props.size.toString() + this.props.sizetunit};
        height: ${this.props.size.toString() + this.props.sizetunit};
    }`;
  render() {
    return this.props.loading ?
      <div className={this.wrapper()}>
        <div className={this.style(1)} />
        <div className={this.style(2)} />
      </div> : null;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  sizeunit: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 60,
  sizeunit: 'px'
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;

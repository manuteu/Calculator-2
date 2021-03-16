import { Component } from 'react';
import { Button } from '../components/button';
import Display from '../components/display';

class Calculator extends Component {
  initialState = {
    firstValue: 0,
    secondValue: 0,
    operator: 1,
    isSum: false,
    isSub: false,
    isMult: false,
    isDiv: false,
    isExp: false,
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  putValue = (value) => {
    const { firstValue, secondValue, operator } = this.state;
    const lastValue = operator === 1 ? firstValue : secondValue;
    //prettier-ignore
    switch (operator) {
      case 1:
        this.setState({ firstValue: (lastValue * 10) + value });
        break;
      case 2:
        this.setState({ secondValue: (lastValue * 10) + value });
        break;
    }
  };

  getValue = () => {
    const checkDivision = () => {
      return firstValue === 0
        ? 'Erro: Divisão por zero'
        : firstValue / secondValue;
    };
    const {
      firstValue,
      secondValue,
      isSum,
      isSub,
      isMult,
      isDiv,
      operator,
    } = this.state;

    switch (operator) {
      case 1:
        return firstValue;
      case 2:
        return secondValue;
      case 3:
        return isSum
          ? firstValue + secondValue
          : isSub
          ? firstValue - secondValue
          : isMult
          ? firstValue * secondValue
          : isDiv
          ? checkDivision()
          : firstValue * firstValue;
    }
  };

  pickOperation = (operation) => {
    switch (operation) {
      case 1:
        this.setState({ operator: 2, isSum: true });
        break;
      case 2:
        this.setState({ operator: 2, isSub: true });
        break;
      case 3:
        this.setState({ operator: 2, isMult: true });
        break;
      case 4:
        this.setState({ operator: 2, isDiv: true });
        break;
      case 5:
        this.setState({ operator: 2, isExp: true });
        break;
    }
  };

  execOperation = () => {
    this.setState({ operator: 3 });
  };

  clear = () => {
    this.setState(this.initialState);
  };
  // redFlag = () => {
  //   const display = document.querySelector('Display');
  //   display.classList.add('changeColor');
  // };

  render() {
    const { operator } = this.state;
    return (
      <div className={'calculator'}>
        <div className={'title'}>
          <p>Calculator</p>
        </div>
        <div>
          <Display value={this.getValue()} />
        </div>
        <div className={'buttonsConteiner'}>
          <Button
            display={'1'}
            onClick={() => this.putValue(1)}
            disabled={operator === 3}
          ></Button>
          <Button
            display={'2'}
            onClick={() => this.putValue(2)}
            disabled={operator === 3}
          ></Button>
          <Button
            display={'3'}
            onClick={() => this.putValue(3)}
            disabled={operator === 3}
          ></Button>
          <Button
            display={'+'}
            onClick={() => this.pickOperation(1)}
            disabled={operator !== 1}
          ></Button>
          <Button
            display={'4'}
            onClick={() => this.putValue(4)}
            disabled={operator === 3}
          ></Button>
          <Button
            display={'5'}
            onClick={() => this.putValue(5)}
            disabled={operator === 3}
          ></Button>
          <Button
            display={'6'}
            onClick={() => this.putValue(6)}
            disabled={operator === 3}
          ></Button>
          <Button
            display={'-'}
            onClick={() => this.pickOperation(2)}
            disabled={operator !== 1}
          ></Button>
          <Button
            display={'7'}
            onClick={() => this.putValue(7)}
            disabled={operator === 3}
          ></Button>
          <Button
            display={'8'}
            onClick={() => this.putValue(8)}
            disabled={operator === 3}
          ></Button>
          <Button
            display={'9'}
            onClick={() => this.putValue(9)}
            disabled={operator === 3}
          ></Button>
          <Button
            display={'a²'}
            onClick={() => this.pickOperation(5)}
            disabled={operator !== 1}
          ></Button>
          <Button
            display={'x'}
            onClick={() => this.pickOperation(3)}
            disabled={operator !== 1}
          ></Button>
          <Button
            display={'0'}
            onClick={() => this.putValue(0)}
            disabled={operator === 3}
          ></Button>
          <Button
            display={'÷'}
            onClick={() => this.pickOperation(4)}
            disabled={operator !== 1}
          ></Button>
          <Button
            display={'='}
            onClick={() => this.execOperation()}
            disabled={operator === 1}
          ></Button>
          <Button display={'C'} onClick={() => this.clear()}></Button>
        </div>
      </div>
    );
  }
}

export default Calculator;

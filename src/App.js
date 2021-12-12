import { useState } from "react"

function App() {

  const [previousNumber, setPreviousNumber] = useState('')
  const [currentNumber, setCurrentNumber] = useState('')
  const [operation, setOperation] = useState(undefined)

  function writeNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return
    else if (number === '.' && currentNumber === '') { {setCurrentNumber('0')}
    }
    setCurrentNumber(currentNumber => currentNumber.toString() + number.toString())
  }

  function compute() {
    const previous = parseFloat(previousNumber)
    const current = parseFloat(currentNumber)
    if (isNaN(previous) || isNaN(current)) return
    switch (operation) {
      case '+':
        return(previous + current).toString()
      case '-':
        return(previous - current).toString()
      case 'x':
        return(previous * current).toString()
      case '÷':
        return(previous / current).toString()
      default:
        return
    }
  }

  function clear() {
    setPreviousNumber('')
    setCurrentNumber('')
    setOperation(undefined)
  }

  function del() {
    setCurrentNumber(currentNumber => currentNumber.toString().slice(0, -1))
  }

  function changeSign() {
    if (currentNumber === '' || currentNumber === '0.') return
    setCurrentNumber(currentNumber => currentNumber * (-1))
    setCurrentNumber(currentNumber => currentNumber.toString())
  }

  function chooseOperation(newOperation) {
    if (currentNumber === '' && previousNumber === '') return
    if (currentNumber === '') {
      setOperation(newOperation)
      return
    }
    if (previousNumber !== '') {
      setPreviousNumber(compute())
      setOperation(newOperation)
      setCurrentNumber('')
      return
    }
    setOperation(newOperation)
    setPreviousNumber(currentNumber)
    setCurrentNumber('')
  }

  function formatNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    }
    else {
      integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    }
    else {
      return integerDisplay
    }
  }

  return (
    <div className="calculator">
      <div className="display">
        <div className="previous-number">{formatNumber(previousNumber)} {operation}</div>
        <div className="current-number">{formatNumber(currentNumber)}</div>
      </div>
      <button onClick={clear}>AC</button>
      <button onClick={del}>D</button>
      <button onClick={changeSign}>+/-</button>
      <button onClick={() => chooseOperation('÷')}>÷</button>
      <button onClick={() => writeNumber(7)}>7</button>
      <button onClick={() => writeNumber(8)}>8</button>
      <button onClick={() => writeNumber(9)}>9</button>
      <button onClick={() => chooseOperation('x')}>x</button>
      <button onClick={() => writeNumber(4)}>4</button>
      <button onClick={() => writeNumber(5)}>5</button>
      <button onClick={() => writeNumber(6)}>6</button>
      <button onClick={() => chooseOperation('-')}>-</button>
      <button onClick={() => writeNumber(1)}>1</button>
      <button onClick={() => writeNumber(2)}>2</button>
      <button onClick={() => writeNumber(3)}>3</button>
      <button onClick={() => chooseOperation('+')}>+</button>
      <div></div>
      <button onClick={() => writeNumber(0)}>0</button>
      <button onClick={() => writeNumber('.')}>.</button>
      <button onClick={() =>
        {
          setCurrentNumber(compute())
          setOperation(undefined)
          setPreviousNumber('')
        }}>=</button>
    </div>
  );
}

export default App;

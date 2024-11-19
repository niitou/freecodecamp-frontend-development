import React, { useState } from 'react'
import { evaluate } from "mathjs"

function JavascriptCalculator() {
  const [expression, setExpression] = useState("")

  const buttonHandle = (key) => {
    if (expression.length === 1 && expression.charAt(0) === "0") {
      console.log(true, expression, key)
      setExpression(key)
    }
    else if (key === "." && expression.charAt(expression.length - 1) === ".") {
      ;
    }
    else {
      setExpression(expression + key)
    }

  }

  const equalsHandle = () => {
    setExpression(evaluate(expression))

  }

  const clearHandle = () => {
    setExpression("0")
  }
  return (
    <div className='container container-fluid'>
      <input type="text" readOnly id='display' value={expression} />
      <div className="container" style={{ "display": "grid", "gridTemplateColumns": "repeat(4, 1fr)", "gridGap": "5px" }}>

        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"+"} id='add'>+</button>
        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"-"} id='subtract'>-</button>
        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"*"} id='multiply'>&times;</button>
        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"/"} id='divide'>&divide;</button>

        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"7"} id='seven'>7</button>
        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"8"} id='eight'>8</button>
        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"9"} id='nine'>9</button>

        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"4"} id='four'>4</button>
        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"5"} id='five'>5</button>
        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"6"} id='six'>6</button>

        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"1"} id='one'>1</button>
        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"2"} id='two'>2</button>
        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"3"} id='three'>3</button>

        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"0"} id='zero'>0</button>
        <button className="btn btn-outline-dark" onClick={e => buttonHandle(e.target.value)} value={"."} id='decimal'>.</button>
        <button className="btn btn-danger" id='clear' onClick={clearHandle}>AC</button>

        <button className="btn btn-primary btn-equals" id='equals' style={{ gridArea: "2 / 4 / 6 / 5" }} onClick={equalsHandle}>=</button>
      </div>
    </div>
  )
}

export default JavascriptCalculator
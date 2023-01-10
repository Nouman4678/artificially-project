import React, { useState} from 'react'
import { Col, Row } from "react-bootstrap";
import "./MasterPiece.css"
export default function MasterPiece() {
  const [text, setText] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  function handleClick(textvalue,id) {
    setText(textvalue);
    setSelectedButton(id);
  }
  return (
    <div>
    <div className='masterpiece'>
    <Col lg={12}>
        <div className="masterpiece-bx wow slideInUp">
          <Row>
            <Col lg={12} md={12}>
              <h3>Let's create a masterpiece!</h3>
              <p>Provide a description of what you would like the AI to create below:</p>
            </Col>
            <Col md={12}>
              <form onSubmit={handleSubmit}>
                <div className="new-text-bx">
                  <input value={text} type="text" onChange={(e) => setText(e.target.value)} placeholder="'Teddy bears dancing in a dojo in the style of ukiyo-e'" />
                  <button type="submit">Create</button>
                </div>
              </form>
            </Col>
          </Row>
          <Row>
          <Col className='first-col' lg={12} md={12}>
          <button className={selectedButton === 1 ?'btn btn-outline-secondary m-2 selected' :"btn btn-outline-secondary m-2 masterpiece-btns"} onClick={() => handleClick('Cats on T-shirts',1)}>Cats on T-shirts</button>
          <button className={selectedButton === 2 ?'btn btn-outline-secondary m-2 selected' :"btn btn-outline-secondary m-2 masterpiece-btns"} onClick={() => handleClick('Monkey on T-shirts',2)}>Monkey on T-shirts</button>
          <button className={selectedButton === 3 ?'btn btn-outline-secondary m-2 selected' :"btn btn-outline-secondary m-2 masterpiece-btns"} onClick={() => handleClick('Dragon on T-shirts',3)}>Dragon on T-shirts</button>
          <button className={selectedButton === 4 ?'btn btn-outline-secondary m-2 selected' :"btn btn-outline-secondary m-2 masterpiece-btns"} onClick={() => handleClick('Money Heist on T-shirts',4)}>Money Heist on T-shirts</button>
          </Col>
          <Col className='second-col' lg={12} md={12}>
          <button className={selectedButton === 5 ?'btn btn-outline-secondary m-2 selected' :"btn btn-outline-secondary m-2 masterpiece-btns"} onClick={() => handleClick('Twitter Logo on T-Shirts',5)}>Twitter Logo on T-Shirts</button>
          <button className={selectedButton === 6 ?'btn btn-outline-secondary m-2 selected' :"btn btn-outline-secondary m-2 masterpiece-btns"} onClick={() => handleClick('Facebook Logo on T-shirts',6)}>Facebook Logo on T-shirts</button>
          <button className={selectedButton === 7 ?'btn btn-outline-secondary m-2 selected' :"btn btn-outline-secondary m-2 masterpiece-btns"} onClick={() => handleClick('Steve Jobs on T-shirts',7)}>Steve Jobs on T-shirts</button>
          </Col>
          </Row>
        </div>
      </Col>
      </div>
      </div>
  )
}
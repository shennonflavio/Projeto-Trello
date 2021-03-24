import React, { useState } from 'react';
import './App.css';
import axios from 'axios';




function App() {

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputTextArea, setInputTextArea] = useState("");
  const [inputCheck, setInputCheck] = useState([""]);
  const [inputDrop, setInputDrop] = useState("");
  const [tagButton, setTagButton] = useState("");

  const inputHandler = (e) => {

    setInputCheck(e.target.value);

  };
  const inputDropDown = (e) => {

    setInputDrop(e.target.value);

  };

  const buttonTag = (e) => {

    setTagButton(e.target.value);

  };

  const inputHandlerName = (e) => {

    setInputName(e.target.value);

  };
  const inputHandlerEmail = (e) => {


    setInputEmail(e.target.value);

  };
  const inputHandlerText = (e) => {

    setInputTextArea(e.target.value);
  };




  const onSubmitHandler = (e) => {

    e.preventDefault();
    let desc = inputEmail + "\n" +
      inputTextArea + "\n" +
      inputCheck + "\n" +
      inputDrop + "\n" +
      tagButton;

    axios.post('https://api.trello.com/1/cards?key=b6c142534c27cd51a40257becba0d12a&token=722ea4cc226d9dc0dd69826861ec412b0db680c8998b045ba4462b50cb4b5915&idList=605914d56cc5da6176cad89b', {

      name: inputName,

      desc: desc

    })

      .then((Data) => {
        console.log(Data);
      })
      .catch((err) => {
        console.log('não foi possivel acessar a api ', err);
      })





    //Limpar os campos depois do submit
    setInputName("");
    setInputEmail("");
    setInputTextArea("");
    setInputCheck(e.target.value = '');
    setInputDrop(e.target.value = '');
    setTagButton("");


  };





  return (

    <div className="App" >
      <form>
        <div className="column1">
          <span>Name</span>
          <input onChange={inputHandlerName} name="name" id="name" type="text" value={inputName} />
          <span>E-mail</span>
          <input onChange={inputHandlerEmail} name="email" id="email" type="email" value={inputEmail} />
          <textarea value={inputTextArea} onChange={inputHandlerText} name="textbox" id="boxtext" cols="30" rows="10" placeholder="Type Something"></textarea>
        </div>

        <div className="column2">
          <div id="checkbox" className="checkbox">
            <span><input onChange={inputHandler} type="checkbox" value="opção1" />Opção 1</span>
            <span><input onChange={inputHandler} type="checkbox" value="opção2" />Opção 2</span>
            <span><input onChange={inputHandler} type="checkbox" value="opção3" />Opção 3</span>
          </div>



          <div className="dropdown">
            <span >Dropdown</span>
            <select onChange={inputDropDown} name="dropdown" id="dropDown">
              <option value=""></option>
              <option value="Select 1">Select 1</option>
              <option value="Select 2">Select 2</option>
              <option value="Select 3">Select 3</option>
            </select>
          </div>


          <div id="tag" className="tags">
            <span>Tags</span>
            <button type="button" onClick={buttonTag} value="web ">web</button>
            <button type="button" onClick={buttonTag} value="illustration ">illustration</button>
            <button type="button" onClick={buttonTag} value="graphics ">graphics</button>
            <button type="button" onClick={buttonTag} value=" UI">UI</button>
            <button type="button" onClick={buttonTag} value="design ">design</button>
            <button type="button" onClick={buttonTag} value="App ">App</button>
            <button type="button" onClick={buttonTag} value="iphone ">iphone</button>
            <button type="button" onClick={buttonTag} value=" interface">interface</button>
            <button type="button" onClick={buttonTag} value="icon ">icon</button>
            <button type="button" onClick={buttonTag} value="web design ">web design</button>

          </div>
          <button className="botao-enviar" type="submit" name="enviar" value="" onClick={onSubmitHandler} > Enviar</button>

        </div>
      </form>





    </div >
  );



}

export default App;


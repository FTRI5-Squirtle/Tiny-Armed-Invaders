import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"
import axios from 'axios';

// import Game from '../vanillaJSinvaders/Game.js';

export default function HomePage() {
 const scores = [
      { username: 'testusername2', score: 1250 },
      { username: 'testusername4', score: 50 },
      { username: 'testusername7', score: 30 },
      { username: 'testusername7', score: 30 },
      { username: 'testusername4', score: 20 },
      { username: 'testusername4', score: 15 },
      { username: 'testusername4', score: 11 },
      { username: 'testusername2', score: 11 },
      { username: 'testusername4', score: 10 },
      { username: 'b3', score: 1 }
    ];
  let global;
  const [roster, setRoster] = useState([]);
  let list = document.getElementById('list');


  function populateRoster2() {
    for (let i = 0; i < scores.length; i++) {
      const li = document.createElement('li');
      li.textContent = scores[i]['user'];
      list.appendChild(li);
    }
  }
  

  console.log('roster line 30:', roster)
  // setTimout(()=>{

  // }, 2000)
    return(
      <div>
        <h1>This is a homepage with tiny arms.</h1>
        <Link to = "/signup">
          <button id="signupButton">Sign Up</button>
        </Link>
        <Link to = "/login">
          <button id="loginButton">Login</button>
        </Link>
        <h2>I'm a Marketing thingy</h2>
        <div>
          <ReactPlayer
            url="https://youtu.be/MztdzGQ_IuM"
            controls
          />
        </div>
        <div id='append' innerHTML={roster}>

        <ul id='list'>
          
          
        </ul>
        </div>
      </div>
    );
};

/*
function getMessages(){
  const returnedData = [];
  fetch('http://localhost:3434/messages')
    .then(response => response.json())
    .then(data => {
      const existingUnorderedList = document.getElementById('message-list');
      const unorderedList = document.createElement('ul');
      unorderedList.id = 'message-list';
      for(const element of data){
        const message = element.message;
        const time = element.created_at;
        const messageElement = document.createElement('li');
        messageElement.innerText = element.message;
        const buttonElement = document.createElement('button');
        buttonElement.className = 'del';
        buttonElement.innerText = 'Delete';
        buttonElement.onclick = ()=>deleteMessage(element.id);
        messageElement.appendChild(buttonElement);
        unorderedList.appendChild(messageElement);
      }
      existingUnorderedList.parentNode.replaceChild(unorderedList,existingUnorderedList);
      //document.querySelector('body').appendChild(unorderedList);
    })
    .catch(error=>{
      console.log('caught in get', error.message);
    });
  returnedData.forEach(elem=>{
    console.log(elem.message);
  });
}
*/
/*
https://felixgerschau.com/react-rerender-components/
https://www.delftstack.com/howto/react/force-rerender-in-react/
https://medium.com/geekculture/simple-data-fetching-in-react-with-the-fetch-api-and-axios-with-hooks-useeffect-and-usestate-85d6bd7357c2
https://linguinecode.com/post/4-methods-to-re-render-react-component
https://daveceddia.com/react-before-render/

converting a javascript string to a html object

var s = '<div id="roster"></div>';
var htmlObject = document.createElement('div');
htmlObject.innerHTML = s;
htmlObject.getElementById("roster").style.marginTop = something;


[0]   rows: [
[0]     { username: 'testusername2', score: 1250 },
[0]     { username: 'testusername4', score: 50 },
[0]     { username: 'testusername7', score: 30 },
[0]     { username: 'testusername7', score: 30 },
[0]     { username: 'testusername4', score: 20 },
[0]     { username: 'testusername4', score: 15 },
[0]     { username: 'testusername4', score: 11 },
[0]     { username: 'testusername2', score: 11 },
[0]     { username: 'testusername4', score: 10 },
[0]     { username: 'b3', score: 1 }
[0]   ],

https://stackoverflow.com/questions/7070053/convert-a-sql-query-result-table-to-an-html-table-for-email

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );

    setData(result.data);
  }, []);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}



       <table>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
          <tr>
            // {/* <th>{data[0]['username']}</th>
        //     <th>Score</th>
        //   </tr>
        // </table>
    /* { <div id='roster'>{scoreRoster.rows}</div>}
      // const [scoreRoster, newscoreRoster] = useState([]);
  // useEffect(() => {
  //   axios.get('/scores')
  //   .then((res) => {
  //     newscoreRoster(res.data.push(ele));
  //   })
  // }, []);

  //below works for getting the roster
  //  const getScoreRoster = async () => {
  //   const response = await axios.get('/scores');
  //   const data = await response.data
  //   console.log(data)
  //   // data.forEach(ele => {
  //   //   scoreRoster.push(ele);
  //   // })
  //   // console.log(data)
  // }
  
  // getScoreRoster();
  //console.log('scoreRoster:', scoreRoster);


    // function populateRoster() {
  //   scores.forEach(item => {
  //      list.appendChild(
        
  //       <li key={item}>
  //         {item.username}{item.score}
  //       </li>
        
  //     )
  //  }
  // }

    // function populateRoster() {
  //   roster.length ? roster.map(item => (
  //     <li key={item}>
  //       {item.username}{item.score}
  //     </li>
  //   )) : 'Not loaded yet'
  // }


  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('/scores');
      setRoster(result.data);
      console.log('result:', result.data)
      global = result.data;
      console.log('roster inside async:', roster)
      const append = document.getElementById('append');
      append.appendChild(result.data[0]);
    } 
    fetchData();
    // console.log('result:', result)

  }, []);

    */

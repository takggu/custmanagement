import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name': '탁규환',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name': '탁구공',
  'birthday':'860829',
  'gender':'남자',
  'job':'프로그램'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name': '김탁구',
  'birthday':'890511',
  'gender':'남자',
  'job':'가정부'
}
]

class App extends Component{
  render() {
    return (
        <div>
        {customers.map(c => { return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); })}
        </div>
    );
  }
}

export default App;

import React, {useState} from 'react';
import {MouseEvent} from "react";
import './App.css';
import {Button} from "./Button/Button";
import {NewComponents} from "./NewComponents";
import {subscribe} from "diagnostics_channel";
import {cleanup} from "@testing-library/react";

function App() {
    let [a, setA] = useState(1)
    const onclickHandler=()=>{
        setA(++a);
        console.log(a)
    }
    const onclickHandler1=()=>{
        setA(0)
    }
    return(
        <div className={"App"}>
            <h1>{a}</h1>
            <button onClick={onclickHandler}>number</button>
            <button onClick={onclickHandler1}>0</button>
        </div>
    );
}

































   /* const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log('Im stupid button')
    }
    return (
        <div className={'App'}>

            <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('Im Vasya', 21)}/>
            <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo('im ivan')}/>
            <Button name={'stupid'} callBack={Button3Foo}/>

        </div>
    );*/



/*



      let [students, setStudents] = useState([
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
          ]
      );
      return (
          <NewComponents students={students}/>
      );
    }

    const [topCars, setTopCars] = useState([
            {id: 1, manufacturer: 'BMW', model: 'm5cs'},
            {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
            {id: 3, manufacturer: 'Audi', model: 'rs6'}
        ]
    );
    return (
        <NewComponents cars={topCars}/>
    );
}


*/

export default App;
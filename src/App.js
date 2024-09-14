import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import React from 'react';

export default function App(){
  const [user, setUser] = useState ({
    name: 'Nhi',
    age: 22,
    address : {
      city: 'Cypress',
      state: 'Texas'
    },
  })
  const [count, setCount] = useState(0);

   const handleClick = () => {
    setCount((prev)=>{
      return prev+1;
    })
  }

  const clickMe = (event) => {
    var nameList = [
      'Time', 'Past', 'Future', 'Dev',
      'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
      'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
      'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
      'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
      'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
      'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
      'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
      'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
      'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
      'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
      'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
      'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
      'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
      'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
      'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
      'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
      'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
      'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
      'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
      'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
    ];
    let changeAge = Math. floor(Math. random() * 100) + 1;
    var finalName = nameList[Math.floor(Math.random() * nameList.length)];
    // console.log('You clicked me');
    // console.log(event);
    setUser(() =>({
        name: finalName,
        age: changeAge,
      }));
  }

  
  return (
    <div>
      <p>Hello World!!! My name is {user.name} </p>
      I'm {user.age} years old;
      <MyComponent></MyComponent> 
      <p>{`Count ${count}`}</p>
      <button onClick={handleClick}>Increase Count</button>
      <button onClick={clickMe}>click me</button>
      
    </div>
  );
}



// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <div>Count = {count}</div>
//     //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//     //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//     //   </header>
//     </div>
//   );
// }
// export default App;

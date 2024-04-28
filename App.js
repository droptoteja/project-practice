import './App.css';
import {useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './Store/slices/counter.slice';
import { useState } from 'react';
import { updateUser } from './Store/slices/user.slice';
import { store } from './Store/store';

function App() {
const dispatch = useDispatch()
const count = useSelector((state) => state.counter.count)

const user = useSelector((state) => state.userData.user)

console.log(store.getState())

const [userData, setUser] = useState({
  name: '',
  email: "",
  password: ''
})

const onchange = (e) => {
  setUser({...userData, [e.target.name]: e.target.value})
}


const submitData = () => {
  dispatch(updateUser(userData))
}

  return (
    <div>
      <p>{count}</p>
      <br />
      <button onClick={() => dispatch(increment( ))}>Add</button>
      <button onClick={() => dispatch(decrement( ))}>Substract</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>AddBy2</button>

      <br />
      <br />

      <div>
        <input name='name' placeholder='name' type='text' onChange={onchange} />
        <br />
        <input name='email' placeholder='email' type='email' onChange={onchange} />
        <br />
        <input name='password' placeholder='password' type='password' onChange={onchange} />
        <button onClick={submitData}>Submit</button>
      </div>

      <h1>display data</h1>
      <p>{user.name}, {user.email}, {user.password}</p>
    </div>
  );
}

export default App;

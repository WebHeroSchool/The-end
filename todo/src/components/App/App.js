import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = 'Написать приложение';
const App = () => (<div>
  <h1>TODOLIST</h1>
  <InputItem />
  <ItemList todoItem = {todoItem} />
  <Footer count = {4} />
</div>);

export default App;
import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({date, title, amount}) => {
  const [newTitle, setNewTitle] = useState(title);
  function clickHandle() {
    setNewTitle('Updated!');
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{newTitle}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
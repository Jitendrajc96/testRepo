import React from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
    return <form>
        <div class="new-expense__controls">
            <div class="new-expense__control">
                <label>Title</label>
                <input type='text' />
            </div>
            <div class="new-expense__control">
                <label>Amount</label>
                <input type='number' />
            </div>
            <div class="new-expense__control">
                <label>Date</label>
                <input type='date' min='2022-11-08' />
            </div>
        </div>
        <div class='add-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
};
export default ExpenseForm;

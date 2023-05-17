import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency, expenses } = useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const setBudget = (newBudget) => {
        if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return ;
        } else{
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    }
    return (
        <div className='alert alert-secondary'>
            Budget: {currency} <input
                        required='required'
                        type='number'
                        step="10"
                        id='cost'
                        max='20000'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
        </div>
    );
};
export default Budget;

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    
    const setCurrency = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }
    return (
        <div className='alert alert-secondary'>
            Currency:
                <select className='custom-select' id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)} value={currency}>
                        <option value="$" name="dollar"> $ dollar</option>
                    <option value="€" name="Euro">€ Euro</option>
                    <option value="₹" name="Rupee">₹ Rupee</option>
                    <option value="£" name="Pound">£ Pound</option>
                  </select>            
        </div>
    );
};
export default Currency;

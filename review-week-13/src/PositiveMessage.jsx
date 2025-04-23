import React, { useState } from 'react';
function PositiveMessage(props) {
    const goal = 5;
    const totalFruits = 0;
    const message = "";
    
        return (
            <div style={{ marginTop: '20px' }}>
              <h2>Daily Goal: {goal.props}</h2>
              <p>Progress: {totalFruits.props}</p>
              <p><strong>{message.props}</strong></p>
            </div>
        );
   
}
export default PositiveMessage
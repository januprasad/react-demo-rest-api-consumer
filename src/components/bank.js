// src/components/contacts.js

    import React from 'react'

    const Bank = ({ bank }) => {
      return (
        <div>
          <center><h1>Bank</h1></center>
        
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{bank.bank}</h5>
                <h5 class="card-title">{bank.creditCardCount}</h5>
                <h5 class="card-title">{bank.debitCardCount}</h5>
              </div>
            </div>
        </div>
      )
    };

    export default Bank
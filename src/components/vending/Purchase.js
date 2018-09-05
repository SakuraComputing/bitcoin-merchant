import React, { Component } from 'react'
import Cards from 'react-credit-cards';

class Purchase extends Component {
  render() {
    return (
      <div>
          <h2>Purchase Bitcoin</h2>
          <div className="row">
            <div className="col span-1-of-2 buyer-box">
                Amount
            </div>
            <div className="col span-1-of-2 buyer-box">
                Credit Card Details
                <Cards 
                    number={38712682138123}
                    name={"RP MacMurphy"}
                    expiry={2020}
                    cvc={328}
                />
            </div>
        </div>
        
      </div>
    )
  }
}
export default Purchase;
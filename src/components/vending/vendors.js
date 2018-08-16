import React, { PureComponent } from 'react'

class Vendors extends PureComponent {
  render() {
    return (
      <div className="vendors">
        <h2>Purchase your coins from one of the vendors below</h2>
        <ul>
            <li>Seller</li>
            <li>Payment Method</li>
            <li>Price</li>
            <li>Limits</li>
            <li>Buy</li>
        </ul>
      </div>
    )
  }
}
export default Vendors;

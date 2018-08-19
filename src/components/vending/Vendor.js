import React, { Component } from 'react'
import ReactNumberFormat from 'react-number-format';
import NumberFormat from 'react-number-format';

export default class Vendor extends Component {
  render() {

    const { vendor } = this.props;
    return (
      <div className="vendor-container">
            <div className="vendor-col">
                {vendor.seller}
            </div>
            <div className="vendor-col-2">
                {vendor.paymentmethod}
            </div>
            <div className="vendor-col">
                <NumberFormat value={vendor.price} prefix={'£'} thousandSeparator={true} fixedDecimalScale={2}/>
            </div>
            <div className="vendor-col">
                <NumberFormat value={vendor.lowerlimit} prefix={'£'} thousandSeparator={true} fixedDecimalScale={2}/>
                 -
                <NumberFormat value={vendor.upperlimit} prefix={'£'} thousandSeparator={true} fixedDecimalScale={2}/>    
            </div>
            <div className="vendor-col">
                {vendor.currency}
            </div>
            <button className="vendor-button">Buy</button>
      </div>
    )
  }
}

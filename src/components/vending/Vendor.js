import React, { Component } from 'react'

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
                {vendor.price}
            </div>
            <div className="vendor-col">
                {vendor.lowerlimit} - {vendor.upperlimit}
            </div>
            <div className="vendor-col">
                {vendor.currency}
            </div>
            <button className="vendor-button">Buy</button>
      </div>
    )
  }
}

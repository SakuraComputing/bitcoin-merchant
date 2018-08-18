import React, { Component } from 'react'

export default class Vendor extends Component {
  render() {

    const { vendor } = this.props;
    return (
      <div className="row">
            <div className="col span-1-of-6">
                {vendor.seller}
            </div>
            <div className="col span-2-of-6">
                {vendor.paymentmeyhod}
            </div>
            <div className="col span-3-of-6">
                {vendor.price}
            </div>
            <div className="col span-4-of-6">
                {vendor.lowerlimit}
            </div>
            <div className="col span-5-of-6">
                {vendor.upperlimit}
            </div>
            <div className="col span-6-of-6">
                {vendor.currency}
            </div>

      </div>
    )
  }
}

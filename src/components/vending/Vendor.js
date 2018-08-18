import React, { Component } from 'react'

export default class Vendor extends Component {
  render() {

    const { vendor } = this.props;
    return (
      <div>
            <div>
                {vendor.seller}
            </div>
            <div>
                {vendor.paymentmeyhod}
            </div>
            <div>
                {vendor.price}
            </div>
            <div>
                {vendor.lowerlimit}
            </div>
            <div>
                {vendor.upperlimit}
            </div>
            <div>
                {vendor.currency}
            </div>

      </div>
    )
  }
}

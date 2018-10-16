import React, { Component } from 'react'
import Card from 'react-credit-cards';
import CurrencyInput from 'react-currency-input';

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData,
  } from '../common/PaymentUtils';

class Purchase extends Component {

  constructor() {
      super()
      this.state = {
          number: '',
          name: '',
          expiry: '',
          cvc: '',
          issuer:'',
          focused: '',
          formData: null
      }
  }

  handleInputFocus = ({ target }) => {
      this.setState({
          focused: target.name
      })
  }

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
        target.value = formatCreditCardNumber(target.value);
      } else if (target.name === 'expiry') {
        target.value = formatExpirationDate(target.value);
      } else if (target.name === 'cvc') {
        target.value = formatCVC(target.value);
      }
  
      this.setState({ [target.name]: target.value }
    );  
  }

  handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    return (
      <div>
          <h2>Purchase Bitcoin</h2>
          <div className="row">
            <div className="col span-1-of-3 buyer-box">
                <h3>Amount</h3>
            </div>
            <div className="col span-2-of-3 buyer-box">
                <h3>Credit Card Details</h3>
                <div className="cc__row">
                    <Card 
                        number={this.state.number}
                        name={this.state.name}
                        expiry={this.state.expiry}
                        cvc={this.state.cvc}
                        focused={this.state.focused}
                        callback={this.handleCallback}
                    />                
                </div>
            <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                <div className="cc__row">
                    <input
                        type="tel"
                        name="number"
                        className="forms__input cc__number"
                        placeholder="Card Number"
                        pattern="[\d| ]{16,22}"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                </div>
                <div className="cc__row">
                    <input
                        type="text"
                        name="name"
                        className="forms__input"
                        placeholder="Name"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                </div>
                <div className="cc__row">
                    <input
                        type="tel"
                        name="expiry"
                        className="forms__input"
                        placeholder="Valid Thru"
                        pattern="\d\d/\d\d"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="cvc"
                        className="forms__input cc__cvc"
                        placeholder="CVC"
                        pattern="\d{3,4}"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                </div>
                <div >
                    <button className="vendor-button cc__pay">PAY</button>
                </div>
                <input type="hidden" name="issuer" value={this.state.issuer} />
            </form>
          </div>
          {this.state.formData && (
              <div className="App-highlight">
              {formatFormData(this.state.formData).map((d, i) => <div key={i}>{d}</div>)}
            </div>
          )}

        </div>
        
      </div>
    )
  }
}
export default Purchase;
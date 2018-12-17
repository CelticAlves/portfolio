import React, { Component } from "react";
import { Media } from "reactstrap";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: [
        {
          id: 0,
          name: "Bitcoin",
          image: "assets/images/bitcoin.png",
          price: "3000",
          description: "crypto asset ment to disrupt financial world"
        },
        {
          id: 1,
          name: "XRP",
          image: "assets/images/xrp.png",
          price: "0.26",
          description: "crypto asset ment to disrupt financial world"
        },
        {
          id: 2,
          name: "Ethereum",
          image: "assets/images/ethereum.png",
          price: "80",
          description: "crypto asset ment to disrupt financial world"
        }
      ]
    };
  }
  render() {
    const menu = this.state.cryptos.map(crypto => {
      return (
        <div key={crypto.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media object src={crypto.image} alt={crypto.name} />
            </Media>
            <Media body className="ml-5">
              <Media heading>{crypto.name}</Media>
              <p>{crypto.description}</p>
            </Media>
          </Media>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <Media list>{menu}</Media>
        </div>
      </div>
    );
  }
}
export default Menu;

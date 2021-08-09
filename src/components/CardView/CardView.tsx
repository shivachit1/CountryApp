import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Flag from "../Flag/Flag";
import ThemeContext from "../../ThemeContext";
import { addToCart} from "../../redux/actions/cart";
import { AppState, Country } from "../../types/types";
import "./index.css";

const CardView = ({ flag, name, languages, population, region }: Country) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { theme } = useContext(ThemeContext);
  const cartCountries = useSelector(
    (state: AppState) => state.cart.cartCountries
  );

  // checking if country is present in cart (i.e not present -> undefined)
  const countryIncludedInCart = cartCountries.find((c) => c.name === name);

  const addProductToCart = () => {
    const country = {
      flag,
      name,
      languages,
      population,
      region,
    };
    // dispatching country to cart
    dispatch(addToCart(country));
  };

  const viewSingleProduct = () => {
    history.push(`/product/${name}`);
  };

  return (
    <div
      className="card"
      style={{ boxShadow: `0 0 8px 8px ${theme.color}` }}
    >
      <Flag flag={flag} />
      <div className="details">
        <strong>Country Name:</strong>
        <p>{name}</p>
        <strong>Languages: </strong>
        <ul>
          {languages.map((lang) => (
            <li key={lang.name}>{lang.name}</li>
          ))}
        </ul>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
      </div>
      <div>
        <button
          style={{
            backgroundColor: !countryIncludedInCart
              ? theme.color
              : "rgba(0, 0, 0, 0.253)",
          }}
          onClick={() => addProductToCart()}
        >
          Buy Now
        </button>
        {!history.location.pathname.includes("/product/") && (
          <button 
          style={{
            backgroundColor: theme.color,
          }} onClick={() => viewSingleProduct()}>
            View product
          </button>
        )}
      </div>
    </div>
  );
};

export default CardView;

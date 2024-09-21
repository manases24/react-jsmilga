import { useSelector } from "react-redux";
import { CartIcon } from "../icons";
import { CartRootState } from "../redux/features/cart/cartSlice";

export const Navbar = () => {
  const { amount } = useSelector((store: CartRootState) => store.cart);

  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>redux toolkit</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./components/Navbar";
import { calculateTotals, getCartItems, CartRootState, AppDispatch } from "./redux/features/cart/cartSlice";
import { ModalRootState } from "./redux/features/modal/modalSlice";
import { Modal } from "./components/Modal";
import { CartContainer } from "./components/CartContainer";

function App() {
  const { cartItems, isLoading } = useSelector((store: CartRootState) => store.cart);
  const { isOpen } = useSelector((store: ModalRootState) => store.modal);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;

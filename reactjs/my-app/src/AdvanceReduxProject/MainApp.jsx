import Cart from './Components/Cart/Cart';
import Layout from './Components/Layout/Layout';
import Products from './Components/Shop/Products';
import {useSelector} from 'react-redux'

function MainApp() {
    const CartView =useSelector((state)=> state.cartViewReducer.cartView)
    console.log(CartView)
  return (
    <Layout>
     {CartView && <Cart />}
      <Products />
    </Layout>
  );
}

export default MainApp;

import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import {authactions} from '../store/Auth'
import {  useSelector} from 'react-redux';

const Header = () => {
const auth =useSelector((state)=>state.auth.isAuth)
const dispatch=useDispatch()

const handellogout=()=>{
  dispatch(authactions.logout())
}
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth &&(<nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handellogout}>Logout</button>
          </li>
        </ul>
      </nav>)}
    </header>
  );
};

export default Header;
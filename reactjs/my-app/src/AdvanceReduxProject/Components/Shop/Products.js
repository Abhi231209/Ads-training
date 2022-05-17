import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummydata=[
  {
    id:'p1',
    title:"Javascript Book",
    discription:"This is Best javascript book",
    price:200
  },
  {
    id:'p2',
    title:"React Book",
    discription:"This is Best React book",
    price:300
  },
  {
    id:'p3',
    title:"NodeJs Book",
    discription:"This is Best NodeJs book",
    price:400
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummydata.map((items)=>(
           <ProductItem
           id={items.id}
           title={items.title}
           price={items.price}
           description={items.discription}
         />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;

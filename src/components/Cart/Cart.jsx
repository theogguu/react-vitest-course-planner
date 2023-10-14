import './Cart.css';

const Cart = ({selected}) => (
  <div className="cart">
    {
      selected.length === 0
      ? <h3>The selection is empty</h3>
      : <div>
        <ul>
        {selected.map(course => (
          <div key={`${course.term} CS ${course.number}`}>
            <li>{`${course.term} CS ${course.number}, ${course.title}`}</li>
          </div>
        ))
        }
        </ul>
        </div>
    }
  </div>
);

export default Cart;
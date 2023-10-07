import './Cart.css';

const Cart = ({selected}) => (
  <div className="cart">
    {
      selected.length === 0
      ? <h3>The selection is empty</h3>
      : <div>
        <ul>
        {selected.map(courseTermAndNumber => (
          <div key={courseTermAndNumber}>
            <li>{courseTermAndNumber}</li>
          </div>
        ))
        }
        </ul>
        </div>
    }
  </div>
);

export default Cart;
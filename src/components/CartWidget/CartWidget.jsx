
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'


const CartWidget = () => {
    
    const navigate = useNavigate()

    const { totalQuantity, } = useCart()

    return (
        <button onClick={() => navigate('/cart')}>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2.5 4.25a.75.75 0 0 1 .75-.75h.558c.95 0 1.52.639 1.845 1.233c.217.396.374.855.497 1.271A1.29 1.29 0 0 1 6.25 6h12.498c.83 0 1.43.794 1.202 1.593l-1.828 6.409a2.75 2.75 0 0 1-2.644 1.996H9.53a2.75 2.75 0 0 1-2.652-2.022l-.76-2.772l-1.26-4.248l-.001-.008c-.156-.567-.302-1.098-.52-1.494C4.128 5.069 3.96 5 3.809 5H3.25a.75.75 0 0 1-.75-.75Zm5.073 6.59l.751 2.739c.15.542.643.919 1.206.919h5.948a1.25 1.25 0 0 0 1.202-.907L18.417 7.5H6.585l.974 3.287l.014.053ZM11 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-1.5 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0Zm8.5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-1.5 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0Z" /></svg>
            {totalQuantity}
        </button>
    )
}

export default CartWidget
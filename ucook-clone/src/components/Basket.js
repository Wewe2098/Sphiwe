
import React, { useState } from 'react';
import { Offcanvas, Button, Form } from 'react-bootstrap';
import './Basket.css';

const Basket = () => {
  const [showBasket, setShowBasket] = useState(false);
  const [walletPoints, setWalletPoints] = useState(0);
  const [discountCode, setDiscountCode] = useState('');
  const [total, setTotal] = useState(0);

  const handleCheckout = () => {
    // Handle the payment process
    // Example: Display payment gateway or success message
    alert('Payment processed successfully!');
  };

  const handleApplyDiscount = () => {
    // Apply discount logic based on discountCode
    // Example: Calculate and set the total
    const discountedTotal = calculateDiscountedTotal(); // Implement this function
    setTotal(discountedTotal);
  };

  const calculateDiscountedTotal = () => {
    // Implement your discount calculation logic here
    // Return the updated total after applying the discount
    return 100; // Example value
  };

  return (
    <>

      <Offcanvas show={showBasket} onHide={() => setShowBasket(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            {/* Display items */}
          </ul>
          <Form.Group>
            <Form.Label>Use Wallet Points:</Form.Label>
            <Form.Control
              type="number"
              value={walletPoints}
              onChange={(e) => setWalletPoints(Number(e.target.value))}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Discount Code:</Form.Label>
            <Form.Control
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <Button variant="primary" onClick={handleApplyDiscount}>
              Apply Discount
            </Button>
          </Form.Group>
          <div className="total">
            Total: ${total}
          </div>
          <Button variant="success" onClick={handleCheckout}>Checkout</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Basket;

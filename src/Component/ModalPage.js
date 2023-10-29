import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateProduct } from "../features/itemSlice";

const ModalContainer = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const ModalWrapper = styled.div`
  background-color: #fefefe;
  border: 1px solid #888;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Title = styled.h2`
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-top: 5px;
`;

const Total = styled.p`
  font-weight: bold;
`;

const SaveButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
`;

const CancelButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
`;
const ModalPage = ({ open, onClose }) => {

    const editProduct = useSelector((state) => state.itemReducer.editProduct[0]);

    const dispatch = useDispatch();
    const [price, setPrice] = useState(editProduct ? editProduct.price : "");
    const [quantity, setQuantity] = useState(editProduct ? editProduct.quantity : "");
    const [productId,setProductId] = useState(editProduct ? editProduct.id : "");

    useEffect(() => {
        if (open && editProduct) {
            setPrice(editProduct.price)
            setQuantity(editProduct.quantity)
            setProductId (editProduct.id)
        }
    },[open,editProduct])

    

    if (!open || !editProduct) {
        return null
    };

    const handleProductUpdate = () => {       
        console.log(productId)
        dispatch(updateProduct({ productId, price, quantity }))
        onClose()
    }

    

    return (
        <ModalContainer open={open}>
        <ModalWrapper onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <Image src={editProduct.image} alt="Product Image" />
          <Title>Product Title</Title>
          <Label htmlFor="price">Price:</Label>
          <Input
            type="text"
            id="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Label htmlFor="quantity">Quantity:</Label>
          <Input
            type="text"
            id="quantity"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Total>Total: {price * quantity}</Total>
          <SaveButton onClick={handleProductUpdate}>Save</SaveButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ModalWrapper>
      </ModalContainer>
    );
}

export default ModalPage
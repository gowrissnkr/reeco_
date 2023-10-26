import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateProduct } from "../features/itemSlice";

const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
`

const ModalWrapper = styled.div`
max-width: 600px;
  width: 100%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
`
const Image = styled.img`
width: 250px;
object-fit: cover;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
`
const ModelRight = styled.div`
width: 100%;
cursor:pointer;
`
const CloseButton = styled.p`
position: fixed;
  top: 8px;
  right: 8px;

`

const ModalContent = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 3rem;
  padding: 1rem 2rem;
`

const ButtonContainer = styled.div`
display: flex;
padding: 1rem 1rem;
`

const Button = styled.button`
width: 100%;
  margin: .5rem;
  padding: 16px 0;
  border: 1px solid #411b57;
  background-color: #411b57;
  color: white;
  cursor:pointer;
`
const ModalPage = ({ open, onClose , setLoader}) => {

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
        setLoader(true)
        console.log(productId)
        dispatch(updateProduct({ productId, price, quantity }))
        setLoader(false)
        onClose()
    }

    

    return (
        <ModalContainer onClick={onClose}>
            <ModalWrapper
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <Image src={editProduct.images} alt='/' />
                <ModelRight>
                    <CloseButton onClick={onClose}>
                        X
                    </CloseButton>
                    <ModalContent>
                        <span>Price $<input type="text" value={price } name="price" onChange={(e) => { setPrice(e.target.value) }} /></span>
                        <span>Quantity<input type="text" value={quantity } name="quantity" onChange={(e) => { setQuantity(e.target.value) }} /></span>
                        <p>Total : {price * quantity}</p>
                    </ModalContent>
                    <ButtonContainer>
                        <Button onClick={onClose}>
                           Cancel
                        </Button>
                        <Button onClick={handleProductUpdate}>
                            Save
                        </Button>
                    </ButtonContainer>
                </ModelRight>
            </ModalWrapper>
        </ModalContainer>
    );
}

export default ModalPage
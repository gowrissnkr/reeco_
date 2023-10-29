import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { handleEditProduct, handleStatusChange } from "../features/itemSlice"
import ProductRow from "./ProductRow"
import ModalPage from "./ModalPage"



const Section = styled.section`
width : 100%;
display:flex;
justify-content:center;
margin-top:30px;

`
const Table = styled.table`
width:80%;
background-color: rgba(255,255,255,0.3);
border-collapse:collapse;
box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .1); 
`

const TableHeader = styled.thead`
display: table-header-group;
vertical-align: left;
border: 1px solid #000;
border-bottom:2px solid #000;
`

const TableBody = styled.tbody`
display: table-row-group;
vertical-align: left;
border-color: inherit;
`

const TableRow = styled.tr`
display: table-row;
vertical-align: inherit;
border-color: inherit;
`


const TableData = styled.td`
    font-size: 14px;
    color: #808080;
    line-height: 1.4;
    width: 265px;
    padding-left: 42px;
    padding-top: 18px;
    padding-bottom: 14px;
    border-bottom : 1px solid #A9A9A9
`



const ProductList = () => {
    const { item } = useSelector(state => state.itemReducer)
    const [openModal, setOpenModal] = useState(false);

    const dispatch = useDispatch()


    const handleEdit = (productId) => {
        setOpenModal(true)
        dispatch(handleEditProduct(productId))
    }


    return (
        <>
            <Section>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableData></TableData>
                            <TableData>Product Name</TableData>
                            <TableData >Brand</TableData>
                            <TableData >Price</TableData>
                            <TableData >Quantity</TableData>
                            <TableData >Total</TableData>
                            <TableData >Status</TableData>
                            <TableData></TableData>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {item?.map((product) => (
                            <ProductRow
                                key={product.id}
                                product={product}
                                statusChange={(status) => {
                                    dispatch(handleStatusChange({ id: product.id, status }));
                                }}
                                onEdit={() => handleEdit(product.id)}
                            />
                        ))}
                    </TableBody>
                </Table>
            </Section>
            <ModalPage open={openModal} onClose={() => setOpenModal(false)} />
        </>
    )
}

export default ProductList
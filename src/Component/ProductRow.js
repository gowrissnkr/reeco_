import styled from "styled-components"

const TableRow = styled.tr`
display: table-row;
vertical-align: inherit;
border-color: inherit;
`

const Image = styled.img`
    width:60px;
`

const TableData = styled.td`
    font-size: 14px;
    line-height: 1.4;
    width: 265px;
    padding-left: 42px;
    padding-top: 18px;
    padding-bottom: 14px;
    border-bottom : 1px solid #A9A9A9
`
const TableDataActions = styled.div`
display:flex;
justify-content:space-evenly;
`

const ProductRow = ({ product, statusChange, onEdit }) => {
  const { status } = product;

  const onStatusChange = (newStatus) => {
    if (newStatus === "Missing-Urgent") {
        const confirmation = window.confirm(
          "Are you sure you want to change the status to Missing-Urgent?"
        );
  
        if (confirmation) {
          statusChange(newStatus);
        }
      } else {
        statusChange(newStatus);
      }
    }

    return (
      <TableRow>
        <TableData status = {status && status}>
          <Image src={product.image} />
        </TableData>
        <TableData>{product.title}</TableData>
        <TableData>{product.description}</TableData>
        <TableData>{product.price}</TableData>
        <TableData>{product.quantity && product.quantity}</TableData>
        <TableData>{product.price * product.quantity}</TableData>
        <TableData>{product.status && product.status}</TableData>      
        <TableData>
          <TableDataActions>
            <button onClick={() => onStatusChange("Approved")}>
              <i className="fa fa-check" aria-hidden="true"></i>
            </button>
            <button onClick={() => onStatusChange("Missing-Urgent")}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <button onClick={onEdit}>Edit</button>
          </TableDataActions>
        </TableData>
      </TableRow>
    );
  };

  export default ProductRow
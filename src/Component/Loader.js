import { styled } from "styled-components";

const Loading = styled.div`
width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

`
const Loader = () => {
    return (
        <Loading></Loading>
    )
}

export default Loader
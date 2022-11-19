import styled from "styled-components";

const SaveButton = () => {
    return (
        <>
            <SaveButtonWrap>SAVE</SaveButtonWrap>
        </>
    );
};
export default SaveButton;

const SaveButtonWrap = styled.div`
    width: 6.25rem;
    height: 1.5rem;
    border-radius: 0.3125rem;
    font-size: 1.6rem;
    font-family: BAUHS93;
    font-weight: bold;
    color: rgb(102, 100, 255);
    background-color: #fff;
    transition: 0.1s;
    cursor: pointer;
    border: 2px solid rgb(102, 100, 255);
    text-align: center;
    line-height: 1.5rem;
    margin-top: 0.5rem;
    margin-right: 1rem;
    padding: 0.5rem;

    &:hover {
        color: #fff;
        background-color: rgb(102, 100, 255);
    }
`;

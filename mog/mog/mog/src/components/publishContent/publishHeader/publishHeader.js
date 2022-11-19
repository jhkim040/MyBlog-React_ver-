import styled from "styled-components";
import PublishHeaderTopLeft from "./publishHeaderTopLeft";
import PublishHeaderTopRight from "./publishHeaderTopRight";

const PublishHeader = () => {
    return (
        <>
            <PublishHeaderWrap>
                <PublishHeaderTopLeft />
                <PublishHeaderTopRight />
            </PublishHeaderWrap>
        </>
    );
};
export default PublishHeader;

const PublishHeaderWrap = styled.div`
    width: 97.6%;
    height: 3.4375rem;
    padding: 1.25rem 0.7rem 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
    left: 0;
`;

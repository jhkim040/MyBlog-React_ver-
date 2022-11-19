import styled from "styled-components";
import PublishContentWrap from "./publishContentWrap";

const PublishContainer = () => {
    return (
        <>
            <PublishContainerWrap>
                <PublishContentWrap />
            </PublishContainerWrap>
        </>
    );
};

export default PublishContainer;

const PublishContainerWrap = styled.div`
    padding-top: 9.375rem;
`;

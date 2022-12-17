import styled from "styled-components";
import PublishMainInner from "./publishMainInner";

const PublishMain = () => {
    return (
        <>
            <PublishMainWrap>
                <PublishMainInner />
            </PublishMainWrap>
        </>
    );
};
export default PublishMain;

const PublishMainWrap = styled.div`
    width: 49rem;
    /* display: flex;
    justify-content: center;
    flex-wrap: wrap; */
    margin-inline: auto;
`;

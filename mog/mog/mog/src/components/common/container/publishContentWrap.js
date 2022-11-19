import styled from "styled-components";
import PublishMain from "../../publishContent/publishMain";
import PublishMenu from "./publishMenu/publishMenu";

const PublishContentWrap = () => {
    return (
        <>
            <PublishContentBox>
                <PublishMenu />
                <PublishMain />
            </PublishContentBox>
        </>
    );
};

export default PublishContentWrap;

const PublishContentBox = styled.div`
    display: flex;
`;

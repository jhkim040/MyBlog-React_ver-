import styled from "styled-components";
import HeaderLogo from "../../common/header/headerLogo";

const PublishHeaderTopLeft = () => {
    return (
        <>
            <TopLeftMenuWrap>
                <HeaderLogo />
                <BlogName>
                    <a href="www.sogang.ac.kr">mog</a>
                    {/* "#" */}
                </BlogName>
            </TopLeftMenuWrap>
        </>
    );
};
export default PublishHeaderTopLeft;

const TopLeftMenuWrap = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const BlogName = styled.div`
    color: rgb(102, 100, 255);
    font-weight: 600;
    font-size: 1.7rem;
    margin-left: 0.5rem;
    cursor: pointer;
    & > a{
        text-decoration: none;
        color: rgb(102, 100, 255);

    }
`;

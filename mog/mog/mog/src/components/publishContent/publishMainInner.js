import { useRef } from "react";
import { useCallback } from "react";
import styled from "styled-components";

const PublishMainInner = () => {
    const textRef = useRef();
    const handleResizeHeight = useCallback(() => {
        textRef.current.style.height = textRef.current.scrollHeight + "px";
    }, []);
    return (
        <>
            <>
                <PublishWrap>
                    <PublishTitleWrap>
                        <PublishTitleBox>
                            <PublishTitle>
                                <PublishTitleInput
                                    type="text"
                                    placeholder="제목"
                                />
                            </PublishTitle>
                            <PublishSubTitle>
                                <PublishSubTitleInput
                                    type="text"
                                    placeholder="부제목"
                                />
                            </PublishSubTitle>
                        </PublishTitleBox>
                    </PublishTitleWrap>

                    <PublishContentWrap>
                        <PublishContentInput
                            ref={textRef}
                            onInput={handleResizeHeight}
                            placeholder="내용을 입력하세요."
                            oninput='this.style.height = ""; this.style.height = this.scrollHeight + "px"'
                        />
                    </PublishContentWrap>
                </PublishWrap>
            </>
        </>
    );
};
export default PublishMainInner;

const PublishWrap = styled.div`
    width: 100%;
    height: 100%;
    /* margin-top: 9.375rem; */
    /* border: 1px solid #000; */
`;
const PublishTitleWrap = styled.div`
    display: flex;
    padding: 1rem;
    /* border-bottom: 0.125rem solid rgb(102, 100, 255); */
    /* box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px; */
    /* box-shadow: 0rem 1.25rem 1.25rem -1.125rem rgb(102, 100, 255, 0.2); */
    /* box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px; */
    border-bottom: 1px solid rgb(0 0 0 / 8%);
`;
const PublishTitleBox = styled.div`
    & > div {
        display: flex;
    }
    width: 45rem;
`;
const PublishTitle = styled.div`
    font-size: 3rem;
`;
const PublishTitleInput = styled.input`
    width: 100%;
    padding: 1.875rem 0;
    border: none;
    font-size: 3rem;
    font-family: Cafe24Ssurround;
    font-weight: bold;
    &:focus {
        outline: none;
    }
`;
const PublishSubTitle = styled.div`
    font-size: 1.5rem;
    padding-block: 1rem;
`;
const PublishSubTitleInput = styled.input`
    width: 100%;
    padding: 0.875rem 0;
    border: none;
    font-size: 1.5rem;
    font-family: Cafe24Ssurround;
    font-weight: bold;
    &:focus {
        outline: none;
    }
`;

const PublishContentWrap = styled.div`
    height: 100%;
    padding: 1rem;
    /* border-bottom: 0.125rem solid rgb(102, 100, 255); */
    box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
    /* box-shadow: 0rem 1.25rem 1.25rem -1.125rem rgb(102, 100, 255, 0.2); */
`;
const PublishContentInput = styled.textarea`
    width: 100%;
    resize: none;
    border: none;
    font-size: 1rem;
    height: calc(100vh-82px);
    font-family: Cafe24Ssurround;
    &:focus {
        outline: none;
    }
`;

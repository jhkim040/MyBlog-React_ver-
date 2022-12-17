import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/context";
import PublishArticle from "./publishArticle";

const PublishMenu = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <PublishMenuBox style={{ display: state ? "none" : "block" }}>
      {/* <SidebarTitle>PublishMenu</SidebarTitle> */}
      {/* <hr /> */}
      <PublishMenuInner>
        <PublishArticle />
      </PublishMenuInner>
      {/* <hr /> */}
      {/* <EditCategoryBox>
                <input type="text" autoComplete="off" />
                <button type="button">ADD</button>
            </EditCategoryBox> */}
    </PublishMenuBox>
  );
};
export default PublishMenu;

const PublishMenuBox = styled.div`
  width: 31.25rem;
  height: calc(43vh);
  background-color: #fff;
  padding: 0.3125rem 0 0.3125rem;
  position: fixed;
  top: 5.3875rem;
  right: 1rem;
  border: 0.125rem solid rgb(102, 100, 255);
  border-radius: 0.9375rem;
  /* @media (max-width: 1100px) {
        display: none;
    } */
`;

// const SidebarTitle = styled.h2`
//     font-size: 1.125rem;
//     text-align: center;
// `;

const PublishMenuInner = styled.div`
  height: 100%;
  padding: 0 1.875rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.4375rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(102, 100, 255);
    border-radius: 0.625rem;
  }
  &::-webkit-scrollbar-track {
    background-color: lightblue;
    border-radius: 0.625rem;
    box-shadow: inset 0rem 0rem 0.3125rem white;
  }
`;
// const EditCategoryBox = styled.form`
//     margin: 0.625rem 0;
//     display: flex;
//     justify-content: center;

//     & > input {
//         width: 60%;
//         border: 0.0625rem solid rgb(102, 100, 255);
//         border-radius: 0.2rem;
//     }
//     & > button {
//         width: 30%;
//         outline: none;
//         border: none;
//         border-radius: 0.2rem;
//         background-color: rgb(102,100,255);
//         color: #fff;
//         cursor: pointer;
//     }
//     & > button:hover{
//         opacity: 0.6;
//     }
// `
// const EditWrap = styled.div`
//     display: flex;
// `;
// const Input = styled.input`
//     border: none;
//     border-bottom: 1px solid #000;
//     margin: 0.5rem;
//     margin-top: 1rem;
//     margin-left: 1rem;
//     width: 7rem;
// `;

// const Edit = styled.div`
//     color: #000;
//     cursor: pointer;
//     font-weight: 600;
//     margin-top: 1rem;
//     margin-left: 9rem;
//     position: fixed;
// `;

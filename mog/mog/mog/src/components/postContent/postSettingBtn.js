import dotsImg from "../../images/postImages/dots.png";
import styled from "styled-components";

const PostSettingBtn = () => {
  return (
    <>
      <SettingBtn />
    </>
  );
};
export default PostSettingBtn;

const SettingBtn = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background: url(${dotsImg}) no-repeat center;
  background-size: cover;
`;

import styled from "styled-components";

const LoginMainLogo = () => {
  return (
    <>
      <SectionLogo>
        <a href="#">
          <MogTextLogo>mog</MogTextLogo>
        </a>
      </SectionLogo>
    </>
  );
};
export default LoginMainLogo;

const SectionLogo = styled.div`
  text-align: center;
`;

const MogTextLogo = styled.div`
  font-family: "BAUHS93";
  font-size: 70px;
  font-weight: 700;
  color: #fcc7e1;
  /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
`;

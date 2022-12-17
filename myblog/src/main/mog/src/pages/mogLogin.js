import LoginWrapper from "../components/loginContent/loginWrapper";
import LoginMain from "../components/loginContent/loginMain/loginMain";
import LoginHeaderLogo from "../components/loginContent/loginHeader/loginHeaderLogo";
import WrapImg from "../images/loginImages/bg-cloud.png";

const MogLogin = () => {
  return (
    <>
      <LoginHeaderLogo />
      <LoginMain />
      <LoginWrapper />
    </>
  );
};
export default MogLogin;

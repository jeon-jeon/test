import BarIcon from "./BarIcon";
import EarthIcon from "./EarthIcon";
import LoginIcon from "./LoginIcon";
import Logo from "./Logo";
import SearchIcon from "./SearchIcon";

const Login = () => {
  const containerCss: React.CSSProperties = {
    padding: "10px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const serchBoxCss = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    borderRadius: "30px",
    padding: "10px 30px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
  };

  const textCss: React.CSSProperties = {
    color: "#222222",
    padding: "5px",
    fontSize: "13px",
  };
  const textCss2: React.CSSProperties = {
    color: "#6a6a6a",
    padding: "5px",
    fontSize: "13px",
  };

  const searchCircle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "9999px",
    backgroundColor: "#FF385C",
    width: "30px",
    height: "30px",
  };

  const rightBox = { display: "flex", gap: "10px", alignItems: "center" };

  const loginBoxCss = {
    padding: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "40px",
    border: "1px solid #6a6a6a",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    color: "#6a6a6a",
  };

  return (
    <div style={containerCss}>
      <Logo></Logo>
      <div style={serchBoxCss}>
        <span style={textCss}>어디든지</span>
        <span style={textCss}>언제든 일주일</span>
        <span style={textCss2}>게스트 추가</span>
        <div style={searchCircle}>
          <SearchIcon></SearchIcon>
        </div>
      </div>
      <div style={rightBox}>
        <div style={textCss}>당신의 공간을 에어비앤비하세요</div>
        <EarthIcon></EarthIcon>
        <div style={loginBoxCss}>
          <BarIcon></BarIcon>
          <LoginIcon></LoginIcon>
        </div>
      </div>
    </div>
  );
};

export default Login;

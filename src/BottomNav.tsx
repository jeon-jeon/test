import BottomContent, { BottomContentProps } from "./BottomContent";
import { bottomNav } from "./constants/dataNav";

const BottomNav = () => {
  const bottomNavBox: React.CSSProperties = {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "48px 40px",
  };

  const title: React.CSSProperties = {
    padding: "10px 0px",
    fontSize: "20px",
    color: "#222222",
  };
  const subject: React.CSSProperties = {
    display: "flex",
    gap: "30px",
    fontSize: "13px",
    color: "#6a6a6a",
    borderBottom: "1px solid #dddddd",
    padding: "10px 0px",
  };

  const content: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "20px",
    paddingTop: "20px",
    fontSize: "13px",
  };

  return (
    <section style={bottomNavBox}>
      <div style={title}>다음 여행을 위한 추천 여행지</div>
      <ul style={subject}>
        <li>인기</li>
        <li>예술 및 문화</li>
        <li>야외</li>
        <li>산맥</li>
        <li>해변</li>
        <li>카테고리</li>
        <li>즐길 거리</li>
      </ul>
      <div style={content}>
        {bottomNav.map((v) => (
          <BottomContent {...v}></BottomContent>
        ))}
      </div>
    </section>
  );
};

export default BottomNav;

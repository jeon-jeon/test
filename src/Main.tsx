import { middleList, topList } from "./constants/data";
import Contents, { ContentsProps } from "./Contents";

export type MainType = ContentsProps;

const Main = () => {
  const mainCss: React.CSSProperties = {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    paddingTop: "150px",
  };

  const contentBox: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "10px",
  };

  return (
    <section style={mainCss}>
      <div style={contentBox}>
        {topList.map((v) => (
          <Contents
            imgSrc={v.imgSrc}
            title={v.title}
            host={v.host}
            status={v.status}
          ></Contents>
        ))}
      </div>
      <div style={{ fontSize: "30px", padding: "10px 0px" }}>이전 경험</div>
      <div style={contentBox}>
        {middleList.map((v) => (
          <Contents
            imgSrc={v.imgSrc}
            title={v.title}
            host={v.host}
            status={v.status}
          ></Contents>
        ))}
      </div>
    </section>
  );
};

export default Main;

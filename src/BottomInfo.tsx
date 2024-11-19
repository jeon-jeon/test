const BottomInfo = () => {
  const infoContainer: React.CSSProperties = {
    borderTop: "1px solid #dddddd",
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "48px 40px",
  };
  const infoBox: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    fontSize: "13px",
    color: "#222222",
  };
  return (
    <section style={infoContainer}>
      <article style={infoBox}>
        <ul>
          <li>에어비앤비 지원</li>
          <li>도움말 센터</li>
          <li>에어커버</li>
          <li>차별반대</li>
          <li>장애인 지원</li>
          <li>예약 취소 옵션</li>
          <li>이웃 민원 신고</li>
        </ul>
        <ul>
          <li>호스팅</li>
          <li>당신의 공간을 에어비앤비하세요</li>
          <li>호스트를 위한 에어커버</li>
          <li>호스팅 자료</li>
          <li>커뮤니티 포럼</li>
          <li>책임감 있는 호스팅</li>
          <li>무료 호스팅 클래스 참여하기</li>
          <li>공공 호스트 찾기</li>
        </ul>
        <ul>
          <li>에어비앤비</li>
          <li>뉴스룸</li>
          <li>새로운 기능</li>
          <li>채용정보</li>
          <li>투자자 정보</li>
          <li>Airbob.org 긴급 숙소</li>
        </ul>
      </article>
    </section>
  );
};

export default BottomInfo;

import { VERSION } from '~datas/data';

import { HeaderStyled } from './styled';

const Header = () => {
  return (
    <HeaderStyled>
      <div className="left">
        <span className="logo">바디핏</span>
        {/* <span className="bar">_</span> */}
        {/* <span className="version">버전 {VERSION}</span> */}
        <span className="version">식단 기록하기</span>
      </div>
    </HeaderStyled>
  );
};

export default Header;

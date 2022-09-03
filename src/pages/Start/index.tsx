import { useState } from 'react';

import styled from 'styled-components';

import Header from '~components/Header';
import { TYPE } from '~datas/data';

import { StartPageStyled } from './styled';

interface StartPageProps {}

const StartPage = ({}: StartPageProps) => {
  const [state, setState] = useState({
    type: '',
  });

  return (
    <>
      <Header />

      <StartPageStyled>
        <div className="types">
          {TYPE.map(v => (
            <div className="type" key={v}>
              {v}
            </div>
          ))}
        </div>
      </StartPageStyled>
    </>
  );
};

export default StartPage;

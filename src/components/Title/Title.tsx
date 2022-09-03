import { ReactNode } from 'react';

import { TitleStyled } from './styled';

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <TitleStyled>{children}</TitleStyled>;
};

export default Title;

import React from 'react';
import { Loading as LoadingComponent } from './styles';

const Loading = ({
  style = {},
}: {
  style?: React.CSSProperties;
}): JSX.Element => {
  return <LoadingComponent style={style} />;
};

export default Loading;

import * as React from 'react';
import styled from 'styled-components';

import App from 'components/App';

const blue = 'blue';
const white = 'white';

const Styled = styled.div`
  background-color: ${blue};
  color: ${white};
`;

const AppContainer = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Styled />;
  }
};

export default AppContainer;

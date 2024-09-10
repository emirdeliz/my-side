import styled from 'styled-components';
import { FormGroup } from '../FormGroup/FormGroup.style';
import { getMargin } from '@theme';

export const Container = styled.form`
  width: 100%;
  ${(props) => getMargin(props)}

  ${FormGroup} {
    margin-bottom: ${({ theme }) => theme.margin.Nm};
  }
`;

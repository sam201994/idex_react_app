import styled from 'styled-components';

export const GreyText = styled.div`
  color: #d3d3d3;
  font-size: ${props => `${props.size}px`};
  font-weight: bold;
`;
export const BlackText = styled.div`
  color: #262626;
  font-size: ${props => `${props.size}px`};
  font-weight: bold;
`;
export const BlueText = styled.div`
  color: #0066ff;
  font-size: ${props => `${props.size}px`};
  font-weight: bold;
`;

export const WhiteText = styled.div`
  color: #ffffff;
  font-size: ${props => `${props.size}px`};
`;

export const DarkGrey = styled.div`
  color: #828282;
  font-size: ${props => `${props.size}px`};
`;

export const InputBox = styled.div`
  margin-top: 5px;
  input {
    color: #262626;
    font-size: ${props => `${props.size}px`};
    border: 1px solid #f2f2f2;
  }
`;

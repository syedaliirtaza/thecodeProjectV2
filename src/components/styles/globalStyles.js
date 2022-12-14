import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--primary);
  
  
  width: 100%;
  min-height: 100vh;

`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  
  width: 100%;
  
  
`;

export const TextTitle = styled.p`
  color: #1a1a1a;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
  @media (max-width: 1480px) {
    font-size: 22px;
  }
  @media (max-width: 780px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const TextSubTitle = styled.p`
  color: #1a1a1a;
  font-size: 18px;
  line-height: 1.6;
`;

export const TextDescription = styled.p`
  color: #1a1a1a;
  font-size: 16px;
  line-height: 1.6;
  @media (max-width: 2480px) {
    font-size: 20px;
  }
  @media (max-width: 1480px) {
    font-size: 20px;
  }
  @media (max-width: 780px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;

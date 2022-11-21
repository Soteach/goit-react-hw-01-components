import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  width: 360px;
  box-shadow: 8px 8px 20px -6px rgba(212, 175, 55, 0.6);
  margin: auto;
  margin-bottom: 64px;
`;

export const StatName = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin: 0;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.statBkgColor};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-left: 0;
`;

export const StatItem = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${props => props.color};
`;

export const Label = styled.span`
  text-align: center;
`;

export const Percentage = styled.span`
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  font-size: 16px;
`;

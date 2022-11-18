import styled from '@emotion/styled';

export const Card = styled.div`
  margin: auto;
  margin-top: 64px;
  margin-bottom: 64px;
  max-width: 360px;
  border-radius: 5px;
  position: relative;
  box-shadow: 1px 1px 2px 2px rgb(163, 160, 160);
`;

export const Avatar = styled.img`
  border: 3px solid gray;
  border-radius: 50%;
  width: 30%;
  margin-top: 16px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  background-color: ${props => props.theme.colors.descrBkgColor};
  border-radius: 5px;
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.primaryText};
  text-align: center;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Tag = styled.p`
  text-align: center;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.green};
`;

export const Location = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.gray};
  margin-bottom: 8px;
`;

export const Stats = styled.ul`
  color: azure;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #3e89b1;
  padding: 16px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid gray;
`;

export const Quantity = styled.span`
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  font-size: 16px;
`;

export const Value = styled.span`
  text-align: center;
  line-height: 1.5;
  font-size: 16px;
`;

import styled from '@emotion/styled';

export const FriendL = styled.ul`
  width: 360px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;
  padding: 0;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 1px 1px 2px 2px rgb(209, 204, 204);
  margin-bottom: 8px;
`;

export const Header = styled.h2`
  text-transform: uppercase;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const Chip = styled.span`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${props => {
    switch (props.eventType) {
      case 'isOnline':
        return `#4caf50`;
      case 'IsOffline':
        return `red`;
      default:
        return '#000';
    }
  }};
`;

export const Avatar = styled.img`
  margin: 0px 10px;
  border: 2px solid orange;
  border-radius: 50%;
`;

// .avatar {
//     margin: 0px 10px;
// }

// .name {
//     margin: 0px 10px;
// }

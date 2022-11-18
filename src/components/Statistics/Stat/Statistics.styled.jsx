import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 360px;
  box-shadow: 1px 1px 2px 2px rgb(209, 204, 204);
  margin: auto;
  margin-bottom: 64px;
`;

export const StatName = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin: 0;
  border-bottom: 2px solid red;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cac4c4;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-left: 0;
`;

export const StatItem = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 16px;
  border: 1px solid gray;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

// .item {
//     display: flex;
//     width: 100%;
//     flex-direction: column;
//     padding: 16px;
//     border: 1px solid gray;
// }

// .item:first-child {
//     background-color: rgb(23, 207, 207);
//     border-left: none;
//     border-bottom-left-radius: 20px;
// }

// .item:last-child {
//     background-color: rgb(104, 194, 104);
//     border-bottom-right-radius: 20px;
// }

// .item:nth-child(2) {
//     background-color: rgb(164, 84, 164);
// }

// .item:nth-child(4) {
//     background-color: rgb(159, 119, 45);
//     border-right: none;

// }

// .label {
//     text-align: center;
// }

// .percentage {
//     font-weight: bold;
//     text-align: center;
//     line-height: 1.5;
//     font-size: 16px;
// }

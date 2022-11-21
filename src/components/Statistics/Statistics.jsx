import PropTypes from 'prop-types';
import { getRandomColor } from '../../utils/getRandomColor';
import {
  Card,
  StatName,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

function Statistics({ stats }) {
  return (
    <>
      <Card>
        <StatName>Upload stats</StatName>
        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <StatItem key={id} color={getRandomColor()}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </StatItem>
          ))}
        </StatList>
      </Card>
    </>
  );
}

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};

import PropTypes from 'prop-types';
import { Card, StatName, StatList, StatItem } from './Statistics.styled';

function Statistics({ stats }) {
  return (
    <>
      <Card>
        <StatName>Upload stats</StatName>

        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <StatItem key={id}>
              <span class="label">{label}</span>
              <span class="percentage">{percentage}</span>
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

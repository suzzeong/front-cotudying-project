import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CommonDatePicker = ({ selected, onChange, minDate }) => {
  return (
    <StDatePicker selected={selected} onChange={onChange} minDate={minDate} />
  );
};

export default CommonDatePicker;

const StDatePicker = styled(DatePicker)`
  /* width: 200px; */
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 1rem 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:active {
    border-color: #86b7fe;
  }
`;

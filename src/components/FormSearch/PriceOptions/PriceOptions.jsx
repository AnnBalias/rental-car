import { components } from 'react-select';

export const ToPriceOptions = (props) => {
  const { data } = props;
  return (
    <components.SingleValue {...props}>
      {data.prefix ? `${data.prefix}${data.label}` : data.label}
    </components.SingleValue>
  );
};

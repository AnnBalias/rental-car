export const selectStyle = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '14px',
    backgroundColor: '#F7F7FB',
    border: state.isFocused ? '1px solid #121417' : '1px solid transparent',
    boxShadow: state.isFocused ? '0px 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
    padding: '2px 4px',
    minHeight: '48px',
    fontSize: '16px',
    fontWeight: 400,
    color: '#121417',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#121417',
    fontWeight: 500,
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '14px',
    backgroundColor: '#FFFFFF',
    marginTop: '4px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    zIndex: 20,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'rgba(18, 20, 23, 0.05)' : '#FFFFFF',
    color: '#121417',
    padding: '10px 16px',
    cursor: 'pointer',
    fontWeight: 400,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#121417',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#121417',
  }),
};

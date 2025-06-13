import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './DateSelector.css';

export const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="date-picker-wrapper">
      <DatePicker
        id="date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Оберіть дату"
        className="custom-datepicker"
        minDate={new Date()}
        isClearable
        showPopperArrow={false}
      />
    </div>
  );
};

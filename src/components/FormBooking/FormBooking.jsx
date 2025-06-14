import { useState } from 'react';
import DatePicker from 'react-datepicker';
import './datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import css from './FormBooking.module.css';

export const FormBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    data: selectedDate,
    comment: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (
      !/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]{2,32}$/.test(formData.name.trim())
    ) {
      newErrors.name = 'Name must be 2–32 letters, no numbers';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = 'Invalid email format';
    }

    if (!selectedDate) {
      newErrors.date = 'Date is required';
    }

    if (formData.comment.length > 160) {
      newErrors.comment = 'Comment must be 160 characters or less';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData((prev) => ({ ...prev, data: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Form data:', formData);

      setFormData({
        name: '',
        email: '',
        data: new Date(),
        comment: '',
      });

      setSuccessMessage('Booking successful! We will contact you soon.');

      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }
  };

  return (
    <div className={css.formBox}>
      <h3 className={css.formTitle}>Book your car now</h3>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputBox}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={css.formInput}
            placeholder="Name*"
          />
          {errors.name && <p className={css.error}>{errors.name}</p>}
        </div>

        <div className={css.inputBox}>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={css.formInput}
            placeholder="Email*"
          />
          {errors.email && <p className={css.error}>{errors.email}</p>}
        </div>

        <div className={css.inputBox}>
          <DatePicker
            id="date"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Оберіть дату"
            className="custom-datepicker"
            minDate={new Date()}
            isClearable
            showPopperArrow={false}
          />
          {errors.date && <p className={css.error}>{errors.date}</p>}
        </div>

        <div className={css.inputBox}>
          <textarea
            name="comment"
            value={formData.comment}
            maxLength={160}
            onChange={handleInputChange}
            className={css.formTextAr}
            placeholder="Comment"
          />
          {errors.comment && <p className={css.error}>{errors.comment}</p>}
        </div>

        <button type="submit" className={css.send}>
          Send
        </button>
        {successMessage && <p className={css.success}>{successMessage}</p>}
      </form>
    </div>
  );
};

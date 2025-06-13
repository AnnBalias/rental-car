import { useState } from 'react';
import { DateSelector } from '../DatePicker/DatePicker';
import css from './FormBooking.module.css';

export const FormBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Ім'я: 2-32 символи, тільки літери
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (
      !/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]{2,32}$/.test(formData.name.trim())
    ) {
      newErrors.name = 'Name must be 2–32 letters, no numbers';
    }

    // Email: стандартна валідація
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = 'Invalid email format';
    }

    // Коментар: необов’язкове, але максимум 160 символів
    if (formData.comment.length > 160) {
      newErrors.comment = 'Comment must be 160 characters or less';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Form data:', formData);
      // TODO: відправити дані
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
            onChange={handleChange}
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
            onChange={handleChange}
            className={css.formInput}
            placeholder="Email*"
          />
          {errors.email && <p className={css.error}>{errors.email}</p>}
        </div>

        <DateSelector />
        <div className={css.inputBox}>
          <textarea
            name="comment"
            value={formData.comment}
            maxLength={160}
            onChange={handleChange}
            className={css.formTextAr}
            placeholder="Comment"
          />
          {errors.comment && <p className={css.error}>{errors.comment}</p>}
        </div>

        <button type="submit" className={css.send}>
          Send
        </button>
      </form>
    </div>
  );
};
// 160

import css from './FormBooking.module.css';

export const FormBooking = () => {
  return (
    <div className={css.formBox}>
      <h3 className={css.formTitle}>Book your car now</h3>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <textarea type="text" />
        <button type="submit" className={css.send}>
          Send
        </button>
      </form>
    </div>
  );
};

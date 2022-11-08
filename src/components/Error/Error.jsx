import "./style.scss";

const Error = ({ errorText }) => {
  return (
      <p className="error-text">Произошла ошибка... {errorText}</p>
  );
};

export default Error;

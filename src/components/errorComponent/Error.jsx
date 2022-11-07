import "./style.scss";

const Error = ({ errorText }) => {
  return (
    <div>
      <p className="error-text">Произошла ошибка... {errorText}</p>
    </div>
  );
};

export default Error;

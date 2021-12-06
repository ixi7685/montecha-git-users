import "./Result.css";

const ResultButton = ({ title, onClick }) => {
  const clickHandler = () => {
    onClick();
  };

  return (
    <div>
      <div className="user__click__message">* click on  the result</div>
      
      <div onClick={clickHandler} className="user_search__result_button">
        {title}
      </div>
    </div>
  );
};

export default ResultButton;

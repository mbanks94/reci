interface IButton {
  className?: string;
  onClick: () => void;
  text?: string;
}

export const Button = ({ className, onClick, text }: IButton) => {
  return (
    <h3 className={`btn ${className}`} onClick={onClick}>
      {text}
    </h3>
  );
};

export const AddButton = ({ text, onClick }: IButton) => {
  return (
    <div className="add-btn-container">
      <Button
        className="add-btn"
        text={text ?? "Add a recipe"}
        onClick={onClick}
      />
    </div>
  );
};

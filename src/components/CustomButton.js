const CustomButton = (props) => {
  const { text, onClick, className, style, type } = props;
  return (
    <button type={type} style={style} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;

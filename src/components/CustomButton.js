const CustomButton = (props) => {
  const { text, onClick, className, style } = props;
  return (
    <button style={style} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;

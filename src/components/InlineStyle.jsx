export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #"
  };
  const titleStyle = {};
  const buttonStyle = {};
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};

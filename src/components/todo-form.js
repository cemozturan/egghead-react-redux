import React from 'react';

export default (props) => {
  const {currentTodo} = props;
  const handleInputChange = (evt) => {
    const val = evt.target.value;
    props.changeCurrent(val);
  }

  return (
    <form>
      <input
        type="text"
        onChange={handleInputChange}
        value={currentTodo} />
    </form>
  );
}

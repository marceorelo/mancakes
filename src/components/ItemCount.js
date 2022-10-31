import React, { useState } from 'react';
function ItemCount() {
  let stock = 15;
  const [count, setCount] = useState(0);
  function handleClickMas () {
    if (count < stock) {
    setCount(count + 1)
    }
  }
  function handleClickMenos () {
    if (count > 0) {
    setCount(count - 1)
    }
  }
  function onAdd () {
    alert(count);
  }
  return (
    <div>
      <button onClick={handleClickMas}> + </button>  {count}  <button onClick={handleClickMenos}> - </button>
    </div>
  );
}

export default ItemCount;
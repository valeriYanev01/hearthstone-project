function SelectType({ state, array, customRef, children }) {
  return (
    <>
      {children}
      <select ref={customRef} onChange={(e) => state(e.target.value)}>
        {array.map((element) => (
          <option key={element}>{element}</option>
        ))}
      </select>
    </>
  );
}

export default SelectType;

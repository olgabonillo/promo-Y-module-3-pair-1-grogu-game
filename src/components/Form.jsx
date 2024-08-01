function Form({ name, onChangeName }) {
  const handleChange = (ev) => {
    onChangeName(ev.target.value);
  };
  

  return (
    <form className="form">
      <label className="label" htmlFor="name">
        Introduce tu nombre para jugar
      </label>
      <input
        className="input-form"
        type="text"
        placeholder="Tu nombre"
        onChange={handleChange}
        value={name}
      ></input>
    </form>
  );
}



export default Form;

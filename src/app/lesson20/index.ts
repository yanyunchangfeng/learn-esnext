{
  const validateValue = (value) => {
    console.log(value);
  };
  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      let target = event.target;
      validateValue(target.value);
    }
  };
  document.addEventListener("keypress", handleKeypress);
}

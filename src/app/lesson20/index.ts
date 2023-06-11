{
  const validateValue = (value: any) => {
    console.log(value);
  };
  const handleKeypress = (event: KeyboardEvent) => {
    if (event.keyCode === 13) {
      let target: any = event.target;
      validateValue(target.value);
    }
  };
  document.addEventListener("keypress", handleKeypress);
}

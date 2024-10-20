export function MouseClicker() {
  function handler(event) {
    console.log(event.target.name);
  }
  function imgHandler(event) {
    event.stopPropagation();
    console.log(event.target.src);
  }
  return (
    <>
      <button name="one" onClick={handler}>
        Click me!
      </button>
      <button name="two" onClick={handler}>
        <img src="./gino" width={24} height={24} onClick={imgHandler} />
        Click me!
      </button>
    </>
  );
}
//the name of the button is not printed when the img is clicked because I used event.target and not event.currentTarget

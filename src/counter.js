export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `
      <cps-icon slot="prefix" name="info"></cps-icon>
      Count is <b>${counter}</b>
    `;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

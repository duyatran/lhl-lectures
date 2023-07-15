function BadCounter() {
  let count = 0;

  return (
    <section>
      <h2>Counter component</h2>
      <p>Counter has been clicked {count} times.</p>
      <button onClick={() => count++}>Increment!</button>
    </section>
  )
}

export default BadCounter;
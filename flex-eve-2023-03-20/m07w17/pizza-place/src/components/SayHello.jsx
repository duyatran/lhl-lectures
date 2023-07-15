function SayHello(props) {
  return <p>Hello world, {props?.name || "human"}</p>;
}

export default SayHello;

// Non-React function
// function SayHello(props) {
//   return `Hello world, ${props.name}`;
// }

// console.log(SayHello({ name: "Irina" }))
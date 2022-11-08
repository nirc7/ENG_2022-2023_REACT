
export default function FCStudent(props) {

  let grade = props.grade;
  if (90 < props.grade) {
    grade = props.grade + 2
  }

  //props.grade = 200; // ERROR READ ONLY!!!
  console.log(props.name);

  function btnAddOne() {
    grade++;
    console.log(grade);
  }

  function chnTxt(eventArgs) {
    console.log(eventArgs.target.value);
  }

  return (
    <div>
      id= {props.id} <br />
      name = {props.name} <br />
      grade  = {grade} <br />
      <button onClick={btnAddOne}>add one</button>
      <input type="text" onChange={chnTxt} />
    </div>
  );
}
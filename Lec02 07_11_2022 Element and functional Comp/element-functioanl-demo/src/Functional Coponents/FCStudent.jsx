

export default function FCStudent(props) {

  let num = 27;
  num++;
  console.log(num);
  num = props.grade + 5;
  console.log(num);
  //props.grade = 200; //ERROR READ ONLY!!!

  function btnAddOne() {
    num++;
    console.log(num);
  }

  if (80 < num) {
    return (
      <div style={{
        color: 'red', border: '2px solid black',
        borderRadius: 15, padding: 10, margin: 10, fontSize: 40
      }}>
        <div>Student</div>
        id = {props.id} <br />
        name= {props.name} <br />
        grade = {props.grade} <br />
        num = {num} <br />
        <button onClick={btnAddOne}>add one</button>
      </div>
    );
  }
  else {
    return (
      <div>not over 80!</div>
    );
  }

}
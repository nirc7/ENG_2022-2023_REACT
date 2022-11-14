
export default function FCStudent(props) {

  let bonus = props.grade;
  bonus++;

  function btnAdd2Bonus() {
    console.log(bonus);
    bonus++;
  }

  // function stam(){
  //   btnAdd2Bonus;
  // }
  
  return (
    <div style={{ border: '2px dashed green', padding: 10 }}>
      <div>Student</div>
      <button onClick={btnAdd2Bonus} >Add 2 bonus</button> <br />
      id={props.id} <br />
      name={props.name} <br />
      grade  ={props.grade} <br />
      bonus = {bonus}
    </div>
  );
}
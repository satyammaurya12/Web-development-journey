import "./App.css";
function StudentCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p> {props.course} </p>
      <p>{props.city}</p>
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <h1> Student Profiles</h1>
      <div className="cards">
        <StudentCard
          name="Satyam"
          course="BCA"
          city="Pratapgarh"
        />
        <StudentCard
          name="Rudra"
          course="BCA"
          city="Ayodhya"
        />
        <StudentCard
          name="Naimish"
          course="BCA"
          city="Hardoi"
        />
        <StudentCard
          name="Jitu"
          course="BCA"
          city="Azamgarh"
        />
      </div>
    </div>
  );
}
export default App;

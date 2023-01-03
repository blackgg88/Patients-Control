import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientList";
import { useEffect, useState } from "react";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const getLocalStorage = () => {
    const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? [];
    if (patientsLS.length) setPatients(patientsLS);
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    setPatients([...patients.filter((patient) => patient.id !== id)]);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patientEdit={patient}
          setPatientEdit={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;

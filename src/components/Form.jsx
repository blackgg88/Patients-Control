import { useState, useEffect } from "react";

const Form = ({ patients, setPatients, patientEdit, setPatientEdit }) => {
  const [patient, setPatient] = useState({
    name: "",
    owner: "",
    email: "",
    register: "",
    symptom: "",
  });

  useEffect(() => {
    if (Object.keys(patientEdit).length) setPatient(patientEdit);
  }, [patientEdit]);

  const [error, setError] = useState(false);

  const handleInput = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);
    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !patient.name ||
      !patient.owner ||
      !patient.email ||
      !patient.register ||
      !patient.symptom
    ) {
      console.log("Missing data");
      setError(true);
      return;
    }

    setError(false);

    const newPatient = {
      name: patient.name,
      owner: patient.owner,
      email: patient.email,
      register: patient.register,
      symptom: patient.symptom,
    };

    if (patientEdit.id) {
      newPatient.id = patientEdit.id;
      const patientsUpdated = patients.map((patient) =>
        patient.id === newPatient.id ? newPatient : patient
      );

      setPatients(patientsUpdated);
      setPatientEdit({});
    } else {
      newPatient.id = generateId();
      setPatients([...patients, newPatient]);
    }

    setPatient({
      name: "",
      owner: "",
      email: "",
      register: "",
      symptom: "",
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-center text-2xl">Patient Follow-up</h2>

      <p className="text-base mt-5 text-center mb-10">
        Add Patient and{" "}
        <span className="text-indigo-700 font-bold">Manage</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl py-10 px-5 mb-5"
      >
        {error && (
          <div className="bg-red-800 text-white font-bold text-center p-3 uppercase mb-4 rounded-md">
            <p>All fields are required</p>
          </div>
        )}

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Pet Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={patient.name}
            onChange={handleInput}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner Name
          </label>

          <input
            id="owner"
            type="text"
            name="owner"
            placeholder="Owner Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={patient.owner}
            onChange={handleInput}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={patient.email}
            onChange={handleInput}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="register"
            className="block text-gray-700 uppercase font-bold"
          >
            Discharge Date
          </label>

          <input
            id="register"
            type="date"
            name="register"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={patient.register}
            onChange={handleInput}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptom"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptom
          </label>

          <textarea
            id="symptom"
            type="date"
            name="symptom"
            placeholder="Describe the symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={patient.symptom}
            onChange={handleInput}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-700 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-md"
          value={patientEdit.id ? "edit patient" : "add patient"}
        />
      </form>
    </div>
  );
};

export default Form;

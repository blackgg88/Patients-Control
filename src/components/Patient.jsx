const Patient = ({ patient, setPatient, deletePatient }) => {
  const { id, name, owner, email, register, symptom } = patient;

  const handleDelete = () => {
    const response = confirm(`Do you want to delete the patient: ${name}?`);

    if (response) {
      deletePatient(id);
    }
  };
  return (
    <div className="m-5 bg-white shadow-md px-5 py-7 rounded-xl">
      <p className="font-bold text-gray-700 uppercase mb-4">
        Pet Name: <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-4">
        Owner: <span className="font-normal normal-case">{owner}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-4">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-4">
        Discharge Date:{" "}
        <span className="font-normal normal-case">{register}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-4">
        Symptom: <span className="font-normal normal-case">{symptom}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          onClick={() => {
            setPatient(patient);
          }}
          className="py-2 px-10 bg-indigo-700 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="py-2 px-10 bg-red-700 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;

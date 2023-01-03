import Patient from "./Patient";

const PatientList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      {patients.length ? (
        <>
          <h2 className="font-black text-center text-2xl">Patient List</h2>

          <p className="text-base mt-5 mb-5 text-center">
            Manage your{" "}
            <span className="text-indigo-700 font-bold">
              appointments and patients
            </span>
          </p>
          <div className="md:h-screen md:overflow-y-scroll">
            {patients.map((patient) => (
              <Patient
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl text-center">No patients</h2>
          <p className="text-base mt-5 mb-10 text-center">
            Start adding patients {""}
            <span className="text-indigo-700 font-bold ">
              and they will show up here
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;

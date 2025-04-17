import { usePatient } from "../store";
import PatientDetails from "./PatientDetails";
export default function PatientsList() {
  const patients = usePatient((state) => state.patients);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className=" font-black text-3xl text-center capitalize">
            listado de pacientes
          </h2>

          <p className="text-xl capitalize mt-5 mb-10 text-center">
            administra {""}
            <span className="text-indigo-600 font-bold">
              {" "}
              pacientes y citas{" "}
            </span>
          </p>

            {
                patients.map( patient => (
                    <PatientDetails
                        key={patient.id} 
                        patient={patient} 
                    />
                ))
            }

        </>
      ) : (
        <>
          <h2 className=" font-black text-3xl text-center capitalize">
            no existe ningun paciente
          </h2>

          <p className="text-xl capitalize mt-5 mb-10 text-center">
            comienza {""}
            <span className="text-indigo-600 font-bold">
              {" "}
              creando un nuevo registro{" "}
            </span>

            y se mostrara en este espacio
          </p>
        </>
      )}
    </div>
  );
}

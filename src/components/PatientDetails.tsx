import { usePatient } from "../store";
import type { Patient } from "../types";
import PatientItem from "./PatientItem";
import { toast } from "react-toastify";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
    
  const {id, name, caretaker, date, email, symptoms } = patient;
  const { deletePatient, getPatientById } = usePatient()

  const handleDelete = ( id: Patient["id"]) => {

    deletePatient( id )
    toast.error('Paciente Eliminado Correctamente', {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          progress: undefined,
          theme: "light",
          });
  }
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientItem label='nombre' value={name}/>
        <PatientItem label='propietario' value={caretaker}/>
        <PatientItem label='fecha de ingreso' value={date.toString()}/>
        <PatientItem label='email' value={email}/>
        <PatientItem label='sintomas' value={symptoms}/>

        <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 uppercase py-2 px-10 cursor-pointer transition-all text-white font-bold rounded-md"
            onClick={ () => { getPatientById( id ) } }
          >
            Editar
          </button>

          <button
            type="button"
            className="bg-red-600 hover:bg-red-800 uppercase py-2 px-10 cursor-pointer transition-all text-white font-bold rounded-md"
            onClick={ () => { handleDelete( id ) }}
          >
            eliminar
          </button>
        </div>
    </div>
  );
}

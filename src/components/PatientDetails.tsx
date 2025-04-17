import type { Patient } from "../types";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
    const {name, caretaker, date, email, symptoms } = patient;
  return (
    <div>
        <p>{name}</p>
        <p>{caretaker}</p>
        <p>{email}</p>
        <p>{date.toString()}</p>
        <p>{caretaker}</p>
        <p>{symptoms}</p>
    </div>
  );
}

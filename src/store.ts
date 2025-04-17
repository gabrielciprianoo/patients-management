import { create } from "zustand";
import type { DraftPatient, Patient } from "./types";
import { v4 as uuid } from "uuid";

type PatientState = {
  patients: Patient[];
  addPatient: (date: DraftPatient) => void;
};

const createPatient = (data: DraftPatient): Patient => {
  return { ...data, id: uuid() };
};

export const usePatient = create<PatientState>((set) => ({
  patients: [],
  addPatient: (data) => {
    const newPatient = createPatient(data);

    set((state) => ({
      patients: [...state.patients, newPatient],
    }));
  },
}));

import { create } from "zustand";
import type { DraftPatient, Patient } from "./types";
import { v4 as uuid } from "uuid";
import { devtools } from "zustand/middleware";

type PatientState = {
  patients: Patient[];
  activeId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
  updatePatient: (data: DraftPatient) => void;
};

const createPatient = (data: DraftPatient): Patient => {
  return { ...data, id: uuid() };
};

export const usePatient = create<PatientState>()(
  devtools((set) => ({
    patients: [],
    activeId: "",
    addPatient: (data) => {
      const newPatient = createPatient(data);

      set((state) => ({
        patients: [...state.patients, newPatient],
      }));
    },

    deletePatient: (id) => {
      set((state) => ({
        patients: state.patients.filter((patient) => patient.id !== id),
      }));
    },

    getPatientById: (id) => {
      set(() => ({
        activeId: id,
      }));
    },

    updatePatient: (data) => {
      set((state) => ({
        patients: state.patients.map((patient) =>
          patient.id == state.activeId ? { id: patient.id, ...data } : patient
        ), 
        activeId: ''
      }));
    },
  }))
);

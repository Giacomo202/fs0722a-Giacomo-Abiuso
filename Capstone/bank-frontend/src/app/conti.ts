import { Utenti } from "./utenti";


export interface Conti {
  id: number;
  utente: Utenti;
  iban: string;
  ammontare: number;
}

// LocoScrollContext.js

import { createContext, useContext } from 'react';

// Define el tipo para LocomotiveScrollType
type LocomotiveScrollType = {
  destroy: () => void;
  update: () => void;
  start: () => void;
  stop: () => void;
};

// Define el contexto con el tipo adecuado
const LocoScrollContext = createContext<LocomotiveScrollType | null>(null);

// Hook personalizado para usar el contexto
export const useLocoScrollContext = () => useContext(LocoScrollContext);

export default LocoScrollContext;

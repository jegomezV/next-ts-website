// LocoScrollContext.js
import { createContext, useContext } from 'react';

const LocoScrollContext = createContext(null);

export const useLocoScrollContext = () => useContext(LocoScrollContext);

export default LocoScrollContext;

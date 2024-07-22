import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import ModelAlexa from '../actorsPage/modelAlexa';
import ModelClaudia from '../actorsPage/modelClaudia';
import ModelDiego from '../actorsPage/modelDiego';
import ModelJeffry from '../actorsPage/modelJeffry/modelJeffry';
import ModelSarali from '../actorsPage/modelSarali';
import ModelZorro from '../actorsPage/modelZorro';
import LocoScrollContext from '@/util/LocoScrollContext'; // Asumiendo que tienes un contexto para Locomotive Scroll
import Particles from '../sharedComponents/Particles';

const modelComponents = [ModelAlexa, ModelDiego, ModelJeffry, ModelSarali, ModelClaudia, ModelZorro];

interface ModelsProps {
  openModalIndex: number | null;
  handleCloseModal: () => void;
}

const Models: React.FC<ModelsProps> = ({ openModalIndex, handleCloseModal }) => {
  const locoScroll = useContext(LocoScrollContext); // Usar el contexto para acceder a la instancia de Locomotive Scroll

  useEffect(() => {
    if (openModalIndex !== null) {
      // Detener el scroll de Locomotive cuando el modal está abierto
      locoScroll?.stop();
    } else {
      // Reanudar el scroll de Locomotive cuando el modal está cerrado
      locoScroll?.start();
    }

    // Opcional: Actualizar Locomotive Scroll al cerrar el modal para corregir cualquier problema de altura
    return () => {
      try {
        if (locoScroll && typeof locoScroll.update === 'function') {
          locoScroll.update();
        }
      } catch (error) {
        console.error('Error updating Locomotive Scroll:', error);
      }
    };
  }, [openModalIndex, locoScroll]);

  if (openModalIndex === null) return null;

  const SpecificModel = modelComponents[openModalIndex];

  return (
    <motion.div
      className="fixed inset-0 backdrop-blur-2xl flex items-center justify-center z-50"
      onClick={handleCloseModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>

      <motion.div
        className="bg-slate-200 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] shadow-black/40 drop-shadow-[0_1.5px_20px_rgba(0,0,0,10)] p-4 z-50 rounded-lg h-[90%] w-[95%] overflow-y-auto"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}>
        <span
          className="absolute z-50 top-4 h-8 w-8 text-center text-white font-bold border-black/60 border-[1px] right-5 cursor-pointer text-xl bg-black rounded-full  items-center transform hover:bg-white/80 hover:text-black hover:text-red-7 transition duration-200 hover:scale-105"
          onClick={handleCloseModal}> x</span>
        <Particles />
        <SpecificModel />
      </motion.div>
    </motion.div>
  );
};

export default Models;
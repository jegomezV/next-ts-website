import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import ModelAlexa from '../actorsPage/modelAlexa';
import ModelClaudia from '../actorsPage/modelClaudia';
import ModelDiego from '../actorsPage/modelDiego';
import ModelJeffry from '../actorsPage/modelJeffry';
import ModelSarali from '../actorsPage/modelSarali';
import ModelZorro from '../actorsPage/modelZorro';
import LocoScrollContext from '@/util/LocoScrollContext'; // Asumiendo que tienes un contexto para Locomotive Scroll

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
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      onClick={handleCloseModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>

      <motion.div
        className="bg-white p-4 z-50 rounded-lg h-[90%] w-[95%] overflow-y-auto"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}>
        <SpecificModel />
      </motion.div>
    </motion.div>
  );
};

export default Models;
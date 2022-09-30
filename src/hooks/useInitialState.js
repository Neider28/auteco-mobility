import React from 'react';

const useInitialState = () => {
  const contact = React.useRef(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [showDetail, setShowDetail] = React.useState({
    name: 'Moto',
    price: '9.999.999',
    description: 'Una moto super equipada.',
    motor: '--',
    cil: '--',
    pm: '--',
    refg: '--',
    trns: '--',
    comb: '--',
    bk_b: '--',
    bk_f: '--',
    wgh: '--',
  });

  return {
    contact,
    openModal,
    setOpenModal,
    showDetail,
    setShowDetail,
  };
};

export { useInitialState };

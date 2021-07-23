import React, {useState} from 'react';
import HomeTab from '../../components/HomeTab';
import Modal from '../../components/Modal';
import FormAddTransaction from '../../components/Modal/FormAddTransaction';
function DashboardPage() {
  
  const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
    setOpen(!open)
  };
  return (
    <>
      <HomeTab />
      <Modal handleClickOpen={handleClickOpen} open={open}>
        <FormAddTransaction handleClickOpen={handleClickOpen} open={open}  />
      </Modal>
    </>
  );
}

export default DashboardPage;

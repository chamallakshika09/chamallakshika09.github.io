import { useState } from 'react';
import { HeaderLayout } from 'layouts';
import { EducationGrid, EducationModal } from 'components';

export const Education = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleOpenModal = (education) => {
    setSelectedEducation(education);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <HeaderLayout>
      <EducationGrid handleOpenModal={handleOpenModal} />

      {selectedEducation && (
        <EducationModal
          handleCloseModal={handleCloseModal}
          openModal={openModal}
          selectedEducation={selectedEducation}
        />
      )}
    </HeaderLayout>
  );
};

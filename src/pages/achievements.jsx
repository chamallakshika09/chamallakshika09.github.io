import { useState } from 'react';
import { HeaderLayout } from 'layouts';
import { AchievementGrid, AchievementModal } from 'components';

export const Achievements = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const handleOpenModal = (achievement) => {
    setSelectedAchievement(achievement);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <HeaderLayout>
      <AchievementGrid handleOpenModal={handleOpenModal} />

      {selectedAchievement && (
        <AchievementModal
          handleCloseModal={handleCloseModal}
          openModal={openModal}
          selectedAchievement={selectedAchievement}
        />
      )}
    </HeaderLayout>
  );
};

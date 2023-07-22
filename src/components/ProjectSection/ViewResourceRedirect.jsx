import React from 'react';

function ViewResourceRedirect({ readMoreLink }) {
  const handleButtonClick = () => {
    window.open(readMoreLink, '_blank');
  };

  return (
    <button type="button" className="readMore__redirect ghost_button stick_position_ghost_btn" onClick={handleButtonClick}>
      Resources
    </button>
  );
}

export default ViewResourceRedirect;

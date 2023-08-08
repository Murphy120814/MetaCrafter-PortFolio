import React from 'react';

function ViewWebsiteRedirect({ viewLink, children }) {
  const handleButtonClick = () => {
    window.open(viewLink, '_blank');
  };
  return (
    <button type="button" className=" view__redirect call_to_action_btn stick_position_cta_btn" onClick={handleButtonClick}>
      {children}
    </button>

  );
}
export default ViewWebsiteRedirect;

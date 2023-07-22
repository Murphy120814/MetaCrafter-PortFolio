import React from 'react';

function ViewWebsiteRedirect({ viewLink }) {
  const handleButtonClick = () => {
    window.open(viewLink, '_blank');
  };
  return (
    <button type="button" className=" view__redirect call_to_action_btn stick_position_cta_btn" onClick={handleButtonClick}>
      View
    </button>

  );
}
export default ViewWebsiteRedirect;

import React from 'react';

function LocationMap() {
  return (
    <div className="contact map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.114652237832!2d73.11969644101195!3d18.99121381636595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e8684c02b3c1%3A0xfeab9d3a52403573!2sPanvel%20Railway%20Station%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2suk!4v1690864802920!5m2!1sen!2suk"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default LocationMap;

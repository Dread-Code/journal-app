import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${"https://addons-media.operacdn.com/media/CACHE/images/themes/35/95435/1.0-rev1/images/fcd1950c-9600-4667-8ad0-68f57eaa9564/a2ecd9a136ae5a3450f38fe4f17a931b.jpg"})`,
        }}
      />
      <div className="journal__entry-body">
        <p className="journal__entry-title">Una nueva noche</p>
        <p className="journal__entry-content">
          afdasdf sdfasfas fasdfasfasf asfasf afasdfa sfafasfasf sadasdfasdf
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;

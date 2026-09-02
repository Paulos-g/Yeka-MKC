import React from "react";

const MissionVisionCards: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8 h-89 flex items-start justify-center mb-30">
      {/* Container for the cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Our Mission Card */}
        <div
          data-aos="fade-right"
          className="bg-white rounded-xl shadow-md p-8 md:p-10"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            Our Mission
          </h2>
          <p className="text-slate-600 leading-relaxed">
            To glorify God by making disciples of Jesus Christ through worship,
            fellowship, discipleship, ministry, and evangelism. We are committed
            to spreading the Gospel and serving our community with love and
            compassion.
          </p>
        </div>

        {/* Our Vision Card */}
        <div
          data-aos="fade-left"
          className="bg-white rounded-xl shadow-md p-8 md:p-10"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Our Vision</h2>
          <p className="text-slate-600 leading-relaxed">
            To be a thriving, Christ-centered church that transforms lives and
            communities through the power of the Gospel. We envision a church
            where every member is equipped to serve and make a positive impact
            in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionCards;

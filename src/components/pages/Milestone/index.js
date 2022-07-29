import React, { useState } from 'react';
import { Layout } from '../../Layout';
import { CardFeeds, CardMilestone } from '../../molecules';
import data from './data.json';
import timeline from './timeline.json';

export default function Index() {
  const [dataActive, setdataActive] = useState(data[0]);
  const [timelineActive, settimelineActive] = useState(timeline[0]);
  return (
    <Layout>
      <div className="relative mx-auto container flex flex-col gap-1.5 justify-center items-center">
        <h1 className="text-2xl font-semibold leading-relaxed tracking-wide text-gray-900">
          Our Milestone
        </h1>
        <p className="text-gray-600 leading-relaxed tracking-wide">
          Achievement & Timeline in 2022
        </p>
      </div>

      <div className="relative mt-12 px-4 sm:px-0">
        <h1 className="tex-xl font-semibold leading-relaxed text-gray-800">
          Our Achievement
        </h1>
        <div className="relative grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-20 lg:gap-4 mt-6">
          <div className="relative">
            <CardFeeds
              data={data}
              dataActive={dataActive}
              handlerClick={(data) => setdataActive(data)}
            />
          </div>
          <div className="relative sm:grid-cols-3 lg:col-span-5 pl-4 xl:pl-0">
            <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 transition-all duration-300">
              {dataActive.achive.map((item, index) => (
                <CardMilestone item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-b border-gray-200 my-8 mx-8" />

      <div className="relative  px-4 sm:px-0">
        <h1 className="tex-xl font-semibold leading-relaxed text-gray-800">
          Our Timeline
        </h1>
        <div className="relative grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-20 lg:gap-4 mt-6">
          <div className="relative">
            <CardFeeds
              data={timeline}
              dataActive={timelineActive}
              handlerClick={(data) => settimelineActive(data)}
            />
          </div>
          <div className="relative sm:grid-cols-2 md:grid-cols-3 lg:col-span-5 pl-4 xl:pl-0">
            <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 transition-all duration-300">
              {timelineActive.achive.map((item, index) => (
                <CardMilestone item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

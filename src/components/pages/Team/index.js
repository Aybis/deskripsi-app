import React from 'react';
import { Layout } from '../../Layout';
import data from './data.json';
import photo1 from '../../../assets/images/DSC02085.jpeg';
import photo2 from '../../../assets/images/DSC02118.jpeg';
import photo3 from '../../../assets/images/DSC02164.jpeg';
import photo4 from '../../../assets/images/DSC02052.jpeg';
import photo5 from '../../../assets/images/DSC02220.jpeg';
import photo6 from '../../../assets/images/DSC02264.jpeg';
import photo7 from '../../../assets/images/IMG_0014.JPG';
import photo8 from '../../../assets/images/IMG_0022.JPG';
import { CardImage, CardPerson } from '../../molecules';

export default function Index() {
  return (
    <Layout>
      <div className="relative mx-auto container flex flex-col gap-1.5 justify-center items-center">
        <h1 className="text-2xl font-semibold leading-relaxed tracking-wide text-gray-900">
          Meet Our Team
        </h1>
        <p className="text-base leading-relaxed text-gray-600">
          Operation Planning & IT Management
        </p>
      </div>

      {/* MGR */}
      <div className="relative flex flex-col mt-12 gap-2">
        <h1 className="tex-xl font-semibold leading-relaxed text-gray-800">
          Our Leader
        </h1>
        <div className="relative grid grid-cols-1 sm:grid-cols-3">
          <CardImage image={photo2} />
          <CardImage image={photo1} />
          <CardImage image={photo3} />
        </div>
        <div className="relative p-3">
          <h1 className="text-base font-semibold tracking-wide leading-relaxed text-gray-800 uppercase">
            {data[0].nama} - {data[0].nik}
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            {data[0].posisi}
          </p>
        </div>
      </div>

      <hr className="border-b border-gray-200 my-6 mx-8" />

      {/* Planning */}
      <div className="relative flex flex-col gap-2">
        <h1 className="tex-xl font-semibold leading-relaxed text-gray-800">
          Team Operation Planning
        </h1>
        <div className="relative grid sm:grid-cols-2 w-full gap-4 mt-3">
          <CardPerson data={data[1]} image={photo4} />
          <CardPerson data={data[2]} image={photo4} />
        </div>
      </div>

      <hr className="border-b border-gray-200 my-6 mx-8" />

      {/* IT Management */}
      <div className="relative flex flex-col gap-2">
        <h1 className="tex-xl font-semibold leading-relaxed text-gray-800">
          Team IT Management
        </h1>
        <div className="relative grid sm:grid-cols-2 w-full gap-4 mt-3">
          <CardPerson data={data[3]} image={photo5} />
          <CardPerson data={data[4]} image={photo6} />
        </div>
      </div>

      <hr className="border-b border-gray-200 my-6 mx-8" />

      {/* IT Devoper */}
      <div className="relative flex flex-col gap-2">
        <h1 className="tex-xl font-semibold leading-relaxed text-gray-800">
          Team Developer
        </h1>
        <div className="relative grid sm:grid-cols-2 w-full gap-4 mt-3">
          <CardPerson data={data[5]} image={photo8} />
          <CardPerson data={data[6]} image={photo7} />
        </div>
      </div>
    </Layout>
  );
}

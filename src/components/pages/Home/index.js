import { CheckIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Layout } from '../../Layout';
import { CardApp } from '../../molecules';

const dataKategori = [
  {
    nama: 'Semua',
    id: '1',
  },
  {
    nama: 'Bisnis',
    id: '2',
  },
  {
    nama: 'Kepegawaian',
    id: '3',
  },
];

const dataApp = [
  {
    nama: 'MyDay',
    deskripsi:
      'Veniam dolor aliquip laboris excepteur id elit consequat est mollit laborum sit. Irure laboris adipisicing magna occaecat eiusmod laboris. Quis reprehenderit sint cillum incididunt nisi eu pariatur. Sint minim labore sit ullamco anim. Et dolore proident esse reprehenderit velit irure officia aute. Magna velit in veniam id pariatur anim aliqua dolor nulla consectetur cillum ut qui proident. Labore ea aliquip mollit sint.',
    tagline: 'Exercitation officia fugiat consequat proident ad.',
    image:
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    note: '',
    kategori: 'kepegawaian',
  },
  {
    nama: 'Cuti',
    deskripsi:
      'Aliquip laborum est ad incididunt sit incididunt in minim fugiat. Do aute tempor voluptate sunt minim in veniam in occaecat aliquip est sit laborum. Incididunt amet labore consequat deserunt incididunt sint commodo aliquip laborum duis ex dolor voluptate. Quis velit sit esse nostrud sint occaecat dolor aliquip veniam exercitation aliquip dolor nulla. Ut aute dolore et laborum ullamco. Ex commodo amet in ea reprehenderit nisi nostrud.',
    tagline: 'Nostrud veniam adipisicing consequat esse reprehenderit.',
    image:
      'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    note: '',
    kategori: 'kepegawaian',
  },
  {
    nama: 'SPPD',
    tagline: 'Nisi nulla laboris laboris sit veniam esse veniam Lorem.',
    deskripsi: `Qui enim irure irure eu. Nisi amet nulla sint culpa nisi qui ad. Tempor ex eiusmod ut cillum amet qui enim labore. Excepteur est tempor nulla do elit anim duis commodo. Pariatur velit officia proident cillum cupidatat elit elit nisi laborum aute quis officia. Dolore sunt tempor proident excepteur nulla reprehenderit nostrud est amet duis magna dolor. Ad id proident adipisicing ut amet.
              In ea quis labore aliqua duis duis ad ipsum cillum ea eiusmod culpa. Sint nisi incididunt fugiat quis. Minim aute consectetur do enim excepteur do nulla pariatur deserunt sunt enim officia sit anim. Ipsum culpa deserunt consequat incididunt qui exercitation sit elit consequat duis.`,
    image:
      'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    note: '',
    kategori: 'kepegawaian',
  },
  {
    nama: 'Email',
    deskripsi:
      'Incididunt nulla esse commodo ea quis. Dolor commodo id ipsum sint voluptate tempor reprehenderit cillum officia. Sit nostrud veniam adipisicing laborum aliquip nisi commodo. Deserunt cillum occaecat deserunt quis. Fugiat consectetur aliqua exercitation ullamco magna Lorem mollit reprehenderit ea.',
    tagline: 'Voluptate ex est sunt commodo eu occaecat aute.',
    image:
      'https://cdn.dribbble.com/users/1038001/screenshots/18050621/media/aff6abbdaa7d620f0a964c6e02845bb0.png?compress=1&resize=1600x1200&vertical=top',
    note: '',
    kategori: 'kepegawaian',
  },
  {
    nama: 'CRM',
    deskripsi:
      'Exercitation qui ex in elit. Eiusmod cupidatat deserunt sint reprehenderit esse. Amet sit mollit nostrud ad deserunt nulla officia. Esse consequat eu minim est proident reprehenderit officia veniam aute.',
    tagline: 'Ad sit fugiat deserunt aliquip deserunt consequat anim.',
    image:
      'https://cdn.dribbble.com/users/1998175/screenshots/17816532/media/e6d9d6cf9d4a534d666970e59f7c5761.jpg?compress=1&resize=1600x1200&vertical=top',
    note: 'a',
    kategori: 'bisnis',
  },
  {
    nama: 'Panjar',
    deskripsi:
      'Qui quis tempor magna irure laborum sit Lorem cillum ex sint elit fugiat sint. Ad Lorem magna qui sint ullamco ullamco dolor dolor laboris est aliquip. Veniam exercitation in laborum ullamco ipsum cupidatat magna ipsum aute proident nostrud minim nulla ad. Cillum ea commodo culpa incididunt velit sint nostrud elit id magna.',
    tagline: 'Incididunt aute dolor consectetur est reprehenderit commodo.',
    image:
      'https://cdn.dribbble.com/users/2414448/screenshots/17151920/media/2ab2fc80cd3c6a53fd1fd2174f6c42eb.png?compress=1&resize=1000x750&vertical=top',
    note: 'a',
    kategori: 'bisnis',
  },
  {
    nama: 'PBS',
    deskripsi:
      'Nostrud excepteur eiusmod ea ipsum exercitation cillum irure ex. Culpa ipsum reprehenderit ullamco ullamco magna. Amet veniam ipsum excepteur elit proident minim veniam nisi nostrud culpa. Lorem veniam veniam quis ullamco.',
    tagline:
      'Qui laboris proident eiusmod sunt duis nisi laboris veniam excepteur.',
    image:
      'https://cdn.dribbble.com/users/7677055/screenshots/18106975/media/54aa1f5ddaed5c0430e75b979a2a99a6.png?compress=1&resize=1600x1200&vertical=top',
    note: 'a',
    kategori: 'bisnis',
  },
  {
    nama: 'Kontrak',
    deskripsi:
      'Ad pariatur consequat ad in id consequat anim consequat labore proident proident officia. Esse consectetur ullamco duis in aute. Veniam excepteur minim enim aliquip officia tempor eiusmod in reprehenderit enim anim labore duis sit. Cupidatat est enim ut commodo ullamco id.',
    tagline:
      'Eiusmod do labore fugiat ad elit adipisicing ipsum consequat sit et.',
    image:
      'https://cdn.dribbble.com/users/4328335/screenshots/18089698/media/f8f1f601263df69f185d411b67079b54.png?compress=1&resize=1600x1200&vertical=top',
    note: 'a',
    kategori: 'bisnis',
  },
];

export default function Home() {
  const [kategori, setkategori] = useState(dataKategori[0]);
  const [dataByKategori, setdataByKategori] = useState(dataApp);
  const [isLoading, setisLoading] = useState(false);

  const handleKategori = (kategori) => {
    setisLoading(true);
    setkategori(kategori);
    if (kategori.nama === 'Semua') {
      setdataByKategori(dataApp);
      setisLoading(false);
    } else {
      setdataByKategori(
        dataApp.filter((data) => data.kategori === kategori.nama.toLowerCase()),
      );
      setisLoading(false);
    }
  };

  return (
    <Layout>
      {/* Section Kategori */}
      <div className="relative flex flex-col justify-center items-center">
        <h2 className="text-2xl tracking-wider font-semibold text-gray-800">
          Kategori Aplikasi
        </h2>

        <div className="relative mt-8">
          <div className="relative flex gap-4 items-center">
            {dataKategori.map((item, index) => (
              <div
                title={`Kategori ${item.nama}`}
                onClick={() => handleKategori(item)}
                className={[
                  'relative flex items-center rounded-md px-4 py-2 justify-center cursor-pointer transition-all duration-300 gap-1.5 hover:bg-gray-900 hover:text-white hover:font-medium hover:tracking-wide',
                  kategori.nama === item.nama
                    ? 'bg-gray-900 shadow-md text-gray-100 font-medium tracking-wide'
                    : ' bg-transparent text-gray-900 font-light border border-gray-500',
                ].join(' ')}
                key={index}>
                <p className="leading-relaxed">{item.nama}</p>
                {kategori.nama === item.nama && <CheckIcon className="h-5" />}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Section Kategori */}

      {/* Section Aplikasi Dekstop */}
      <div className="relative hidden md:flex space-x-5 mx-auto container mt-12 transition-all duration-300">
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            <div className="relative flex flex-col 2xl:w-1/2 space-y-5 transition-all duration-300 w-full">
              {dataByKategori
                .filter((item, index) => index % 2 === 0)
                .map((item, index) => (
                  <CardApp index={index} item={item} key={index} />
                ))}
            </div>

            <div className="relative flex flex-col 2xl:w-1/2 space-y-5 transition-all duration-300 w-full">
              {dataByKategori
                .filter((item, index) => index % 2 !== 0)
                .map((item, index) => (
                  <CardApp
                    index={index}
                    item={item}
                    key={index}
                    left={false}
                    right={true}
                  />
                ))}
            </div>
          </>
        )}
      </div>

      {/* End Section Aplikasi Dekstop */}

      {/* Section Aplikasi Dekstop */}
      <div className="relative flex md:hidden space-x-8 mx-auto container mt-12 transition-all duration-300">
        {isLoading ? (
          'Loading...'
        ) : (
          <div className="relative grid grid-cols-1 gap-5">
            {dataByKategori.map((item, index) => (
              <CardApp index={index} item={item} key={index} />
            ))}
          </div>
        )}
      </div>

      {/* End Section Aplikasi Dekstop */}
    </Layout>
  );
}

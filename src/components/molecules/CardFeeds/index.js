/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, MinusSmIcon } from '@heroicons/react/solid';

const timeline = [
  {
    id: 1,
    name: 'March',
  },
  {
    id: 2,
    name: 'April',
  },
  {
    id: 3,
    name: 'May',
  },
  {
    id: 4,
    name: 'June',
  },
  {
    id: 5,
    name: 'July',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Index({ dataActive, data, handlerClick }) {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {data.map((item, eventIdx) => (
          <li onClick={() => handlerClick(item)} key={item.id}>
            <div className="relative pb-8 cursor-pointer">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      dataActive.id === item.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-400',
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white transition-all duration-300',
                    )}>
                    {dataActive.id === item.id ? (
                      <CheckIcon className="h-4 transition-all duration-300" />
                    ) : (
                      <MinusSmIcon className="h-4 transition-all duration-100" />
                    )}
                  </span>
                </div>
                <div className="min-w-0 flex-1 flex items-center space-x-2">
                  <div className="h-5">
                    <p className="text-sm text-gray-500">{item.bulan} </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time dateTime={'2022-12-12'} className="text-gray-500">
                      2022
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

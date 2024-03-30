import useData from "@/app/utils/useData";
import {Property} from "csstype";

export default async function Home() {
    const data = await useData();


  return (
      <main className='w-full flex flex-row flex-wrap'>
          <section className='flex w-full py-14'/>
          <div className='flex w-full flex-wrap'>
              <div className='flex w-full flex-row'>
                  <div className='w-full flex flex-col'>
                      <p className='text-xl dark:text-slate-50'>{data?.intro?.greetings}</p>
                      <p className='text-5xl font-bold dark:text-slate-50'>{data?.position}</p>
                      <p className='text-base font-semibold dark:text-slate-50'>{data?.intro?.sub}</p>
                  </div>
                  <div className='flex w-full flex-row'>
                      <div className='w-full flex pr-28'>
                          {/* eslint-disable-next-line @next/next/no-img-element*/}
                          <img
                              className='w-32 h-32 object-cover rounded-full ml-auto'
                              src='https://avatars.githubusercontent.com/u/18107626?v=4'
                              alt='avatar'
                          />
                      </div>
                  </div>

              </div>
          </div>
          <section className='flex w-full py-14'/>
          <div className='flex w-full flex-col flex-wrap gap-2 pb-10'>
              <p className='text-xl font-semibold dark:text-slate-50'>Tech Stack</p>
              <div className='flex w-full flex-row flex-wrap'>
                  <div className='flex w-full flex-col flex-wrap'>
                      <div className='grid grid-cols-4 gap-2'>
                          {data?.stack?.map((item: any, index: number) => {
                              return (
                                  <a
                                      key={index}
                                      id={`stack-${index}`}
                                      href={item?.link}
                                      className='w-full max-w-sm bg-slate-200 border border-slate-200 rounded-lg shadow dark:bg-slate-800 dark:border-slate-700 hover:transition hover:ease-in-out hover:delay-150 hover:-translate-y-1 hover:scale-105'>
                                      <div className="flex flex-col items-center pb-10  pt-4">
                                          {/* eslint-disable-next-line @next/next/no-img-element*/}
                                          <img
                                              className={`w-20 h-20 mb-3 rounded-full shadow-lg`}
                                               src={item?.icon}
                                              alt={item?.name}
                                              style={{
                                                  objectFit: `${item?.style?.objectFit as Property.ObjectFit}`,
                                              }}
                                          />
                                          <p className="mb-1 text-2xl font-semibold text-gray-900 dark:text-slate-50">{item?.name}</p>
                                          <span
                                              className="text-sm text-gray-600 dark:text-gray-400">{item?.category}</span>
                                      </div>
                                  </a>
                              );
                          })}
                      </div>
                  </div>
              </div>
          </div>

      </main>
  );
}

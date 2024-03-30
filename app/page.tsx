import useData from "@/app/utils/useData";

export default async function Home() {
    const data = await useData();


  return (
      <main className='w-full flex flex-row flex-wrap'>
          <section className='flex w-full py-14'/>
          <div className='flex w-full flex-col flex-wrap'>
              <p className='text-xl dark:text-slate-50'>{data?.intro?.greetings}</p>
              <p className='text-5xl font-bold dark:text-slate-50'>{data?.position}</p>
              <p className='text-base font-semibold dark:text-slate-50'>{data?.intro?.sub}</p>
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
                                      className='w-full max-w-sm bg-slate-200 border border-slate-200 rounded-lg shadow dark:bg-slate-800 dark:border-slate-700'>
                                      <div className="flex flex-col items-center pb-10  pt-4">
                                          {/* eslint-disable-next-line @next/next/no-img-element*/}
                                          <img
                                              className={`w-20 h-20 mb-3 rounded-full shadow-lg ${item?.style?.object}`}
                                               src={item?.icon}
                                               alt={item?.name}/>
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

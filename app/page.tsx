import useData from "@/app/utils/useData";

export default async function Home() {
    const data = await useData();


  return (
      <main className='w-full flex flex-row flex-wrap'>
          <section className='flex w-full py-14'/>
          <div className='flex w-full'>
              <p className='dark:text-slate-50'>{data?.greetings}</p>
          </div>
      </main>
  );
}

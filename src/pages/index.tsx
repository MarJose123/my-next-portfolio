import { GetServerSideProps, InferGetStaticPropsType } from "next";
import { getStaticProps } from "next/dist/build/templates/pages";
import { Property } from "csstype";
import fsPromises from "fs/promises";
import path from "node:path";
import { Chrono } from "@/components/react-chrono-client";

type Content = {
  intro: {
    greetings: string;
    sub: string;
  };
  greetings: string;
  name: string;
  position: string;
  location: {
    country: {
      abb: string;
      name: string;
    };
  };
  stack: {
    name: string;
    icon: string;
    link: string;
    category: string;
    style: {
      objectFit: string;
    };
  };
  experience: [];
};

export const getServerSideProps = (async () => {
  const dataFilePath = path.join(process.cwd(), "/src/pages/payload.json");
  const jsonData = await fsPromises.readFile(dataFilePath, "utf-8");
  const data: Content = JSON.parse(jsonData);

  return { props: { data } };
}) satisfies GetServerSideProps<{ data: Content }>;

export default function Page({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // return data;
  return (
    <main className="w-full flex flex-row flex-wrap">
      <section className="flex w-full py-14" />
      <div className="flex w-full flex-wrap">
        <div className="flex w-full flex-col-reverse lg:flex-row">
          <div className="w-full flex flex-col">
            <p className="text-xl text-center md:text-left dark:text-slate-50">
              {data?.intro?.greetings}
            </p>
            <p className="text-4xl text-center md:text-left md:text-5xl font-bold dark:text-slate-50">
              {data?.position}
            </p>
            <p className="text-center md:text-left text-base font-semibold dark:text-slate-50">
              {data?.intro?.sub}
            </p>
          </div>
          <div className="flex w-full flex-row py-4">
            <div className="w-full flex pr-28 md:items-center">
              {/* eslint-disable-next-line @next/next/no-img-element*/}
              <img
                className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-full ml-auto"
                src="https://avatars.githubusercontent.com/u/18107626?v=4"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="flex w-full py-14" />
      {/* TECHNOLOGY STACK DIVISION - START HERE */}
      <div className="flex w-full flex-col flex-wrap gap-2 pb-10 ">
        <p className="text-xl font-semibold dark:text-slate-50">Tech Stack</p>
        <div className="flex w-full flex-row flex-wrap">
          <div className="flex w-full flex-col flex-wrap md:shrink-0">
            <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-2 flex flex-col">
              {data?.stack?.map((item: any, index: number) => {
                return (
                  <a
                    key={index}
                    id={`stack-${index}`}
                    href={item?.link}
                    className="w-full max-w-sm bg-slate-200 border border-slate-200 rounded-lg shadow dark:bg-slate-800 dark:border-slate-700 hover:transition hover:ease-in-out hover:delay-150 hover:-translate-y-1 hover:scale-105"
                  >
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
                      <p className="mb-1 text-2xl font-semibold text-gray-900 dark:text-slate-50 text-center">
                        {item?.name}
                      </p>
                      <span className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        {item?.category}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* TECHNOLOGY STACK DIVISION - END HERE */}
      {/*  TIMELINE FOR WORK EXPERIENCE AND EDUCATION - START HERE */}
      <div className="flex w-full flex-col flex-wrap gap-2 pb-10">
        <p className="text-xl font-semibold dark:text-slate-50">
          Experience & Education
        </p>
        <div className="flex w-full flex-row flex-wrap justify-center">
          <Chrono
            items={data?.experience}
            mode="VERTICAL_ALTERNATING"
            // hideControls={true}
            hideToolbar={true}
            disableToolbar={true}
            enableQuickJump={false}
            enableLayoutSwitch={false}
            disableInteraction={true}
            parseDetailsAsHTML
          />
        </div>
      </div>
    </main>
  );
}

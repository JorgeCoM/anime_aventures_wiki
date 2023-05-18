import React from 'react'
export const SiderBar = () => {
  return (
    <>
      <div
        className="p-2 text-center relative mb-2 rounded-md text-white bg-slate-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div
          className="border-b-2 border-neutral-100 px-2 py-2 dark:border-neutral-600 dark:text-neutral-50">
          Feed
          <span
            className="inline-block absolute text-center right-2 whitespace-nowrap rounded-[0.27rem] bg-slate-600 px-[0.65em] pb-[0.25em] pt-[0.35em] align-baseline text-[0.75em] font-bold leading-none text-primary-700"
          >New
          </span>
        </div>
        <div className="p-2">
          <h5
            className="mb-2 text-xl font-medium leading-tight dark:text-neutral-50">
            title
          </h5>
          <p className="mb-4 text-base dark:text-neutral-200">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button
            type="button"
            className="inline-block rounded bg-slate-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(71 85 105 .5)] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(71 85 105 .3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            Read more
          </button>
        </div>
        <div
          className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
          5 minutes
        </div>
      </div>
      <div
        className="p-2 text-center relative mt-4 rounded-md text-white bg-slate-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div
          className="border-b-2 border-neutral-100 px-2 py-2 dark:border-neutral-600 dark:text-neutral-50">
          Feed
          <span
            className="inline-block absolute text-center right-2 whitespace-nowrap rounded-[0.27rem] bg-slate-600 px-[0.65em] pb-[0.25em] pt-[0.35em] align-baseline text-[0.75em] font-bold leading-none text-primary-700"
          >New
          </span>
        </div>
        <div className="p-2">
          <h5
            className="mb-2 text-xl font-medium leading-tight dark:text-neutral-50">
            title
          </h5>
          <p className="mb-4 text-base dark:text-neutral-200">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <button
            type="button"
            className="inline-block rounded bg-slate-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(71 85 105 .5)] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(71 85 105 .3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            Read more
          </button>
        </div>
        <div
          className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
          1 hour
        </div>
      </div>
    </>

  )
}

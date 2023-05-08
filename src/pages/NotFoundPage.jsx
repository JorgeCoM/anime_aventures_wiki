import { NavLink, useRouteError } from "react-router-dom";

export const NotFoundPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-10">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="text-indigo-500 font-bold text-7xl">
            {error.status || 'Algo salio'}
          </div>

          <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            {error.statusText || 'pero no sabemos que'}
          </div>

          <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            {error.data || 'Si el error persiste ponerse en contacto con los administradores'}
          </div>
        </div>

        <div className="flex flex-col mt-12">
          <div className="text-gray-400 font-bold uppercase">
          </div>
          <div className="flex flex-col items-stretch">
            <NavLink to={"/"} className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    hover:bg-gray-300
                    transition-all duration-200 delay-100">

              <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                <i className="mdi mdi-home-outline mx-auto 
                            text-indigo-900 text-2xl md:text-3xl"></i>
              </div>

              <div className="grow flex flex-col pl-5 pt-2">
                <div className="font-bold text-sm md:text-lg lg:text-xl ">
                  Inicio
                </div>

                <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                  Volver a la pagina de inicio
                </div>
              </div>

              <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
            </NavLink>
            <NavLink className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    hover:bg-gray-300
                    transition-all duration-200 delay-10
                    0">

              <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 mx-auto 
                            text-indigo-800 text-2xl md:text-3xl h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>

              </div>

              <div className="grow flex flex-col pl-5 pt-2">
                <div className="font-bold text-sm md:text-lg lg:text-xl hover:bg-gray-300">
                  Contactar
                </div>

                <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                  Contactar con un administrador
                </div>
              </div>

              <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
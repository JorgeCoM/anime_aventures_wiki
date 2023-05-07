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
                <i className="mdi mdi-at mx-auto 
                            text-indigo-800 text-2xl md:text-3xl"></i>
              </div>

              <div className="grow flex flex-col pl-5 pt-2">
                <div className="font-bold text-sm md:text-lg lg:text-xl hover:bg-gray-300">
                  Contactar
                </div>

                <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                  Quiero imformar de un error o ponerme en contacto con los administradors
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
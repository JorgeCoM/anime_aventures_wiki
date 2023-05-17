export const GalleryComponents = () => {
  return (
    <div className="container">
    <p className=" font-bold text-3xl text-center pb-2">Banners</p>
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <div className="w-1/2 p-1 md:p-2">
          <div className="relative">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="./Lelouch_Normal.webp"
            />
            <p className="absolute bottom-0 left-0 right-0 text-center bg-black bg-opacity-50 text-white py-2">
              Lulu (Geass) Normal
            </p>
          </div>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <div className="relative">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="./Lelouch_Shiny.webp"
            />
            <p className="absolute bottom-0 left-0 right-0 text-center bg-black bg-opacity-50 text-white py-2">
              Lulu (Geass) shiny
            </p>
          </div>
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
        </div>
      </div>
    </div>
  </div>
  )
}

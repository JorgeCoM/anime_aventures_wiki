export const HomePage = () => {
  const arr = ["Add new units", "fix bug portal", "remove portal alien", "add dio over heaven", "remover event fabled", "add event jojos", "remove ice queen", "remove veko", "remove a tu hermana", "holaaaaaaaaaaaaaaaaaa", 'holas', "XDDDDzzzzzzzzzzzzzz"]
  return (
    <div className="h-full flex flex-col justify-center">
      <div
        className="w-full break-words pb-1 p-5">
        <div
          className="w-full h-full shadow-lg rounded-lg shadow-slate-400 p-4">
          <div
            className=" text-white font text-3xl font-bold text-center">About</div>
          <div
            className="m-2 w-[40%] float-right inline-block">
            <img
              className="w-full h-full" src="./Logo.webp" alt="" />
          </div>
          <p
            className="text-white text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti reiciendis fugit
            inventore et deserunt necessitatibus delectus quae accusamus animi corrupti explicabo illo
            commodi ad, at natus vel sed nobis dicta. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Corrupti sunt aperiam earum, nulla ipsa culpa voluptatem distinctio voluptates facilis
            totam neque, obcaecati dolor ratione, quaerat est odit. Eos, iure reiciendis!</p>
        </div>
      </div>
      <div
        className="w-full p-5">
        <div
          className="w-full shadow-lg rounded-lg shadow-slate-400 pt-1 h-full">
          <div>
            <h1
              className=" text-center text-3xl font-bold text-white">
              Last update
            </h1>
          </div>
          <div>
            <ul
              className="grid mt-4 text-center grid-cols-3">
              {arr.map(item =>
                <li key={item}
                  className="col-span-1 m-2 break-words text-white">{item}
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

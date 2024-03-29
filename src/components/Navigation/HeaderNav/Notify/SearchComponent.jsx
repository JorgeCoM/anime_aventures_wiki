
export const SearchComponent = () => {

    const handleValue = ({target}) => {
        const {value} = target
    }
    return (
        <div className="dropdown dropdown-left dropdown-hover">
            <button tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-slate-500 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <ul tabIndex={0} className="dropdown-content menu p-2 duration-300 shadow rounded-box h-12 w-52">
                <form className="absolute top-[-1px]" action="">
                <input onChange={handleValue} placeholder="Search..." className="input input-bordered text-white bg-slate-700 bg w-full max-w-xs" />

                </form>
            </ul>
        </div>
    )
}

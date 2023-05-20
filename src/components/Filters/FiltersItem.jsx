export const FiltersItem = ({ controllers, index }) => {
    return (
        <div
            id={controllers.dataHsControlls}
            className={`${index > 0 ? 'hidden' : ''}`}
            role="tabpanel"
            aria-labelledby={controllers.ButtonId}>
            <p className="text-white dark:text-gray-400">
                {controllers.content}
            </p>
        </div>
    )
}

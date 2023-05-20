import { FilterNav } from "./FilterNav";
import { FiltersItem } from "./FiltersItem";

export const FiltersComponents = ({ item }) => {
  return (
    <>
      <div className="flex">
        <div className="flex w-full bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600">
          <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
            {item.map((element, index) => {
              return Array.isArray(element.name) ? (
                element.name.map((name, nameIndex) => (
                  <FilterNav
                    key={`${element.ButtonId}-${nameIndex}`}
                    index={index}
                    controllers={{
                      ...element,
                      name: name
                    }}
                  />
                ))
              ) : (
                <FilterNav
                  key={element.ButtonId}
                  index={index}
                  controllers={element}
                />
              );
            })}
          </nav>
        </div>
      </div>

      <div className="mt-3">
        {item.map((element, index) => {
          return <FiltersItem key={element.ButtonId} index={index} controllers={element} />;
        })}
      </div>
    </>
  );
};

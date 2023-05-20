import { EffectData } from "../../data/EffectData"
import { FiltersComponents } from "./FiltersComponents"

export const FiltersSection = () => {
    return (
        <>
            {EffectData.map((groupData) => (
                <div key={groupData.group} className="mb-4">
                    <h2>{groupData.group}</h2>
                    <FiltersComponents item={groupData.data} />
                </div>
            ))}
        </>
    );
}

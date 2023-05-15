

export const useData = (info) => {

    const dataSections = [];

    const DataController = (data) => {
        if (!data) return console.log('error no se pudo encontrar la informacion')
        if (data) {
            data.map((item, index) => {
                const section = { [`section${index + 1}`]: item };
                dataSections.push(section);
            })
        }
    }

    DataController(info)

    return [
        dataSections
    ]
}

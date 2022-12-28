const csv = require('@fast-csv/parse');

export default function parseCsv(input) {
    const rows = [];

    return new Promise(resolve => {
        csv.parseString(input, { headers: true })
            .on('error', error => console.error(error))
            .on('data', row => rows.push(row))
            .on('end', rowCount => {
                console.log(`Parsed ${rowCount} rows`);
                resolve(JSON.stringify(parseRows(rows)));
            })
    });
}

function parseRows(rows) {
    const json = csvRowsToJson(rows);
    return json;
}

function csvRowsToJson(rows) {
    return {
        "jeopardy": parseRound(rows.filter(row => row["round"] === 'jeopardy')),
        "doubleJeopardy": parseRound(rows.filter(row => row["round"] === 'doubleJeopardy')),
        "finalJeopardy": parseRound(rows.filter(row => row["round"] === 'finalJeopardy')),
    }
}

function parseRound(rows) {
    const rowsByCategory = new Map();
    rows.forEach(row => {
        const category = row["category"];
        const question = {
            "value": parseInt(row["points"]),
            "category": row["category"],
            "question": row["question"],
            "answer": row["answer"],
            "youtubeLink": row["image_link"],
            "imageLink": row["youtube_link"],
        };
        if (rowsByCategory.has(category)) {
            rowsByCategory.get(category).push(question);
        } else {
            rowsByCategory.set(category, [question]);
        }
    });
    const rowsByCategoryNum = new Map();
    var i = 0;
    rowsByCategory.forEach((value, key, map) => {
        rowsByCategoryNum.set(i++, value);
    });
    return { "categories": fromEntries(rowsByCategoryNum) };
}

function fromEntries(iterable) {
    return [...iterable].reduce((obj, [key, val]) => {
        obj[key] = val
        return obj
    }, {})
}

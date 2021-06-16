const fs = require('fs');
const path = require('path');


const directoryPath = path.join(__dirname, 'Upper_data_base');


const filesExport = fs.readdirSync(directoryPath, {withFileTypes: true})
    .filter(item => !item.isDirectory())
    .map(item => item.name)

module.exports.filesExport = filesExport;    










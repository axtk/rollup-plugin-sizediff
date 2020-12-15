const {readFileSync, writeFileSync, statSync} = require('fs');

function toString(size) {
    return `${size === 0 ? 0 : (size/1024).toFixed(3)} kB`;
}

module.exports = (props = {}) => {
    const outputFile = props.output || './.filestats.json';

    return {
        name: 'size-diff',
        writeBundle: ({file}) => {
            let {size} = statSync(file);
            let prevStats, diff = '';

            try {
                prevStats = JSON.parse(readFileSync(outputFile).toString());
            }
            catch(e) {}

            if (prevStats !== undefined && typeof prevStats[file] === 'number') {
                let delta = size - prevStats[file];
                diff = ` (${delta < 0 ? '' : '+'}${toString(delta)})`;
            }

            try {
                if (!prevStats) prevStats = {};
                prevStats[file] = size;
                writeFileSync(outputFile, JSON.stringify(prevStats, null, 2));
            }
            catch(e) {}

            console.log(`${toString(size)}${diff}`);
        },
    };
};

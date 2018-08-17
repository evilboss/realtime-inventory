import PythonShell from 'python-shell';

const getSample = (callback) => {
    var options = {
        mode: 'text',
        pythonOptions: ['-u'],
        args: ['value1', 'value2', 'value3']
    };
    PythonShell.run('../scripts/sample.py', options, function (err, results) {
        if (err) callback(err, null);
        // results is an array consisting of messages collected during execution
        //res.send(JSON.parse(results));
        callback(null, results);
    });

};
const sample = {
    getSample: getSample
};

export default sample;
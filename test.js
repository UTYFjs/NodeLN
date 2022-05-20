const {stdout, stdin} = process;
stdout.write('What is your name? \n');
stdin.on( 'data', data => {
    stdout.write('Hello: ');
    stdout.write(data);
    process.exit();
});

process.on('exit', () => stdout.write('Good Luck'));



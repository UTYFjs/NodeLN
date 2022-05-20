
console.log(__filename);
console.log(__dirname);

const {stdout} = process;
const flag = process.argv[2];
if(flag === '-d'){
    stdout.write(__dirname);
} else if(flag === '-f'){
    stdout.write(__filename);
}else {
    stdout.write('please enter flag -d or -f')
}
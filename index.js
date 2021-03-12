#! /usr/bin/env node 
const program = require('commander');
var process1 = require('child_process');
let index = "》";
//version 版本号
//name 新项目名称
program.version('1.0.0', '-v, --version')
    .command('init <name>')
    .action((name) => {
        console.info('\x1B[33mStart Create ─=≡Σ(((つ•̀ω•́)つ...\x1B[39m');
        let inter = setInterval(()=>{
            process.stdout.write(index)
        },500)
        process1.exec('git clone https://github.com/MrTager/HonYarSmart_init.git ' + name, function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
                return;
            }
            console.log(stdout);
            console.log('\x1B[32mSuccess !!! ‧★,:*:‧\(￣▽￣)/‧:*‧°★*　 \x1B[39m');
            clearInterval(inter)
            process.exit();
        });
    });
program.parse(process.argv);
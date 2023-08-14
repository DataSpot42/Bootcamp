let a;
            let time;
            let week = 0;
            let month = 0;
            let t2 = 0;
            let t1 = 0;
            let start = 0;
            setInterval(() => {
                a = new Date();
                month = a.getMonth() + 1;
                time = a.getDate() + '/' + month + '/' + a.getFullYear() + "  " + String(a.getHours()).padStart(2, "0") + ':' + String(a.getMinutes()).padStart(2, "0") + ':' + String(a.getSeconds()).padStart(2, "0");
                let timeStamp = time;
                document.getElementById('time').innerHTML = timeStamp;
                start = new Date("2023-07-10");
                t2 = a.getTime();
                t1 = start.getTime();
                week = (Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7)) + 1);
                let output = ' so I am currently on Week ' + week;

                document.getElementById('week').innerHTML = output;
            }, 1000);
function showTime(n) { 
    
    charcount = n;
    somestr = buildStr(charcount);
    console.time(`for loop reverse string ${charcount}`);
    revStrFor(somestr);
    console.timeEnd(`for loop reverse string ${charcount}`);
}
function showTimeArr(n) { 

    charcount = n;
    somestr = buildStr(charcount);
    console.time(`arr string ${charcount}`);
    revStrArr(somestr);
    console.timeEnd(`arr reverse string ${charcount}`);
}
showTime(10);
showTimeArr(10);
showTime(100);
showTimeArr(100);
showTime(1000);
showTimeArr(1000);
showTime(10000);
showTimeArr(10000);
showTime(100000);
showTimeArr(1000000);
showTime(1000000);
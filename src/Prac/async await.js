const test = async () => {
    try {
        await operaion(); 
        console.log('op1');
        console.log('op2');
        await operation2();
        console.log('op3');
    }
    catch(err) {
        console.log('err');
    }
}


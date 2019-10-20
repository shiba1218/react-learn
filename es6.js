// 従来の関数宣言
function plusOne(n) {
    return n + 1;
}

// アロー関数の宣言 1
const plusOne = (m) => { return  m + 1; };

//アロー関数宣言　２
const plusOne = l => l + 1;


// 非同期処理
const wakeUp = ms => {
    setTimeout(() => { console.log('朝,起きました！');}, ms)
};

const greet = () => {
    console.log('おyすみ');
    wakeUp(2000);
    console.log('oyasumi');
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const greet = async() => {
    console.log('おやすみ');

    try{
        await　sleep(2000);
        console.log('起きた');
        console.log('おはよう');
    }catch(err){
        console.log('睡眠例外です。')
    }
}

async function getStatusCode(){
    try{
        console.log('started');
        const response = await axios.get('https');
        console.log('success', response.status);
    }catch(error){
        console.log('error', error.response.status);
    }finally{
        console.log('finished');
    }
}

const f3 = (a, b) => a + b;







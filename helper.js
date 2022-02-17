const fs = require('fs')

const isWordsList = process.argv[3]

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const read = text=>new Promise((resolve,reject)=>{
    readline.question(text, data=>{
	resolve(data)
    })
})
Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}
fs.readFile(process.argv[2], async(err,data)=>{
    const falseList = new Set()
    data=data.toString()
    data=data.split('\n').map(x=>[x.split(isWordsList?' ':':')])
    const scrambledElements = data.shuffle()
    
    outside:
    for(const element of data){
	const [chinese,english]=element[0]
	if(english&&chinese){
	    while(1){
		const inputWord = await read(`${chinese}:`)
		if(inputWord===english){
		    console.log('      perfect!')
		    break
		}else if(inputWord===`q`){
		    break outside
		}
		else{
		    if(inputWord===`n`){
			console.log(`      正确答案：${english}`)
		    }else {
			console.log(`      你写错了！请重来: `)
		    }
		    falseList.add(`${chinese}: ${english}`)
		}
	    }
	}
    }
    console.log("\n\n\n\n背错的单词：")
    for(const element of Array.from(falseList)){
	console.log(element)
    }
})

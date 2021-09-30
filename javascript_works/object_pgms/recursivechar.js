var pattern="ABCABB"
var word_count={}
for(let char of pattern){
    if(char in word_count){
        word_count[char]+=1
    }
    else{
        word_count[char]=1
    }
}
console.log(word_count);

var expect = function(val) {
    return {
        toBe: (n) =>{
            if ( n === val ){
                return {value:true}
            }
            else{
                return {error:"Not Equal"};
            }
        },
        notToBe:(n)=>{
            if ( n !== val ){
                return {value:true}
            }
            else{
                return {error:"Equal"};
            }
        }
    }
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"

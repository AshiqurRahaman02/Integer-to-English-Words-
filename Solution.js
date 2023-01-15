if(num==0){return "Zero"}
    let obj={
        0:"",
        1:"One",
        2:"Two",
        3:'Three',
        4:'Four',
        5:'Five',
        6:'Six',
        7:'Seven',
        8:'Eight',
        9:'Nine',
        10:'Ten',
        11:'Eleven',
        12:'Twelve',
        13:'Thirteen',
        14:'Fourteen',
        15:'Fifteen',
        16:'Sixteen',
        17:'Seventeen',
        18:'Eighteen',
        19:'Nineteen',
        20:'Twenty',
        30:'Thirty',
        40:'Forty',
        50:'Fifty',
        60:'Sixty',
        70:'Seventy',
        80:'Eighty',
        90:'Ninety',
    }
    
    
    let onetothou=(num)=>{//945
        let ans=""
        if(num>=100){
            ans+=obj[Math.floor(num/100)]+ " Hundred "//Nine 
            num=num%100//45
        }
        if(num>=10){
            if(obj[num]!==undefined){
                ans+=obj[num]+''
                return ans
            }else{
                ans+=obj[Math.floor((num/10))*10]+" "//Four
                num=num%10//5
            }
        }
        ans+=obj[num]
        return ans.trim()
    }

    let bil=1000000000
    let mil=1000000
    let thou=1000
    
    let ans1=""
    if(num>=bil){
        ans1+=onetothou(Math.floor(num/bil)) + " Billion "
        num=num%bil
    }
    if(num>=mil){
        ans1+=onetothou(Math.floor(num/mil))+ " Million "
        num=num%mil
    }
    if(num>=thou){
        ans1+=onetothou(Math.floor(num/thou)) + " Thousand "
        num=num%thou
    }
    ans1+=onetothou(num)
    return ans1.trim()
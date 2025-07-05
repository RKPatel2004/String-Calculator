function add(numbers)
{
    if(numbers === "") return 0;

    let delimiter = /,|\n/;
    let input  = numbers;

    if (numbers.startsWith("//")) {
        const delimiterLine = numbers.split("\n")[0];
        delimiter = new RegExp(delimiterLine[2]);
        input = numbers.substring(numbers.indexOf('\n') + 1);
    }

    const nums = input.split(delimiter).map(Number);

    const negatives = nums.filter(n => n < 0);
    if(negatives.length > 0)
    {
        throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }

    return nums.reduce((acc, cur) => acc + cur, 0);
}

module.exports = add;
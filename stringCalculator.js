function add(numbers)
{
    if(numbers === "") return 0;

    let delimiter = /,|\n/;
    let input  = numbers;

    const nums = input.split(delimiter).map(Number);

    return nums.reduce((acc, cur) => acc + cur, 0);
}

module.exports = add;
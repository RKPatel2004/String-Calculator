function add(numbers)
{
    if(numbers === "") return 0;

    const nums = numbers.split(",");

    return nums.reduce((acc, num) => acc + parseInt(num), 0);
}

module.exports = add;
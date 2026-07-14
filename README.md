# js-practical-exercises
for js practical exercises


#  1.array statistics

this exercise is for showing stats of an array like it length, it minimum value and maximum value which will be combined in an object 

so we created a function called arraystatistics have the following stats

Name: arrayStatistics
Parameters: arr(which is array)
Returns: an object {sum, average, min, max}


# 2. BMI calculation

this is a kata where you make a function where you passs the weight and the height of someone and then it give you response in these options ["overweight", "normal","underweight","obese"]which can help you to know where you are on your health(8kyu)


# 3. Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples(6kyu):

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

# 4. IsPrime

i made a function which recieves a number and them check if it is a prime number(6kyu)

# 5.area of circle

I made a Function for finding an area of circle when you pass radius as an argument and check if the number of radius is a greater than or equal to zero and it throw an error if not it will find area of circle(7kyu)


# 6. Find a narcissitic number

A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).(6kyu)

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

# 7. Sum Strings as Numbers

Given the string representations of two integers, return the string representation of the sum of those integers.(4kyu)

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


# 8. A Chain adding function

We want to create a function that will add numbers together when called in succession(5kyu).

add(1)(2); // == 3
We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
and so on.

A single call should be equal to the number passed in.

add(1); // == 1
We should be able to store the returned values and reuse them.

var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10
We can assume any number being passed in will be valid whole number.


# 9. Bit Counting

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.(6kyu)

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

# 10. Reversed Words

Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
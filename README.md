# js-practical-exercises
for js practical exercises


#  1.array statistics

this exercise is for showing stats of an array like it length, it minimum value and maximum value which will be combined in an object 

so we created a function called arraystatistics have the following stats

Name: arrayStatistics
Parameters: arr(which is array)
Returns: an object {sum, average, min, max}


# 2. BMI calculation

this is a kata where you make a function where you passs the weight and the height of someone and then it give you response in these options ["overweight", "normal","underweight","obese"]which can help you to know where you are on your health


# 3. Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
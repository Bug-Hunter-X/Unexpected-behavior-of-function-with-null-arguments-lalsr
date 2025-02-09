# Unexpected behavior of function with null arguments

This repository demonstrates an uncommon bug in JavaScript related to unexpected behavior when a function receives null arguments. The `foo` function, when given null for either `a` or `b`, returns 0 instead of throwing an error or handling null values gracefully. This can lead to unexpected results in applications where null values might occur.

## Bug Description
The `foo` function is designed to add two numbers (`a` and `b`). However, it returns 0 if either `a` or `b` is null. This behavior is unexpected and could lead to issues in applications that don't anticipate this behavior.

## Solution
The solution provided in this repository demonstrates how to handle null arguments correctly.  It's crucial to check for null values and handle them in a way consistent with the expected behavior of the function. This may involve using alternative return values (e.g., NaN), throwing errors, or performing other appropriate actions to handle the situation gracefully.
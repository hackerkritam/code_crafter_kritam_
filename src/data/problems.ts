import { Problem } from '../types';

export const problems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]"
      }
    ],
    starterCode: `function twoSum(nums: number[], target: number): number[] {
    // Write your code here
}`,
    solution: `function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`
  },
  {
    id: 2,
    title: "Reverse String",
    difficulty: "Easy",
    description: "Write a function that reverses a string. The input string is given as an array of characters.",
    examples: [
      {
        input: 'Input: ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      }
    ],
    starterCode: `function reverseString(s: string[]): void {
    // Write your code here
}`,
    solution: `function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}`
  },
  {
    id: 3,
    title: "Valid Parentheses",
    difficulty: "Easy",
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.`,
    examples: [
      {
        input: 's = "()"',
        output: "true"
      },
      {
        input: 's = "([)]"',
        output: "false"
      }
    ],
    starterCode: `function isValid(s: string): boolean {
    // Write your code here
}`,
    solution: `function isValid(s: string): boolean {
    const stack: string[] = [];
    const map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    
    for (const char of s) {
        if (!map.has(char)) {
            stack.push(char);
        } else if (stack.pop() !== map.get(char)) {
            return false;
        }
    }
    
    return stack.length === 0;
}`
  },
  {
    id: 4,
    title: "First Unique Character",
    difficulty: "Easy",
    description: "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
    examples: [
      {
        input: 's = "leetcode"',
        output: "0",
        explanation: "The first non-repeating character is 'l' at index 0."
      }
    ],
    starterCode: `function firstUniqChar(s: string): number {
    // Write your code here
}`,
    solution: `function firstUniqChar(s: string): number {
    const count = new Map();
    
    for (const char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }
    
    for (let i = 0; i < s.length; i++) {
        if (count.get(s[i]) === 1) {
            return i;
        }
    }
    
    return -1;
}`
  }
];
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeWarsKatas.KataSolutions
{
    public class Kata6Kyu
    {
        // Tests if n is prime. n <= 1 are not prime.
        // input: int 5099
        // output: bool true
        public static bool IsPrime(int n)
        {
            bool isPrime = true;
            if (n <= 1 || Math.Sqrt(n) % 1 == 0)
            {
                isPrime = false;
            }
            else
            {
                for (int i = 2; i < Math.Sqrt(n); i += 1)
                {
                    if (n % i == 0)
                    {
                        isPrime = false;
                    }
                }
            }
            return isPrime;
        }

        // Tests if phrase contains every letter of the alphabet. Ignores capitalization.
        // input: string "The quick brown fox jumps over the lazy dog."
        // outup: bool true
        public static bool IsPangram(string str)
        {
            bool isStrPangram = true;
            List<int> charCodes = new List<int>();
            foreach (char letter in str)
            {
                charCodes.Add((int)Char.ToLower(letter));
            }
            for (int i = 97; i <= 122; i++)
            {
                if (!charCodes.Contains(i))
                {
                    isStrPangram = false;
                    break;
                }
            }
            return isStrPangram;
        }


        // Tests if original array has reoccuring values. If array has more than x occurances,
        // returns new array with only x number of values without reordering array.
        // input: int[] { 1, 1, 3, 3, 7, 2, 2, 2, 2 }, 3
        // output: int[] {1, 1, 3, 3, 7, 2, 2, 2}
        public static int[] DeleteNth(int[] arr, int x)
        {
            List<int> optimized = new List<int>();
            foreach (int num in arr)
            {
                if (optimized.Count(n => n == num) < x)
                {
                    optimized.Add(num);
                }
            }
            return optimized.ToArray();
        }

        // Finds missing letter in array and returns that letter.
        // Assumes there is a solution to each array and length is at least 3.
        // input: char[] { "a","b","c","d","f" }
        // output: char "e"
        public static char FindMissingLetter(char[] array)
        {
            for (int i = 1; i < array.Length; i++)
            {
                if ((int)array[i] - (int)array[i - 1] != 1)
                {
                    return (char)((int)array[i] - 1);
                }
            }
            return ' ';
        }
    }
}

using System;
using System.Collections.Generic;

namespace CodeWarsKatas.KataSolutions
{
    public class Kata5Kyu
    {
        // Takes three integer 0-255 values and converts them into hex value
        // input: int 148, int 0, int 211
        // output: string "9400D3"
        public static string Rgb(int r, int g, int b)
        {
            string[] hex = new string[] { Round(r).ToString("X2"), Round(g).ToString("X2"), Round(b).ToString("X2") };
            return String.Join("", hex);
        }
        private static int Round(int n)
        {
            return n < 0 ? 0 : n > 255 ? 255 : n;
        }

        // Takes 2 argments, a word, and a list of words and checks if the list of words are an anagram of the first word.
        // Returns a list of words that are anagrams.
        // input: 'racer', ['crazer', 'carer', 'racar', 'caers', 'racer']
        // output: ['carer', 'racer']
        public static List<string> Anagrams(string word, List<string> words)
        {
            List<string> areAnagrams = new List<string>();
            char[] chars = word.ToCharArray();
            Array.Sort(chars);
            string orderedWord = new string(chars);
            foreach (string aWord in words)
            {
                char[] testChars = aWord.ToCharArray();
                Array.Sort(testChars);
                string orderedTestWord = new string(testChars);
                if (orderedTestWord.Equals(orderedWord))
                {
                    areAnagrams.Add(aWord);
                }
            }
            return areAnagrams;
        }

    }
}

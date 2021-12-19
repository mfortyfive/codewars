using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeWarsKatas.KataSolutions
{
    public class Kata7Kyu
    {
        //returns an array of people with character length of exactly 4.
        //input: string[], { "John", "Joe", "Mike", "Elaine"};
        //output: IEnumerable<string>, { "John", "Mike" }
        public static IEnumerable<string> FriendOrFoe(string[] names)
        {
            List<string> friends = new List<string>();
            foreach (string name in names)
            {
                if (name.Length == 4)
                {
                    friends.Add(name);
                }
            }
            return friends.ToArray();
        }

        //returns boolean value for whether n is a perfect square.
        //input: int, 9
        //output: bool, true
        public static bool IsSquare(int n)
        {
            return Math.Sqrt(n) % 1 == 0 && n >= 0 ? true : false;
        }

        //takes array of integers of pair of ints, age and handicap.
        //returns 'senior' if age is 55 and over and handicap greater than 7.
        //input: { new[] { new[] { 59, 12 }, new[] { 45, 21 }, new[] { -12, -2 }, new[] { 12, 12 } }
        //output: { "Senior", "Open", "Open", "Open" }
        public static IEnumerable<string> OpenOrSenior(int[][] data)
        {
            List<string> status = new List<string>();
            foreach (int[] person in data)
            {
                if (person[0] >= 55 && person[1] > 7)
                {
                    status.Add("Senior");
                } else
                {
                    status.Add("Open");
                }
            }
            return status;
        }


    }
}

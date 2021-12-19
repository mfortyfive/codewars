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
        // input: 5099
        // output: true
        public static bool isPrime(int n)
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
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Numbers
{
    class Program//Gebruikte ik om de code uit te proberen
    {
        static void Main(string[] args)
        {
            int[] arrayTaak = { 1764, 32, 2304, 52, 2601, 110, 4, 25,900,205,2 };
            var Taak = new NumbersOperations(arrayTaak);
            Console.WriteLine("//////////Exercise10");
            foreach(int i in Taak.Exercise10())
            {
                Console.WriteLine(i);
            }
           
           
           Console.ReadLine();
        }
    }
}

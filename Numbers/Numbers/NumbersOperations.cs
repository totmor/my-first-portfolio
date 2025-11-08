using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Numbers
{
    public class NumbersOperations
    {
        //Variabelen
        public int[] numbers;
        //constructor
        public NumbersOperations(int[] numbers)
        {
            this.numbers = numbers;
        }

        //Methodes
        public IEnumerable<int> Exercise1()
        {
            IEnumerable<int> ieNumberableTaak=this.numbers.Where(x=>x<=20);

            return ieNumberableTaak;
        }

        public IEnumerable<int> Exercise2()
        {
            IEnumerable<int> ieNumberableTaak = this.numbers.Where(x => x >= 40&&x<=55);

            return ieNumberableTaak;
        }


        public IEnumerable<int> Exercise3()
        {
            IEnumerable<int> ieNumberableTaak = this.numbers.Where(x => x%2==0);

            return ieNumberableTaak;
        }

        public IEnumerable<int> Exercise4()
        {
            IEnumerable<int> ieNumberableTaak = this.numbers.Where(x => x % 4 == 0 && x%7==0);

            return ieNumberableTaak;
        }

        public IEnumerable<int> Exercise5()
        {
            IEnumerable<int> ieNumberableTaak = this.numbers.Select(x=>x/2);

            return ieNumberableTaak;
        }
        
        public IEnumerable<int> Exercise6()
        {
            IEnumerable<int> ieNumberableTaak = this.numbers.Where(x => x % 2 == 0).Select(x=>x*x);

            return ieNumberableTaak;
        }

        public int Exercise7()
        {
            IEnumerable<int> ieNumberableTaak = this.numbers.Where(x => x % 11 == 0);
            return ieNumberableTaak.Count();
        }

        public int Exercise8()
        {
            IEnumerable<int> ieNumberableTaak = this.numbers.Where(x => (x * x) < 1000 || (x * x) > 1500);
            return ieNumberableTaak.Last();
        }

        public int Exercise9()
        {
            IEnumerable<int> ieNumberableTaak = this.numbers.Where(x => Math.Sqrt(x) % 3 == 0);
            
            return ieNumberableTaak.Sum();
        }

        public IEnumerable<int> Exercise10()
        {
            IEnumerable<int> ieNumberableTaak = this.numbers.Where(x => x % 2 == 0).OrderByDescending(x=>x);

            return ieNumberableTaak;
        }


    }
}

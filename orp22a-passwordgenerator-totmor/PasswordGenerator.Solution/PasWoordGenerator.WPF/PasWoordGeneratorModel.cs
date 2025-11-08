using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PasWoordGenerator.WPF
{
    class PasWoordGeneratorModel
    {

        private int _minimumLengte=0;
        public int Minimum { get { return _minimumLengte; } set { _minimumLengte = value; } }

        private int _maximumLengte = 0;
        public int Maximum { get { return _maximumLengte; } set { _maximumLengte = value; } }

        private String _password;

        public String Password
        {
            get { return _password; }
            set { _password = value; }
        }

        private int _size;

        public int Size
        {
            get { return _size; }
            set { _size = value; }
        }

       


        private int [] _asciiWaarden=  { 
            65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
            75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
            84,85, 86, 87, 88, 89, 90,97,98,99,100,101,
            102,103,104,105,106,107,108,109,110,111,
            112,113,114,115,116,117,118,119,120,121,
            122};

        public int[] AsciiWaarden { get{ return _asciiWaarden; }  set { _asciiWaarden = value; } }
    ///constructor
    public PasWoordGeneratorModel(int min, int max)
        {
            this._minimumLengte = min;
            this._maximumLengte = max;
            SetSize(min, max);
        }

        //methodes
    

        public  int GetSize() { return this.Size; }
        public void SetSize(int min, int max) 
        {
            Random lengteVanPaswoord = new Random();

            this.Size = lengteVanPaswoord.Next(min, max);
        }
        public void SetPassword(Random rnd)//Dit kan gebruikt worden om de paswoord te maken
        {
        int x = 0;
        while (x < this.Size)
         {
         int getal = rnd.Next(0, 52);
         Password += (char)AsciiWaarden[getal];
         x++;
         }
        }

        public string CreatePassword(Random rnd)//Dit kan ook gebruikt worden voor de paswoord.
        {
            StringBuilder passw = new StringBuilder();
            int x = 0;
            while (x < this.Size)
            {
                int getal = rnd.Next(0, 52);
                passw.Append((char)AsciiWaarden[getal]);
                x++;
            }
                return passw.ToString();
        }
    }
}

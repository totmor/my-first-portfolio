using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace _03april2021test
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    /// 
    public class DubbelTicket:Ticket
    {
        //constructoren
        public DubbelTicket() :base()
        {
            
        }
        //members
        public string Aankomstdatum { get; set; }
        //methodes
        public void PrijsdubbelKilometer(string a, string b, int aint) //aint=aantalpersonen
        {
            ///////////////////////////////////Brussel-Antwerpen
            if (a == "Brussel" && b == "Antwerpen")
            {
                Prijs1 = PrijsPerKilometer * 48 * aint;//0.20 euro per kilometer schat ik.48km is de maximum afstand te voet ongeveer.(zie google maps)
            }
            else if (a == "Antwerpen" && b == "Brussel")
            {
                Prijs1 = PrijsPerKilometer * 48 * aint;
            }
            ////////////////////////////////////////////////Brussel-Antwerpen-OOstende
            if (a == "Brussel" && b == "Oostende")
            {
                Prijs1 = PrijsPerKilometer * 117 * aint;//0.20 euro per kilometer schat ik .117 is de maximum afstand te voet ongeveer.(zie google maps)
            }
            else if (a == "Oostende" && b == "Brussel")
            {
                Prijs1 = PrijsPerKilometer * 117 * aint;
            }
            //
            if (a == "Antwerpen" && b == "Oostende")
            {
                Prijs1 = PrijsPerKilometer * 117 * aint;
            }
            else if (a == "Oostende" && b == "Antwerpen")
            {
                Prijs1 = PrijsPerKilometer * 117 * aint;
            }
            ////////////////////////////////////////////////////Brussel-Antwerpen-Oostende-Waterloo
            ///
            if (a == "Waterloo" && b == "Brussel")
            {
                Prijs1 = PrijsPerKilometer * 136 * aint;//........
            }
            else if (a == "Brussel" && b == "Waterloo")
            {
                Prijs1 = PrijsPerKilometer * 136 * aint;
            }
            if (a == "Waterloo" && b == "Antwerpen")
            {
                Prijs1 = PrijsPerKilometer * 136 * aint;
            }
            else if (a == "Antwerpen" && b == "Waterloo")
            {
                Prijs1 = PrijsPerKilometer * 136 * aint;
            }
            if (a == "Waterloo" && b == "Oostende")
            {
                Prijs1 = PrijsPerKilometer * 136 * aint;
            }
            else if (a == "Oostende" && b == "Waterloo")
            {
                Prijs1 = PrijsPerKilometer * 136 * aint;
            }



        }
    }
}

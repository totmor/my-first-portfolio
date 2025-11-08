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
using System.Windows.Shapes;

namespace _03april2021test
{
    /// <summary>
    /// Interaction logic for TicketPrintWindow.xaml
    /// </summary>
    public partial class TicketPrintWindow : Window
    { 
        public TicketPrintWindow(string vertrek,string aankomst,string datum,int personen, double prijs, string aankomstdatum,string HeT)
        {
            InitializeComponent();
            printTextblock.Text = "Van:" + vertrek + "\nNaar: " + aankomst+"\nDatum:"+datum
                +"\nAantal plaatsen : "+ Convert.ToString(personen)+"\nHeen en terug:"+HeT+"\nTerugkomst datum: "+ aankomstdatum +"\nTotale prijs: "+ prijs;
            
        }
       

    }
}

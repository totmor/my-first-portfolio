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
    public partial class MainWindow : Window
    {
        
        public MainWindow()
        {

            InitializeComponent();
            datePicker1.DisplayDateStart = DateTime.Today;
           
            datePicker2.DisplayDateStart = DateTime.Today;
           
        }

        private void CombobxVertrek_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            
        }

        private void CombobxVertrek_Loaded(object sender, RoutedEventArgs e)
        {

        }

       

        private void checkbox_Click(object sender, RoutedEventArgs e)
        {
            if (checkbox.IsChecked == true)
            {
                Tekstblok5.Visibility = Visibility.Visible;
                datePicker2.Visibility = Visibility.Visible;
            }else
            {
                Tekstblok5.Visibility = Visibility.Hidden;
                datePicker2.Visibility = Visibility.Hidden;
            }
        }

        private void btn_Click(object sender, RoutedEventArgs e)
        {
            if (checkbox.IsChecked != true)
            {
                Ticket ticket = new Ticket();
                ticket.Vertrek = Convert.ToString(CombobxVertrek.SelectionBoxItem);
                ticket.Aankomst = Convert.ToString(comboboxBestemming.SelectionBoxItem);
                string date = Convert.ToString(datePicker1.Text);
                ticket.VertrekDatum = date;
                ticket.SetKilometerprijs(0.15);

                ticket.AantalPersonen = Convert.ToInt32(inttextbox.Text);
                ticket.Heen_En_Terug = "Nee";

                ticket.PrijsKilometer(Convert.ToString(CombobxVertrek.SelectionBoxItem), Convert.ToString(comboboxBestemming.SelectionBoxItem), Convert.ToInt32(inttextbox.Text));
                TicketPrintWindow window = new TicketPrintWindow(ticket.Vertrek, ticket.Aankomst, ticket.VertrekDatum, ticket.AantalPersonen, ticket.Prijs1,"GEEN",ticket.Heen_En_Terug);
                window.Show();
            }
        
            
            if (checkbox.IsChecked == true)
            {

                DubbelTicket dbticket = new DubbelTicket();
                dbticket.Vertrek = Convert.ToString(CombobxVertrek.SelectionBoxItem);
                dbticket.Aankomst =Convert.ToString(comboboxBestemming.SelectionBoxItem);
                string date2 = Convert.ToString(datePicker1.Text);
                dbticket.AantalPersonen= Convert.ToInt32(inttextbox.Text);
                string datepicker1text = datePicker1.Text;
                string datepicker2text = datePicker2.Text;
                if(datepicker1text.Contains("Saturday") && datepicker2text.Contains("Sunday"))
                {
                    dbticket.SetKilometerprijs(0.15);
                }
                else
                {
                    dbticket.SetKilometerprijs(0.20);
                }
                dbticket.Heen_En_Terug = "Ja";
                dbticket.VertrekDatum = date2;
                dbticket.Aankomstdatum = datePicker2.Text;
                dbticket.PrijsdubbelKilometer(Convert.ToString(CombobxVertrek.SelectionBoxItem), Convert.ToString(comboboxBestemming.SelectionBoxItem), Convert.ToInt32(inttextbox.Text));
                TicketPrintWindow window2 = new TicketPrintWindow(dbticket.Vertrek, dbticket.Aankomst, dbticket.VertrekDatum, Convert.ToInt32(inttextbox.Text), dbticket.Prijs1, dbticket.Aankomstdatum,dbticket.Heen_En_Terug);
                window2.Show();
            }
            
            

        }

        private void btnInfo_Click(object sender, RoutedEventArgs e)
        {
            MessageBox.Show("Welkom bij de NMBS\nDe prijs voor een enkele reis bedraagt 0.15 euro per kilometer\n" +
                "voor heen en terug reis betaal je 0.20 euro per kilometer\n" +
                "Reizen die vallen in dezelfde weekend hebben de prijs van een EnkelTicket");
        }
    }
}

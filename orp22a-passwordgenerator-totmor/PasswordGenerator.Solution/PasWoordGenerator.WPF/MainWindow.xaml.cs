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


namespace PasWoordGenerator.WPF
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {

        //globale variabelen
        static Random rnd = new Random();       
       static PasWoordGeneratorModel paswoord = new PasWoordGeneratorModel(0,0);
       

        public MainWindow()
        {
            InitializeComponent();
            // Info:van 97 tem 122 zijn de kleine letters.(ASCII)
            // Info:van 65 tem 90 voor de grote letters.(Ascii)
           
        }


        //Buttons events
        private void buttonGeneratePassword_Click(object sender, RoutedEventArgs e)
        {
            if (IsInteger(minTextBox.Text) && IsInteger(maxTextBox.Text))//methode Isinteger onderaan te zien bij de methodes.
            {
                if (Convert.ToInt32(minTextBox.Text) < 6) { MessageBox.Show("Geen minimum-lengte onder  de 6 a.u.b"); return; }
                if (Convert.ToInt32(maxTextBox.Text) > 12) { MessageBox.Show("Geen maximum-lengte boven de 12 a.u.b"); return; }
               if(Convert.ToInt32(minTextBox.Text)> Convert.ToInt32(maxTextBox.Text))
                { 
                    MessageBox.Show("Minimum kan niet groter dan maximum");
                    paswoord = new PasWoordGeneratorModel(0, 0);// Dit doe ik om de Klasse-object terug op een beginwaarde(zoals null) in te stellen
                    return;
                }
                Generate();
                paswoord = new PasWoordGeneratorModel(0,0);// hier ook paswoord object terug op beginwaarde
                return;
            }   
            else 
            {
                MessageBox.Show("geen paswoord");
                minTextBox.Text = string.Empty;
                maxTextBox.Text = string.Empty;
            }
        }
        private void buttonReset_Click(object sender, RoutedEventArgs e)
        {

            minTextBox.Text = string.Empty;
            maxTextBox.Text = string.Empty;
            paswoordTextBox.Text = string.Empty;
            buttonGeneratePassword.IsEnabled = true;
        }


        public void Generate() 
        {
            

         try { paswoord.Minimum=  Convert.ToInt32(minTextBox.Text);} catch(Exception exception) {paswoord.Minimum = 0;}

         try{paswoord.Maximum = Convert.ToInt32(maxTextBox.Text);}catch (Exception exception) {paswoord.Maximum = 0;}

        paswoord.SetSize(paswoord.Minimum, paswoord.Maximum);

            paswoordTextBox.Text = paswoord.CreatePassword(rnd);
        buttonGeneratePassword.IsEnabled = false;
            }

        public bool IsInteger(string textminOfmax)
        {
            int num = 0;
            return int.TryParse(textminOfmax, out num);
        }

        private void sliderMin_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
        {

            minTextBox.Text = sliderMin.Value.ToString();
        }

        private void sliderMax_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
        {
            maxTextBox.Text = sliderMax.Value.ToString();
        }
    }
}

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
using PoliticusDomain; //Zorg ervoor dat de klasse politcus in een correct project -type wordt gemaakt.

namespace Politicus_abdelmounaim_ptoAvond
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        //Globale variabelen
        PoliticusModel mijnPoliticus = new PoliticusModel();
        List<PoliticusModel> myListofPoliticians = new List<PoliticusModel>();
        int listCounter = 0;//Om de index bij te houden bij het toevoegen in een listbox(index vand de List<PoliticusModel>) deze wordt +1 hoger.
//De hierboven variabele listcounter is gewoon gepaard met de listbox selected Index. Zo kan gemakkelijk aan m'n list<> werken.
        public MainWindow()
        {
            InitializeComponent();
            //5)Maak een politicus aan met 10 voorkeurstemmen.
            PoliticusModel politicusmet10VoorkeurStemmen = new PoliticusModel("Abdelmounaim", "Haddouch",PoliticusModel.Geslacht.Man, "Blanco", 10);//
           //9)Roep de Methode verander van gedacht.
            politicusmet10VoorkeurStemmen.VeranderVangedacht("MijnPolitiekePartij");
            myListofPoliticians.Add(politicusmet10VoorkeurStemmen);
            ListBoxItem item = new ListBoxItem();
            item.Content = myListofPoliticians[listCounter];
            item.Foreground = Brushes.DarkGoldenrod;
            _listBox.Items.Add(item);
            listCounter++;
            
        }
        //buttons events
        private void _toevoegen_Click(object sender, RoutedEventArgs e)//Toevoegen van politiekers.
           
        {
         Start();
        }

        private void _closebtn_Click(object sender, RoutedEventArgs e)//10)Zorg voor een knop om het venster te sluiten.
        {
            Close();
        }

        //textBox events
        private void _voorkeurstemmenTextBox_KeyUp(object sender, KeyEventArgs e)//correcte validatie van stemmen ( geen letters)
        {
            if (_voorkeurstemmenTextBox.Text == string.Empty) return;
            if (!Isinteger(_voorkeurstemmenTextBox.Text))
            {
                MessageBox.Show("Een getal invullen bij voorkeurStemmen a.u.b");
                EmptyTheTextBoxes();
            }
        }

        //Listbox events
        private void _listBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            

        }

        //methodes
        public bool Isinteger(string s)
        {
            int result = 0;
            return int.TryParse(s, out result);

        }

        public void Start() 
        {
            mijnPoliticus.SetVoornaam(_voornaamTextBox.Text);//Formulier wordt vanaf hier bekeerd tot de klasse politicusModel.
            mijnPoliticus.SetAchternaam(_achternaamTextBox.Text);

            mijnPoliticus.SetGeslacht(_comboboxGeslacht.SelectedIndex);
            mijnPoliticus.SetPartij(_partijComboBox.SelectionBoxItem.ToString());
            bool isStemEenInteger = Isinteger(_voorkeurstemmenTextBox.Text);
            if (isStemEenInteger == true)
            {
                mijnPoliticus.setVoorkeurStemmen(Convert.ToInt32(_voorkeurstemmenTextBox.Text));
            }
            else { MessageBox.Show("Vul een getal in bij voorkeurstemmen a.u.b"); }//tot hier

            myListofPoliticians.Add(mijnPoliticus);//Toevoegen politicus aan een list<>
            ListBoxItem item = new ListBoxItem();//Maken van een listboxItem klasse Object
            item.Content = myListofPoliticians[listCounter];
            item.Foreground = Brushes.DarkGoldenrod;
            _listBox.Items.Add(item);
            EmptyTheTextBoxes();
            listCounter++;

            mijnPoliticus.SetToDefault();//terug een lege politicusModel. ( globale variabele).
        }

        public void EmptyTheTextBoxes()
        {
            _voornaamTextBox.Text = string.Empty;
            _achternaamTextBox.Text = string.Empty;
            _comboboxGeslacht.SelectedIndex = -1;
            _partijComboBox.SelectedIndex = -1;
            _voorkeurstemmenTextBox.Text = string.Empty;
        }

       

      

      
    }
}

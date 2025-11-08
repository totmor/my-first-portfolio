using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PoliticusDomain
{
    public class PoliticusModel//Vertaal het UMl schema naar code
    {
        public enum Geslacht { Onbepaald=1,Man=2,Vrouw=3}//het geslacht... + uitbreiding enums
        // variabelen -Class members
        private string _voornaam;

        public string Voornaam
        {
            get { return _voornaam; }
            set { _voornaam = value; }
        }

        private string _achternaam;

        public string AchterNaam
        {
            get { return _achternaam; }
            set { _achternaam = value; }
        }

        private Geslacht _geslachtprop=Geslacht.Onbepaald;

        public Geslacht Geslachtprop
        {
            get { return _geslachtprop; }
            private set { _geslachtprop = value; }
        }



        private string _partij;
        public string Partij { get { return _partij; } private set { } }


        private int _voorkeurStemmen;

        public int VoorkeurStemmen
        {
            get { return _voorkeurStemmen; }
            set { _voorkeurStemmen = value; }
        }


        //Constructor(en)
        public PoliticusModel()
        {

        }
        public PoliticusModel(string vNaam, string aNaam, Geslacht geslacht, string partij, int vStemmen)
        {
            this._voornaam = vNaam;
            this._achternaam = aNaam;
            this._geslachtprop = geslacht;
            this._partij = partij;
            this._voorkeurStemmen = vStemmen;
        }

        //Getters

        public string GetVoornaam() { return _voornaam; }
        public string GetAchternaam() { return _achternaam; }
        public Geslacht Getgeslacht() { return _geslachtprop; }
        public string Getpartij() { return _partij; }

        //Setters
        public void SetVoornaam(string vn) { _voornaam = vn; }
        public void SetAchternaam(string an) { _achternaam = an; }
        public void SetPartij(string part) { _partij = part; }
        public void SetGeslacht(int geslacht) 
        {
            if (geslacht == 0) { Geslachtprop = PoliticusModel.Geslacht.Onbepaald; }
            else if (geslacht == 1) { Geslachtprop = PoliticusModel.Geslacht.Man; }
            else if (geslacht == 2) { Geslachtprop = PoliticusModel.Geslacht.Vrouw; }
        }
        public void setVoorkeurStemmen(int stem) { _voorkeurStemmen = stem; }

        //Methodes
        public int GetStemmen() { return _voorkeurStemmen; }


        public void Geef1Stem() { _voorkeurStemmen=_voorkeurStemmen+ 1; }

        public void VeranderVangedacht(string partij) { _partij = partij; _voorkeurStemmen = 0; }

        public void SetToDefault()
        {
            this.Voornaam = string.Empty;
            this.AchterNaam = string.Empty;
            this.Geslachtprop = Geslacht.Onbepaald;
            SetPartij(string.Empty);
            this.VoorkeurStemmen = 0;
        }
        public override string ToString()
        {
            return $"Voornaam: {this.Voornaam}\nAchternaam: {this.AchterNaam}\nGeslacht: {this.Geslachtprop}\nPartij: {this.Partij}\nVoorkeurstemmen: {Convert.ToString(this.VoorkeurStemmen)}";
        }
    }
}


export class Session {
        public id: number=0;
        public name: string="";
        public track: string="";
        public date: Date=new Date();
        public duree: number=0;
        public local: string=""; // Renommé de "adress" à "local" pour correspondre à la propriété utilisée dans les objets SESSIONITEMS.
        public participants: number=0;
        public isCompleted: boolean=false;
      }
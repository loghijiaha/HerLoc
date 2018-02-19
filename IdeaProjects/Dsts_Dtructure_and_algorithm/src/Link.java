
public class Link {
        Car CarList;
        Link next;
        Link prev;
        public Link(Car CarList){
            this.CarList=CarList;
        }
        public String toString(){
            return ("Car : "+ CarList.carModel+" Price : "+ CarList.price +" Manufacturer : "+CarList.manufacture_name+
                    " Engine Capacity : "+CarList.engCap);
        }

    }

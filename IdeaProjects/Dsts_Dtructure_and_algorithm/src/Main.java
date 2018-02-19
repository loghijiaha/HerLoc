public class Main {
    public static void main(String[] args) {
        Car car1 = new Car("Tesla 0X", 20000000, "Tesla Co.Ltd", 40.0);
        Car car2 = new Car("Mini Cooper", 98000000, "Mini cooper Co.Ltd", 6.0);
        Car car3 = new Car("Tesla 089X", 87000000, "Tesla Co.Ltd", 80.0);
        Car car4=new  Car("Ford Prime Mustang",78000000,"Ford",50.0);
        DoubleLinkedList Menu = new DoubleLinkedList();
        Menu.insertCarModel(car1);
        Menu.insertCarModel(car2);
        Menu.insertCarModel(car3);
        Menu.insertCarModel(car4);
        Menu.Display();
        Menu.updatePrice(car1,5000000);
        Menu.Display();
    }
}

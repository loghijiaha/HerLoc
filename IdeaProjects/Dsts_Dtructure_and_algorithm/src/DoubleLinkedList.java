public class DoubleLinkedList {
    private Link fLink;
    private Link lLink;
    private DoubleLinkedList filterList;
    public DoubleLinkedList(){
        fLink=null;
        lLink =null;
    }
    public void insertCarModel(Car CarList) throws NullPointerException{
        System.out.println("Inserted");
        Link newLink= new Link(CarList);
        if(fLink==null){
           fLink=newLink;
        }else {
            lLink.next=newLink;
            newLink.prev=lLink;
        }
        lLink=newLink;
    }
    public Link removeCarModel(Car CarList) {
        Link current = fLink;
        while (current.CarList != CarList) {
            current = current.next;
            if (current == null) {
                return (null);
            }
        }
        if(current.next==null){
            lLink=current.prev;
        }else {
            current.next.prev=current.next;
        }
        if(current.prev==null){
            fLink=current.next;
        }else {
            current.prev.next=current.prev;
        }
        System.out.println("Removed");
        return current;
    }
    public void updatePrice(Car CarList,long price){
        Link current = fLink;
        while (current.CarList != CarList) {
            current = current.next;
        }
        System.out.println("Updated");
        current.CarList.price=price;
    }
    public void filterCar(long strtPrice,long endPrice){
        filterList = new DoubleLinkedList();
        Link current = fLink;
        try {
            while (current.CarList != null) {
                if (current.CarList.price < endPrice && current.CarList.price > strtPrice) {
                    filterList.insertCarModel(current.CarList);
                }
                current = current.next;
            }
        }catch (Exception e ){

        }
        System.out.println("Filtered");
        filterList.Display();
    }
    public void Display() throws NullPointerException{
        Link current = fLink;
        try {
            while (current.CarList != null) {
                System.out.println(current);
                current = current.next;
            }
        }catch (Exception e){}
    }

}


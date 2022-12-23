package constants;

public enum GridLocation {

    TOP_LEFT("0"),
    TOP_CENTER("1"),
    TOP_RIGHT("2"),
    MID_LEFT("3"),
    MID_CENTER("4"),
    MID_RIGHT("5"),
    BOTTOM_LEFT("6"),
    BOTTOM_CENTER("7"),
    BOTTOM_RIGHT("8");

    private String cellNumber;

     GridLocation(String cellNumber){
        this.cellNumber = cellNumber;
    }

    public String getCellNumber() {
        return cellNumber;
    }

}

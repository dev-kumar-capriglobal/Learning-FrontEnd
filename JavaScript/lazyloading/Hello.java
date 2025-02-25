public class Hello{


    public static  void main(String args[] ){
            
            int a = 10;     
        
        try{

            a=0;
            System.out.println("Hello");
        }
        catch(Exception e){
            System.out.println(" e , .()" + e);
        }

        finally{
            System.out.println("finally of finally ");
        }

        System.out.println("finally outside");
        

    }

}
package pkg01aulaoperadores;


public class Main {

    
    public static void main(String[] args) {
        //Aritméticos
        int a = 10 + 1;
        int b = a + 10;
        int c = b * 3;
        int d = c / 2;
        double e = 4.5 + 1.7;
        String mostrarA = "o valor de A é " +a;
        System.out.println(mostrarA);
        
        a += 10; 
        b -= 1;
        c *= 5; 
        d /= 1;
        
        System.out.println("o valor de A é " +a);
        System.out.println("o valor de B é " +b);
        System.out.println("o valor de C é " +c);
        System.out.println("o valor de D é " +d);
        System.out.println("o valor de E é " +e);        
        //----------------------------------------------------
        // Lógicos
        
        boolean ehMaior = 10 > 20;
        boolean ehMenor = 10 < 20;
        boolean ehMenorigual = 10 <= 20;
        boolean ehMaiorigual = 10 >= 20;
        boolean ehIgual = 10 == 10;
        boolean ehDiferente = 10!= 20;
        
        System.out.println("É Maior: " + ehMaior);
        System.out.println("É Menor: " + ehMenor);
        System.out.println("É Menor ou igual: " + ehMenorigual);
        System.out.println("É Maior ou igual: " + ehMaiorigual);
        System.out.println("É Igual: " + ehIgual);
        System.out.println("É Diferente: " + ehDiferente);
        
        if (10 > 20){
            System.out.println("É verdadeiro");
        }else{
            System.out.println("É Falso");
        }
        
        //--------------------------------------------------------
        // Lógicos
        
        boolean valor = (10 > 9) && (5 > 1);
        boolean valor1 = true && true;
        boolean valor2 = true && false;
        boolean valor3 = false || true;
        boolean valor4 = false || false;
        boolean valor5 = (10 > 9) || (5 > 1);
        boolean valor6 = ((10 > 9) && (5 > 1)) || (( 120 < 1) && 31 > 3);
        boolean negacao = !true;
        boolean negacao2 = !valor6;
        
        System.out.println(valor);        
        System.out.println(valor1);        
        System.out.println(valor2);
        System.out.println(valor3);
        System.out.println(valor4);
        System.out.println(valor5);
        System.out.println(valor6);
        System.out.println(negacao2);
        
        
        
        
    }
    
}

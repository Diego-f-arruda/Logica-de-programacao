
package exercicios;

import java.util.Scanner;

public class exercicio2{
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("Informe a Largura");
        double L1 = leia.nextDouble();
        
        System.out.println("Informe a Altura");
        double L2 = leia.nextDouble();
        
        double A = (L1 * L2);
        System.out.println("A area de seu retangulo é: " + A + "m²");
        
        
    }
    
}

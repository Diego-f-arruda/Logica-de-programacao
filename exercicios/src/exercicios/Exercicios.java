
package exercicios;

import java.util.Scanner;


public class Exercicios {

    
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        System.out.println("Informe um numero: ");
        int n = leia.nextInt();
        n--;
        System.out.println("O numero anterior é: "  + n);
    }
    
}

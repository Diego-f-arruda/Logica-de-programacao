
package exercicios;

import java.util.Date;
import java.util.Scanner;


public class exercicio3 {
    public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
        System.out.println("Informe o ano que nasceu");
        int anos = s.nextInt();
        System.out.println("Informe o mes");
        int mes = s.nextInt();
        System.out.println("Informe o dia");
        int dia = s.nextInt();
        int Res = (anos * 365) + (mes * 30) + dia;
        System.out.println("Você já viveu " + Res + " Dias.");
        
    
    }
}

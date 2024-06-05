
package exercicios;

import java.util.Scanner;

public class exercicio4 {
    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
        System.out.println("Informe quantos eleitores possui o municipio");
        double e = s.nextInt();
        System.out.println("Quantos votos Brancos?");
        double b = s.nextInt();
        System.out.println("Quantos votos nulos?");
        double n = s.nextInt();
        System.out.println("Quantos votos Validos?");
        double v = s.nextInt();
        
        double Npercentual = (n/e)*100;
        double Bpercentual = (b/e)*100;
        double Vpercentual = (v/e)*100;
        System.out.println("Teve " + Npercentual + " de votos Nulos");
        System.out.println("Teve " + Bpercentual + " de votos Brancos");
        System.out.println("Teve " + Vpercentual + " de votos Válidos");
        
    }
    
    
}

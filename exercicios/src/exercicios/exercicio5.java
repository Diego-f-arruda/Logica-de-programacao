
package exercicios;

import java.util.Scanner;


public class exercicio5 {
     public static void main (String[] args){
         Scanner s = new Scanner(System.in);
         System.out.println("Qual a temperatura em Celsius?");
         double T = s.nextDouble();
         double F = (1.8*T) + 32;
         double K = T + 273.15;
         System.out.println("Essa Temperatura em Celsius é: " + T + "ºC");
         System.out.println("Essa Temperatura em Fahrenheit fica: " + F + "ºF");
         System.out.println("Essa Temperatura em Kelvin fica: " + K + "ºK");
     }
}

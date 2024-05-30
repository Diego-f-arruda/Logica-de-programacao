/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package exercicios;

import java.util.Scanner;

/**
 *
 * @author diego_f_arruda
 */
public class exercicio2{
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("Informe o Primeiro Medida do retangulo");
        double L1 = leia.nextDouble();
        
        System.out.println("Informe o Segundo Medida do retangulo");
        double L2 = leia.nextDouble();
        
        double A = (L1 * L2);
        System.out.println("A area de seu retangulo é: " + A + "m²");
        
        
    }
    
}

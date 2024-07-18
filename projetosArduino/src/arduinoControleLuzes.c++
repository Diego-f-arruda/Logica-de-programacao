byte vetLeds[] = {4, 5, 6, 7, 8, 9, 10, 11, 12, 13};
unsigned long timer; 
int ledAtual = 0;
int direcao = 1;


void setup(){
  Serial.begin(9600);
  for(int i = 0;i < 10; i++){
  	pinMode(vetLeds[i], OUTPUT);
  }
  timer = millis();         
}

void loop(){
  int valor = valorPoten();
  int tempoPerc = millis()- timer;
  if(tempoPerc > valor){
  	controlLed();
  timer = millis();
  }
 
}

int valorPoten(){
	int valor = analogRead(A5);
  	Serial.println(valor);
      return valor;
}

void controlLed(){
  for(int i = 0;i < 10; i++){
  digitalWrite(vetLeds[i], LOW);
  } 
      digitalWrite(vetLeds[ledAtual], HIGH);
      ledAtual += direcao;
      
      if(ledAtual == 9){
      	direcao = -1;
      }
      if(ledAtual == 0){
      	direcao = 1;
      }
}